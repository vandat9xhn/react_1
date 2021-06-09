import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import {
    API_FashionCart_LC,
    API_FashionBuy_LC,
} from '../../../../../api/api_django/fashion/APIFashionToken';
//
import { useScreenFetching } from '../../../../../_custom_hooks/UseScreenFetching';
//
import makeFormData from '../../../../../_some_function/makeFormData';
//
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';
//
import { actionFashionChangeCountCartNum } from '../../../../../redux/action/action_count_cart';
//
import { params_buy } from '../../../__params/home/FashionParams';
//
import './FashionBuyCommon.scss';
import './FashionBuy.scss';
//
import FashionH from '../../../components/head/_main/FashionH';
import BuyProductList from '../product_list/_main/BuyProductList';
import FashionBuyTotal from '../total/FashionBuyTotal';
import NoItemHasFetched from '../../../../../component/some_div/no_item/NoItemHasFetched';
import FashionBuyExtra from '../extra/choices/FashionBuyExtra';
import FashionBuyExtraCurrent from '../extra/current/FashionBuyExtraCurrent';
import BuyFetching from '../fetching/BuyFetching';
// 
import './FashionBuyRes.scss';

//
function FashionBuy(props) {
    //
    const use_history = useHistory();

    //
    const dispatch = useDispatch();

    //
    const { openScreenConfirm } = useContext(context_api);

    //
    const [buy_state, setBuyState] = useState({
        buy_shops: [],
        extra_buy: '',
        has_fetched: false,
    });

    const { buy_shops, extra_buy, has_fetched } = buy_state;

    //
    const transport_obj = useRef({
        transport: { name: '', price_arr: [{ title: '', price: 0 }] },
        transport_ix: 0,
        price_ix: 0,
        transport_has_choose: false,
    });
    const voucher_obj = useRef({
        voucher: { name: '', info: '', cost: 0 },
        voucher_ix: 0,
        voucher_has_choose: false,
    });
    const payment_obj = useRef({
        payment: { name: 'COD' },
        payment_ix: 0,
    });

    const { transport, transport_ix, price_ix, transport_has_choose } =
        transport_obj.current;
    const { voucher, voucher_ix, voucher_has_choose } = voucher_obj.current;
    const { payment, payment_ix } = payment_obj.current;

    const transport_name = transport.name;
    const transport_price = transport.price_arr[price_ix].price;
    const transport_title = transport.price_arr[price_ix].title;

    const voucher_name = voucher.name;
    const voucher_info = voucher.info;
    const voucher_price = voucher.cost;

    const payment_name = payment.name;

    //
    const handleScreenFetching = useScreenFetching();

    // effect
    useEffect(() => {
        document.title = 'Buying';
        getAPI_CartBuy();
    }, []);

    /* --------------------- GET API ----------------------- */

    //
    async function getAPI_CartBuy() {
        const res = await API_FashionCart_LC('GET', params_buy);

        setBuyState({
            ...buy_state,
            buy_shops: res.data,
            has_fetched: true,
        });
    }

    /* --------------------- EXTRA ----------------------- */

    //
    function handleExtraBuy(new_extra_buy) {
        setBuyState({
            ...buy_state,
            extra_buy: new_extra_buy,
        });
    }

    //
    function closeExtraBuy() {
        handleExtraBuy('');
    }

    //
    function handleTransport(transport, transport_ix, price_ix) {
        transport_obj.current = {
            transport: transport,
            transport_ix: transport_ix,
            price_ix: price_ix,
            transport_has_choose: true,
        };
        closeExtraBuy();
    }

    //
    function handlePayment(payment, payment_ix) {
        payment_obj.current = {
            payment: payment,
            payment_ix: payment_ix,
            payment_has_choose: true,
        };
        closeExtraBuy();
    }

    //
    function handleVoucher(voucher, voucher_ix) {
        voucher_obj.current = {
            voucher: voucher,
            voucher_ix: voucher_ix,
            voucher_has_choose: true,
        };
        closeExtraBuy();
    }

    //
    function doNotUseVoucher() {
        voucher_obj.current = {
            voucher: { name: '', info: '', cost: 0 },
            voucher_ix: 0,
            voucher_has_choose: false,
        };
        closeExtraBuy();
    }

    /* --------------------- CONFIRM BUY ----------------------- */

    // confirm
    function openConfirmBuy() {
        if (transport_has_choose) {
            openScreenConfirm(
                'Fashion Buying',
                'Do you want to buy now!',
                confirmBuy
            );
        } else {
            openScreenConfirm(
                'Fashion Buying',
                <div className="text-red">You must choose transport!</div>,
                () => handleExtraBuy('transport')
            );
        }
    }

    //
    async function confirmBuy() {
        const formData = makeFormData({
            transport: transport_obj.current,
            voucher: voucher_obj.current,
            payment: payment_obj.current,
        });

        await handleScreenFetching(
            () => API_FashionBuy_LC('POST', {}, formData),
            BuyFetching
        );

        const count_checked = buy_shops.reduce(
            (a, b) => a + b.checked_products.length,
            0
        );
        dispatch(actionFashionChangeCountCartNum(-count_checked));

        use_history.push('/fashion/personal/bill/buying');
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
                        <FashionBuyExtraCurrent
                            transport_name={transport_name}
                            transport_title={transport_title}
                            transport_price={transport_price}
                            transport_has_choose={transport_has_choose}
                            //
                            payment_name={payment_name}
                            //
                            voucher_name={voucher_name}
                            voucher_price={voucher_price}
                            voucher_info={voucher_info}
                            voucher_has_choose={voucher_has_choose}
                            doNotUseVoucher={doNotUseVoucher}
                            //
                            handleExtraBuy={handleExtraBuy}
                        />
                    </div>

                    <div className="FashionBuy_total">
                        <FashionBuyTotal
                            amount={amount}
                            transport_price={transport_price}
                            voucher_price={voucher_price}
                            payment={payment_name}
                            shop_count={buy_shops.length}
                            openConfirmBuy={openConfirmBuy}
                        />
                    </div>
                </div>
            </div>

            <div>
                <NoItemHasFetched
                    has_fetched={has_fetched}
                    no_item={!buy_shops.length}
                    title={
                        <h2 className="width-fit-content margin-auto text-secondary">
                            Nothing to buy
                        </h2>
                    }
                />
            </div>

            <div
                className={`width-fit-content margin-auto padding-8px ${
                    has_fetched ? 'display-none' : ''
                }`}
            >
                <CircleLoading is_fetching={!has_fetched} />
            </div>

            <div className={`${extra_buy == '' ? 'display-none' : ''}`}>
                <FashionBuyExtra
                    extra_buy={extra_buy}
                    amount={amount}
                    //
                    handlePayment={handlePayment}
                    handleTransport={handleTransport}
                    handleVoucher={handleVoucher}
                    closeExtraBuy={closeExtraBuy}
                />
            </div>
        </div>
    );
}

export default FashionBuy;
