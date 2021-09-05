import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { initial_user_info_buy_obj } from '../../../../../_initial/fashion/user_info';
//
import { handle_API_FsUserInfoBuy_L } from '../../../../../_handle_api/fashion/user_info';
//
import { useScreenFetching } from '../../../../../_hooks/UseScreenFetching';
//
import { handleAddUserAddress } from '../_state/handleAddUserAddress';
import { FsBuy_handleDataState } from '../_state/FsBuy_handleDataState';
//
import FashionH from '../../../components/head/_main/FashionH';
import FsBuyUser from '../user/_main/FsBuyUser';
import FsBuyShop from '../shop/_main/FsBuyShop';
import FsBuyVoucher from '../voucher/_main/FsBuyVoucher';
import FsBuyCoin from '../coin/FsBuyCoin';
import FashionBuyTotal from '../total/FashionBuyTotal';
import FsBuyPayment from '../payment/_main/FsBuyPayment';

//
FashionBuy.propTypes = {};

//
function FashionBuy(props) {
    //
    const { closeScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        user_info_arr: [] || [initial_user_info_buy_obj()],
        buy_shop_arr: [],
        payment_obj: { name: '' },
        coin: 0,
        total_price: 0,

        user_active_ix: 0,
        free_ship_id: -1,
        checked_coin: false,

        has_fetched_user: false,
        has_fetched_buy_shop: false,
    });

    const {
        user_info_arr,
        buy_shop_arr,
        payment_obj,
        coin,
        total_price,

        user_active_ix,
        free_ship_id,
        checked_coin,

        has_fetched_user,
        has_fetched_buy_shop,
    } = state_obj;

    const total_ship_price = buy_shop_arr.reduce((a, buy_shop_obj) => {
        return a + buy_shop_obj.transport.price;
    }, 0);

    const total_voucher = buy_shop_arr.reduce((a, buy_shop_obj) => {
        const { discount_arr, discount_ix } = buy_shop_obj.shop_info;
        return a + discount_ix >= 0
            ? discount_arr[discount_ix].discount_value
            : 0;
    }, 0);

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
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

    // -------

    //
    function handleApplyVoucherCode(voucher_code) {
        console.log(voucher_code);
    }

    //
    function handleApplyVoucher() {}

    //
    function handleCancelVoucher() {}

    //
    function handleChangeTransport() {}

    //
    function handleChooseFreeShip() {}

    //
    function handleCheckedCoin() {}

    //
    function handleChangePayment() {}

    //
    return (
        <div className="FashionBuy font-for-fashion">
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
                                    transport={buy_shop_obj.transport}
                                    total_price={buy_shop_obj.total_price}
                                    //
                                    handleApplyVoucherCode={
                                        handleApplyVoucherCode
                                    }
                                    handleApplyVoucher={handleApplyVoucher}
                                    handleCancelVoucher={handleCancelVoucher}
                                    handleChangeTransport={
                                        handleChangeTransport
                                    }
                                />
                            </div>
                        ))}

                        <div className="margin-bottom-20px">
                            <FsBuyVoucher
                                free_ship_id={free_ship_id}
                                handleChooseFreeShip={handleChooseFreeShip}
                            />

                            <FsBuyCoin
                                coin={coin}
                                checked={checked_coin}
                                handleChecked={handleCheckedCoin}
                            />
                        </div>

                        <div className="margin-bottom-20px">
                            <FsBuyPayment
                                payment_str={payment_obj.name}
                                handleChangePayment={handleChangePayment}
                            />

                            <FashionBuyTotal
                                total_price={total_price}
                                total_ship_price={total_ship_price}
                                total_voucher={total_voucher}
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
