import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//
import {
    API_FashionCart_LC,
    API_FashionAction_UD,
    API_FashionVoucher_L,
    API_FashionTransport_L,
    API_FashionBuy_LC,
    API_FashionPayment_L,
} from '../../../../../api/api_django/fashion/APIFashionToken';

import { context_api } from '../../../../../_context/ContextAPI';

import makeFormData from '../../../../../_some_function/makeFormData';
//
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';
import ScreenBlur from '../../../../../component/_screen_blur/_main/ScreenBlur';
//
import { actionFashionChangeCountCartNum } from '../../../../../redux/action/action_count_cart';

import { params_buy } from '../../../_params/FashionParams';

import FashionH from '../../../components/head/_main/FashionH';
import BuyProductList from '../buy_product_list/_main/BuyProductList';
import BuyFetching from '../buy_fetching/BuyFetching';
import FashionBuyTotal from '../total/FashionBuyTotal';
import TransportCurrent from '../transportation/current/TransportCurrent';
import PaymentCurrent from '../payment/current/PaymentCurrent';
import VoucherCurrent from '../voucher/current/VoucherCurrent';
import TransportationChoices from '../transportation/choices/_main/TransportationChoices';
import PaymentChoices from '../payment/choices/_main/PaymentChoices';
import VoucherChoices from '../voucher/choices/_main/VoucherChoices';
//
import './FashionBuy.scss';

