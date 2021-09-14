import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { initial_user_info_buy_obj } from '../../../../../_initial/fashion/user_info';
import {
    initial_fashion_item_obj,
    initial_fashion_shop,
} from '../../../../../_initial/fashion/FashionInitial';
import { initial_fs_transport_arr } from '../../../../../_initial/fashion/transport';
import {
    initial_fs_bank_card_arr,
    initial_fs_payment_arr,
} from '../../../../../_initial/fashion/payment';
//
import { handle_API_FsUserInfoBuy_L } from '../../../../../_handle_api/fashion/user_info';
import { handle_API_FsBankCard_L } from '../../../../../_handle_api/fashion/bank';
import { handle_API_FsBuy_C } from '../../../../../_handle_api/fashion/buy';
//
import { useScreenFetching } from '../../../../../_hooks/UseScreenFetching';
//
import { handleAddUserAddress } from '../_state/handleAddUserAddress';
import { FsBuy_handleDataState } from '../_state/_FsBuy_handleDataState';
import { FsBuy_handleChangeTransport } from '../_state/FsBuy_handleChangeTransport';
import { FsBuy_handleCancelVoucher } from '../_state/FsBuy_handleCancelVoucher';
import { FsBuy_handleApplyVoucher } from '../_state/FsBuy_handleApplyVoucher';
import { FsBuy_handleUpdateUserAddress } from '../_state/FsBuy_handleUpdateUserAddress';
//
import FashionH from '../../../components/head/_main/FashionH';
import FsBuyUser from '../user/_main/FsBuyUser';
import FsBuyShop from '../shop/_main/FsBuyShop';
import FsBuyVoucher from '../voucher/_main/FsBuyVoucher';
import FsBuyCoin from '../coin/FsBuyCoin';
import FashionBuyTotal from '../total/FashionBuyTotal';
import FsBuyPayment from '../payment/_main/FsBuyPayment';
import BuyFetching from '../fetching/BuyFetching';
//
import '../_mobile_css/FsBuyMB.scss';
import '../_mobile_css/FsBuyUserMb.scss';
import '../_mobile_css/FsBuyShopMb.scss';

//
FashionBuy.propTypes = {};

