import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import {
    handle_API_FashionCart_C,
    handle_API_FashionCart_D,
    handle_API_FashionCart_L,
} from '../../../../../_handle_api/fashion/FashionCartHandleAPI';
//
import { useWaitingLastAction } from '../../../../../_hooks/useWaitingLastAction';
//
import { openScreenConfirm } from '../../../../../component/_screen/type/confirm/ScreenConfirm';
import { openScreenNotice } from '../../../../../component/_screen_once/notice/ScreenNotice';
//
import { handleDataState } from '../_state/_handleDataState';
import { handleSetStateItem } from '../_state/handleSetStateItem';
import { handleStateDelItem } from '../_state/handleStateDelItem';
import { handleCheckedItem } from '../_state/handleCheckedItem';
import { handleCheckedShop } from '../_state/handleCheckedShop';
import { handleCheckedAll } from '../_state/handleCheckedAll';
import { toggleSearchSame } from '../_state/toggleSearchSame';
import { toggleOpenType } from '../_state/toggleOpenType';
import { handleDeleteItemChecked } from '../_state/handleDeleteItemChecked';
import { getFsCartTotalOldPrice, getFsCartTotalPrice, getFsCartTotalVoucher } from '../../../../../_some_function/fashion/getFsCartTotalPrice';
import { handleSaveApplyVoucher } from '../_state/handleSaveApplyVoucher';
import { handleCancelVoucher } from '../_state/handleCancelVoucher';
import { handleOpenVoucher } from '../_state/handleOpenVoucher';
//
import FashionH from '../../../components/head/_main/FashionH';
import CartHead from '../cart_head/CartHead';
import CartShop from '../shop/_main/CartShop';
import FsCartSummary from '../summary/_main/FsCartSummary';
//
import './FashionCart.scss';

//
FashionCart.propTypes = {};