//
function FashionBuy(props) {
    //
    const dispatch = useDispatch();

    //
    const {
        openScreenFetching,
        openScreenConfirm,

        closeScreenFetching,
    } = useContext(context_api);

    // state
    const [buy_shops, setBuyShops] = useState([]);

    const [arr_transport, setArrTransport] = useState([]);
    const [arr_voucher, setArrVoucher] = useState([]);
    const [arr_payment, setArrPayment] = useState([]);

    const [extra_buy, setExtraBuy] = useState('');

    const [cur_transport, setCurTransport] = useState({
        trans_ix: 0,
        price_ix: 0,
    });
    const [payment_ix, setPaymentIx] = useState(0);
    const [voucher_ix, setVoucherIx] = useState(-1);

    const [has_fetched, setHasFetched] = useState(false);
    const [has_fetched_voucher, setHasFetchedVoucher] = useState(false);
    const [buying_success, setBuyingSuccess] = useState(false);

    const { trans_ix, price_ix } = cur_transport;

    // effect
    useEffect(() => {
        document.title = 'Buying';
        getAPI_CartBuy();
        getAPI_Transport({
            size: 1,
        });
        getAPI_Payment();
    }, []);

    /* --------------------- GET API ----------------------- */

    //
    async function getAPI_CartBuy() {
        const res = await API_FashionCart_LC('GET', params_buy);
        setBuyShops(res.data);
        setHasFetched(true);
    }

    //
    async function getAPI_FashionVoucher() {
        const res = await API_FashionVoucher_L({
            user_voucher: 1,
            page: 1,
            size: 6,
            c_count: arr_voucher.length,
        });
        setArrVoucher([...arr_voucher, ...res.data.data]);
        setHasFetchedVoucher(true);
    }

    //
    async function getAPI_Transport(params = {}) {
        const res = await API_FashionTransport_L({
            page: 1,
            size: 6,
            c_count: arr_transport.length,
            ...params,
        });
        setArrTransport([...arr_transport, ...res.data.data]);
    }

    //
    async function getAPI_Payment() {
        const res = await API_FashionPayment_L();
        setArrPayment(res.data);
    }

    /* --------------------- EXTRA ----------------------- */

    //
    function doNotUseVoucher() {
        setVoucherIx(-1);
    }

    // extra
    function handleChooseExtraBuy(new_extra_buy) {
        setExtraBuy(new_extra_buy);
        if (new_extra_buy == 'transport' && arr_transport.length <= 1) {
            getAPI_Transport();
        } else if (new_extra_buy == 'voucher' && !arr_voucher.length) {
            getAPI_FashionVoucher();
        }
    }

    //
    function closeExtraBuy() {
        setExtraBuy('');
    }

    //
    function handleChangeTransport(trans) {
        setCurTransport({
            trans_ix: trans.trans_ix,
            price_ix: trans.price_ix,
        });
        closeExtraBuy();
    }

    //
    function handleChangePayment(ix) {
        setPaymentIx(ix);
        closeExtraBuy();
    }

    //
    function handleChangeVoucher(ix) {
        setVoucherIx(ix);
        closeExtraBuy();
    }

    /* --------------------- CONFIRM BUY ----------------------- */

    // confirm
    function openConfirmBuy() {
        openScreenConfirm('Buying', 'Do you want to buy now!', confirmBuy);
    }

    //
    async function confirmBuy() {
        openScreenFetching(BuyFetching);

        const formData = makeFormData({
            voucher_model: voucher_ix != -1 ? arr_voucher[voucher_ix].id : -1,
            transport_price_model: arr_transport[trans_ix].prices[price_ix].id,
            payment: payment_name,
        });
        await API_FashionBuy_LC('POST', {}, formData);
        //
        const count_checked = buy_shops.reduce(
            (a, b) => a + b.checked_products.length,
            0
        );
        dispatch(actionFashionChangeCountCartNum(-count_checked));
        closeScreenFetching();
        setBuyingSuccess(true);
    }

    /* -------------------------------------------- */

    //
    const amount = buy_shops.reduce(
        (acc, buy_shop) =>
            acc +
            buy_shop.checked_products.reduce(
                (acc_2, checked_product) =>
                    acc_2 +
                    checked_product.quantity *
                        checked_product.product.new_price,
                0
            ),
        0
    );

    //
    let transport_name = '';
    let transport_price = 0;
    let transport_title = '';

    if (arr_transport.length) {
        const transport_item = arr_transport[trans_ix]
        const transport_price_item = transport_item.prices[price_ix]

        transport_name = arr_transport[trans_ix].name;
        transport_price = transport_price_item.price;
        transport_title = transport_price_item.title;
    }

    //
    let voucher_name = '';
    let voucher_price = 0;

    if (voucher_ix != -1) {
        const voucher_item = arr_voucher[voucher_ix]
        voucher_name = voucher_item.name;
        voucher_price = voucher_item.cost;
    }

    //
    const payment_name = arr_payment[payment_ix];

    /* -------------------------------------------- */

    //
    if (buying_success) {
        return <Redirect to="/fashion/personal/bill/buying" />;
    }
    //
    return (
        <div>
            <FashionH />

            <div
                className={`FashionBuy ${
                    !buy_shops.length || !has_fetched ? 'display-none' : ''
                }`}
            >
                <div className="FashionBuy_body">
                    <div className="FashionBuy_product">
                        <BuyProductList buy_shops={buy_shops} amount={amount} />
                    </div>

                    <div className="FashionBuy_current bg-primary box-shadow-1 brs-5px">
                        <div>
                            <TransportCurrent
                                name={transport_name}
                                title={transport_title}
                                price={transport_price}
                                handleChooseExtraBuy={handleChooseExtraBuy}
                            />
                        </div>

                        <div>
                            <PaymentCurrent
                                name={payment_name}
                                handleChooseExtraBuy={handleChooseExtraBuy}
                            />
                        </div>

                        <div>
                            <VoucherCurrent
                                name={voucher_name}
                                cost={voucher_price}
                                handleChooseExtraBuy={handleChooseExtraBuy}
                                doNotUseVoucher={doNotUseVoucher}
                            />
                        </div>
                    </div>

                    <div className="FashionBuy_total">
                        <FashionBuyTotal
                            amount={amount}
                            transport_price={transport_price}
                            voucher_price={voucher_price}
                            shop_count={buy_shops.length}
                            payment={payment_name}
                            openConfirmBuy={openConfirmBuy}
                        />
                    </div>
                </div>
            </div>

            {/* empty */}
            <div
                className={`${
                    !buy_shops.length && has_fetched
                        ? 'FashionBuy_nothing'
                        : 'display-none'
                }`}
            >
                Nothing to buy
            </div>

            {/* loading */}
            <div className="width-fit-content margin-auto">
                <br />
                <br />
                <CircleLoading open_fetching={!has_fetched} />
            </div>

            {/* extra */}
            {extra_buy != '' && (
                <ScreenBlur closeScreen={closeExtraBuy}>
                    <div>
                        {extra_buy == 'transport' && (
                            <TransportationChoices
                                arr_transport={arr_transport}
                                cur_transport={cur_transport}
                                handleChangeTransport={handleChangeTransport}
                                closeExtraBuy={closeExtraBuy}
                            />
                        )}

                        {extra_buy == 'payment' && (
                            <PaymentChoices
                                arr_payment={arr_payment}
                                payment_ix={payment_ix}
                                handleChangePayment={handleChangePayment}
                                closeExtraBuy={closeExtraBuy}
                            />
                        )}

                        {extra_buy == 'voucher' && (
                            <VoucherChoices
                                amount={amount}
                                has_fetched={has_fetched_voucher}
                                arr_voucher={arr_voucher}
                                voucher_ix={voucher_ix}
                                handleChangeVoucher={handleChangeVoucher}
                                closeExtraBuy={closeExtraBuy}
                            />
                        )}
                    </div>
                </ScreenBlur>
            )}
        </div>
    );
}

export default FashionBuy;