//
function FashionBuy(props) {
    //
    const use_history = useHistory();

    //
    const { closeScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        user_info_arr: [] || [initial_user_info_buy_obj()],
        buy_shop_arr: [] || [
            {
                shop_info: initial_fashion_shop(),
                item_info_arr: [
                    { ...initial_fashion_item_obj(), type: '', is_main: false },
                ],
                total_price: 0,

                transport_arr: initial_fs_transport_arr(),
                trans_ix: 0,
                delivery_time_ix: 0,
            },
        ],
        payment_arr: [] || initial_fs_payment_arr(),
        bank_card_arr: [] || initial_fs_bank_card_arr(),
        coin: 0,
        total_price: 0,

        user_active_ix: 0,
        free_ship_obj: { id: -1, cost: 0 },
        checked_coin: false,
        payment_ix: 0,

        has_fetched_user: false,
        has_fetched_buy_shop: false,
    });

    const {
        user_info_arr,
        buy_shop_arr,
        payment_arr,
        bank_card_arr,
        coin,
        total_price,

        user_active_ix,
        free_ship_obj,
        payment_ix,
        checked_coin,

        has_fetched_user,
        has_fetched_buy_shop,
    } = state_obj;

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        document.title = 'Buy'

        getData_API_User();
        getData_API_Buy();
    }, []);

    // -------- API

    //
    async function getData_API_User() {
        const { data } = await handle_API_FsUserInfoBuy_L({
            params: {
                is_active: true,
                size: 1,
            },
        });

        setStateObj({
            ...state_obj,
            user_info_arr: data,
            has_fetched_user: true,
        });
    }

    //
    async function getData_API_Buy() {
        const { data } = await handle_API_FsUserInfoBuy_L({
            params: {
                is_active: true,
                size: 1,
            },
        });

        FsBuy_handleDataState({
            data: data,
            setStateObj: setStateObj,
        });
    }

    //
    async function getData_API_BankCard() {
        const { data } = await handle_API_FsBankCard_L({
            params: {
                size: 6,
            },
        });

        setStateObj({
            ...state_obj,
            bank_card_arr: data,
        });
    }

    // -------- USER

    //
    function handleChangeUserInfo(new_user_active_ix) {
        setStateObj({
            ...state_obj,
            user_active_ix: new_user_active_ix,
        });
    }

    function onAddUserAddress(new_user_info) {
        handleAddUserAddress({
            new_user_info: new_user_info,
            setStateObj: setStateObj,
            handleScreenFetching: handleScreenFetching,
            closeScreenFloor: closeScreenFloor,
        });
    }

    function onFixUserInfo({ new_user_info, user_info_ix }) {
        FsBuy_handleUpdateUserAddress({
            new_user_info: new_user_info,
            user_info_ix: user_info_ix,

            setStateObj: setStateObj,
            handleScreenFetching: handleScreenFetching,
            closeScreenFloor: closeScreenFloor,
        });
    }

    // ------- SHOP

    //
    function handleApplyVoucherCode(voucher_code) {
        console.log(voucher_code);
    }

    //
    function onApplyVoucher({ shop_ix, new_voucher_ix }) {
        FsBuy_handleApplyVoucher({
            shop_ix: shop_ix,
            new_voucher_ix: new_voucher_ix,
            setStateObj: setStateObj,
        });
    }

    //
    function onCancelVoucher(shop_ix) {
        FsBuy_handleCancelVoucher({
            shop_ix: shop_ix,
            setStateObj: setStateObj,
        });
    }

    //
    function onChangeTransport(
        params = { shop_ix, new_trans_ix, new_time_ix }
    ) {
        FsBuy_handleChangeTransport({
            ...params,
            setStateObj: setStateObj,
        });

        closeScreenFloor();
    }

    // ------- FASHION

    //
    function onChooseFreeShip(new_free_ship_obj) {
        setStateObj({
            ...state_obj,
            free_ship_obj: new_free_ship_obj,
        });
    }

    //
    function handleCheckedCoin() {
        setStateObj({
            ...state_obj,
            checked_coin: !checked_coin,
        });
    }

    //
    function handleChangePayment(new_payment_ix) {
        setStateObj({
            ...state_obj,
            payment_ix: new_payment_ix,
        });
    }

    //
    function openOtherBank(...params) {
        console.log(params);
    }

    //
    function handleChooseCard(...params) {
        console.log(params);
    }

    // -------- ORDER

    async function handleOrder() {
        await handleScreenFetching(
            () => handle_API_FsBuy_C(state_obj),
            <BuyFetching is_fetching={true} />
        );

        use_history.push('/fashion/personal/bill/buying')
    }

    //
    return (
        <div
            className={`FashionBuy font-for-fashion ${
                IS_MOBILE ? 'FashionBuy-mobile' : ''
            }`}
        >
            <div className="margin-bottom-20px">
                <FashionH />
            </div>

            <div className="fashion-width">
                {has_fetched_user ? (
                    <div className="margin-bottom-20px">
                        <FsBuyUser
                            user_info_arr={user_info_arr}
                            active_ix={user_active_ix}
                            handleChangeUserInfo={handleChangeUserInfo}
                            handleAddUserAddress={onAddUserAddress}
                            handleFixUserInfo={onFixUserInfo}
                        />
                    </div>
                ) : null}

                {has_fetched_buy_shop ? (
                    <React.Fragment>
                        {buy_shop_arr.map((buy_shop_obj, ix) => (
                            <div className="margin-bottom-20px" key={ix}>
                                <FsBuyShop
                                    shop_ix={ix}
                                    shop_info={buy_shop_obj.shop_info}
                                    item_info_arr={buy_shop_obj.item_info_arr}
                                    total_price={buy_shop_obj.total_price}
                                    //
                                    transport_arr={buy_shop_obj.transport_arr}
                                    trans_ix={buy_shop_obj.trans_ix}
                                    delivery_time_ix={
                                        buy_shop_obj.delivery_time_ix
                                    }
                                    //
                                    handleApplyVoucherCode={
                                        handleApplyVoucherCode
                                    }
                                    handleApplyVoucher={onApplyVoucher}
                                    handleCancelVoucher={onCancelVoucher}
                                    handleChangeTransport={onChangeTransport}
                                />
                            </div>
                        ))}

                        <div className="margin-bottom-20px">
                            <FsBuyVoucher
                                free_ship_id={free_ship_obj.id}
                                free_ship_price={free_ship_obj.cost}
                                handleChooseFreeShip={onChooseFreeShip}
                            />

                            <FsBuyCoin
                                coin={coin}
                                checked={checked_coin}
                                handleChecked={handleCheckedCoin}
                            />
                        </div>

                        <div className="margin-bottom-20px">
                            <FsBuyPayment
                                payment_arr={payment_arr}
                                payment_ix={payment_ix}
                                bank_card_arr={bank_card_arr}
                                //
                                getData_Bank_L={getData_API_BankCard}
                                openOtherBank={openOtherBank}
                                handleChooseCard={handleChooseCard}
                                handleChangePayment={handleChangePayment}
                            />

                            <FashionBuyTotal
                                total_price={total_price}
                                total_price={total_price}
                                buy_shop_arr={buy_shop_arr}
                                coin={coin}
                                checked_coin={checked_coin}
                                free_ship_price={free_ship_obj.cost}
                                handleOrder={handleOrder}
                            />
                        </div>
                    </React.Fragment>
                ) : null}
            </div>

            {has_fetched_user ? null : <div className="h-100vh"></div>}
        </div>
    );
}

export default FashionBuy;