function FashionCart(props) {
    //
    const use_history = useHistory();

    //
    const { openScreenFloor, openScreenOnce, closeScreenOnce } =
        useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        cart_shop_arr: [],
        fashion_voucher: { name: '' },

        open_model_id: -1,
        open_search_id: -1,
        open_voucher_shop_id: -1,

        coin: 0,
        checked_coin: false,
        item_count: 0,
        item_checked_count: 0,
        item_gift_count: 0,
        // total_price: 0,

        has_fetched: false,
    });

    const {
        cart_shop_arr,
        fashion_voucher,

        open_model_id,
        open_search_id,
        open_voucher_shop_id,

        coin,
        checked_coin,
        item_count,
        item_checked_count,
        // total_price,

        has_fetched,
    } = state_obj;

    //
    const { handleWaitingLastAction } = useWaitingLastAction({
        time_waiting: 300,
        callback: handle_API_Count,
    });

    //
    useEffect(() => {
        getData_API();
    }, []);

    // --------- API

    //
    async function getData_API() {
        const res = await handle_API_FashionCart_L();

        handleDataState({
            setStateObj: setStateObj,
        });
    }

    //
    async function handle_API_Count(data_count = {}) {
        await handle_API_FashionCart_C({ ...data_count });
        // console.log(data_count);
    }

    //
    async function handle_API_Del(data_count = {}) {
        await handle_API_FashionCart_D({ ...data_count });
        console.log(data_count);
    }

    // -----------

    //
    function handleClickCart() {
        if (open_model_id == -1 && open_voucher_shop_id == -1) {
            return;
        }

        setStateObj((state_obj) => ({
            ...state_obj,
            open_model_id: -1,
            open_voucher_shop_id: -1,
        }));
    }

    // -----------

    //
    function onSetStateItem(params = {}) {
        handleSetStateItem({
            ...params,
            setStateObj: setStateObj,
            handle_API: handleWaitingLastAction,
        });
    }

    // ----------- COUNT + CHECKED

    //
    function onSetCount(params = {}) {
        onSetStateItem(params);
    }

    //
    function onCheckedShop(shop_ix) {
        handleCheckedShop({
            shop_ix: shop_ix,
            setStateObj: setStateObj,
        });
    }

    //
    function onChecked(params = {}) {
        handleCheckedItem({
            ...params,
            setStateObj: setStateObj,
            // handleAfterChecked: handle_API_Count,
        });
    }

    // ---------- TYPE PRODUCT

    //
    function onToggleOpenType(params = {}) {
        toggleOpenType({
            ...params,
            setStateObj: setStateObj,
        });
    }

    //
    function onChangeType(params = {}) {
        onSetStateItem(params);
    }

    //
    function onCloseChangeType() {
        setStateObj({
            ...state_obj,
            open_model_id: -1,
        });
    }

    // --------- SAME + DEL

    //
    function onToggleSearchSame(params = {}) {
        toggleSearchSame({
            ...params,
            setStateObj: setStateObj,
        });
    }

    //
    function onDelete(params = {}) {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Xóa sản phẩm',
            notification: 'Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?',
            handleConfirm: () => {
                handleStateDelItem({
                    ...params,
                    setStateObj: setStateObj,
                    handle_API_Del: handle_API_Del,
                });
            },
        });
    }

    // ---------- VOUCHER

    //
    function onOpenVoucher(shop_id) {
        handleOpenVoucher({
            shop_id: shop_id,
            setStateObj: setStateObj,
        });
    }

    //
    function onApplyVoucherCode() {
        console.log('voucher code');
    }

    //
    function onSaveApplyVoucher(shop_ix, new_shop_discount_ix) {
        handleSaveApplyVoucher({
            shop_ix: shop_ix,
            new_shop_discount_ix: new_shop_discount_ix,
            setStateObj: setStateObj,
        });
    }

    //
    function onCancelVoucher(shop_ix) {
        handleCancelVoucher({
            shop_ix: shop_ix,
            setStateObj: setStateObj,
        });
    }

    // ----------- SUMMARY

    //
    function onChooseVoucher() {}

    //
    function onCheckedCoin() {
        if (coin) {
            setStateObj({
                ...state_obj,
                checked_coin: !checked_coin,
            });
        }
    }

    //
    function onSaveLiked() {
        console.log('save_liked');
    }

    //
    function onDeleteItemChecked() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Xóa sản phẩm',
            notification: (
                <div>
                    <div className="padding-8px text-red">
                        Các sản phẩm này sẽ bị xóa khỏi giỏ hàng!
                    </div>

                    <div className="padding-y-8px label-field text-align-end">
                        Bạn có muốn tiếp tục không?
                    </div>
                </div>
            ),
            handleConfirm: () => {
                handleDeleteItemChecked({
                    setStateObj: setStateObj,
                });
            },
        });
    }

    //
    function onCheckedAll() {
        handleCheckedAll({
            setStateObj: setStateObj,
        });
    }

    //
    function onGoingToBuy() {
        if (item_checked_count > 0) {
            use_history.push('/fashion/buy');
            return;
        }

        openScreenNotice({
            openScreenOnce: openScreenOnce,
            ComponentNotice: (
                <div className="FashionCart_going_to_buy display-flex-center padding-16px bg-loader brs-8px text-white label-field">
                    Bạn chưa chọn sản phẩm nào để mua
                </div>
            ),
        });

        setTimeout(() => {
            closeScreenOnce();
        }, 1000);
    }

    // console.log(open_search_id);
    //
    return (
        <div className="FashionCart font-for-fashion" onClick={handleClickCart}>
            <div
                className={`FashionCart_head ${
                    IS_MOBILE ? '' : 'FashionCart_head-pc'
                }`}
            >
                <FashionH />
            </div>

            {has_fetched ? (
                cart_shop_arr.length > 0 ? (
                    <div className="fashion-width padding-y-20px">
                        <div className="margin-bottom-16px">
                            <CartHead />
                        </div>

                        <div>
                            {cart_shop_arr.map((cart_shop_obj, ix) => (
                                <div key={ix} className="margin-bottom-16px">
                                    <CartShop
                                        shop_ix={ix}
                                        shop_info={cart_shop_obj.shop_info}
                                        group_arr={cart_shop_obj.group_arr}
                                        //
                                        open_model_id={open_model_id}
                                        open_search_id={open_search_id}
                                        open_voucher_shop_id={
                                            open_voucher_shop_id
                                        }
                                        //
                                        handleSetCount={onSetCount}
                                        handleCheckedShop={onCheckedShop}
                                        handleChecked={onChecked}
                                        //
                                        toggleOpenType={onToggleOpenType}
                                        handleChangeType={onChangeType}
                                        closeChangeType={onCloseChangeType}
                                        toggleSearchSame={onToggleSearchSame}
                                        handleDelete={onDelete}
                                        //
                                        handleOpenVoucher={onOpenVoucher}
                                        handleApplyVoucherCode={
                                            onApplyVoucherCode
                                        }
                                        handleSaveApplyVoucher={
                                            onSaveApplyVoucher
                                        }
                                        handleCancelVoucher={onCancelVoucher}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="pos-sticky bottom-0">
                            <FsCartSummary
                                item_count={item_count}
                                item_checked_count={item_checked_count}
                                voucher_name={fashion_voucher.name}
                                coin={coin}
                                checked_coin={checked_coin}
                                cart_shop_arr={cart_shop_arr}
                                //
                                handleChooseVoucher={onChooseVoucher}
                                handleCheckedCoin={onCheckedCoin}
                                handleSaveLiked={onSaveLiked}
                                handleDeleteItemChecked={onDeleteItemChecked}
                                handleCheckedAll={onCheckedAll}
                                handleGoingToBuy={onGoingToBuy}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="margin-top-20px text-align-center font-20px text-secondary">
                        Chưa Có Sản Phẩm nào
                    </div>
                )
            ) : null}
        </div>
    );
}

export default FashionCart;
