import React, { useEffect, useState } from 'react';
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
import makeFormData from '../../../../../_some_function/makeFormData';
// 
import ConfirmDiv from '../../../../../component/some_div/confirm_div/ConfirmDiv';
import { actionFashionChangeCountCartNum } from '../../../../../redux/action/action_count_cart';
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';
//
import { params_buy } from '../../../_params/FashionParams';
import FashionH from '../../../components/head/_main/FashionH';
import InfoBuying from '../../../components/info_buying/InfoBuying';
import BuyProductList from '../buy_product_list/_main/BuyProductList';
import BuyCurExtra from '../extra_buy/cur_extra/_main/BuyCurExtra';
import BuyChoicesExtra from '../extra_buy/choices_extra/_main/BuyChoicesExtra';
import FashionBuyTotal from '../total/FashionBuyTotal';
//
import './FashionBuy.scss';

//
function FashionBuy(props) {
    //
    const dispatch = useDispatch();

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
     
    const [open_confirm_buy, setOpenConfirmBuy] = useState(false);
    const [buying_success, setBuyingSuccess] = useState(false);
    const [is_buying, setIsBuying] = useState(false);

    // effect
    useEffect(() => {
        document.title = 'Buying';
        getAPI_CartBuy();
        getAPI_Transport({
            size: 1,
        });
        getAPI_Payment()

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
        setHasFetchedVoucher(true)
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
        setArrPayment(res.data)
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
        setOpenConfirmBuy(true);
    }
    //
    function closeConfirmBuy() {
        setOpenConfirmBuy(false);
    }
    //
    async function confirmBuy() {
        setIsBuying(true);
        const { trans_ix, price_ix } = cur_transport;
        const formData = makeFormData({
            voucher_model: arr_voucher[voucher_ix].id,
            transport_price_model: arr_transport[trans_ix].prices[price_ix].id,
            payment: arr_payment[payment_ix],
        });
        await API_FashionBuy_LC('POST', {}, formData);
        //
        const count_checked = buy_shops.reduce(
            (a, b) => a + b.checked_products.length,
            0
        );
        dispatch(actionFashionChangeCountCartNum(-count_checked));
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
    
    const transport_price = arr_transport.length
        ? arr_transport[cur_transport.trans_ix].prices[cur_transport.price_ix]
              .price
        : 0;
    //
    const voucher_price = voucher_ix == -1 ? 0 : arr_voucher[voucher_ix].cost;

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

                    <div className="FashionBuy_current box-shadow-1 brs-5px">
                        <BuyCurExtra
                            name_trans={
                                arr_transport.length
                                    ? arr_transport[cur_transport.trans_ix].name
                                    : ''
                            }
                            title_trans={
                                arr_transport.length
                                    ? arr_transport[cur_transport.trans_ix]
                                          .prices[cur_transport.price_ix].info
                                    : ''
                            }
                            price_trans={transport_price}
                            //
                            name_payment={arr_payment[payment_ix]}
                            //
                            name_voucher={
                                voucher_ix != -1
                                    ? arr_voucher[voucher_ix].name
                                    : ''
                            }
                            title_voucher={
                                voucher_ix == -1
                                    ? ''
                                    : arr_voucher[voucher_ix].info
                            }
                            price_voucher={
                                voucher_ix == -1
                                    ? 0
                                    : voucher_price
                            }
                            //
                            handleChooseExtraBuy={handleChooseExtraBuy}
                            doNotUseVoucher={doNotUseVoucher}
                        />
                    </div>

                    <div className="FashionBuy_total">
                        <FashionBuyTotal
                            amount={amount}
                            transport_price={transport_price * buy_shops.length}
                            voucher_price={voucher_price * buy_shops.length}
                            payment={arr_payment[payment_ix]}
                            openConfirmBuy={openConfirmBuy}
                        />
                    </div>
                </div>
            </div>
            
            {/* empty cart buy */}
            <div
                className={`${
                    !buy_shops.length && has_fetched
                        ? 'FashionBuy_nothing'
                        : 'display-none'
                }`}
            >
                Nothing to buy
            </div>
            
            {/* loading cart buy */}
            <div className="width-fit-content margin-auto">
                <br/><br/>
                <CircleLoading open_fetching={!has_fetched}/>
            </div>

            {/* position fix */}
            <div className={extra_buy == '' ? 'display-none' : 'screen-blur'}>
                <BuyChoicesExtra
                    extra_buy={extra_buy}
                    arr_transport={arr_transport}
                    cur_transport={cur_transport}
                    handleChangeTransport={handleChangeTransport}
                    // 
                    arr_payment={arr_payment}
                    payment_ix={payment_ix}
                    handleChangePayment={handleChangePayment}
                    // 
                    amount={amount}
                    has_fetched_voucher={has_fetched_voucher}
                    arr_voucher={arr_voucher}
                    voucher_ix={voucher_ix}
                    handleChangeVoucher={handleChangeVoucher}
                    // 
                    closeExtraBuy={closeExtraBuy}
                />
            </div>

            <ConfirmDiv
                open_confirm={open_confirm_buy}
                closeConfirm={closeConfirmBuy}
                confirmYes={confirmBuy}
            >
                <div>
                    <InfoBuying
                        amount={+amount}
                        voucher_price={+voucher_price * buy_shops.length}
                        transport_price={+transport_price * buy_shops.length}
                        payment={arr_payment[payment_ix]}
                    />

                    <br />
                    <div className="label-field">Do you want to buy now?</div>
                </div>
            </ConfirmDiv>

            <div className={is_buying ? 'screen-blur' : 'display-none'}>
                <div className="pos-abs-center">
                    <div>
                        <CircleLoading open_fetching={is_buying}/>
                    </div><br/>

                    <div className="text-align-center">
                        Buying...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionBuy;
