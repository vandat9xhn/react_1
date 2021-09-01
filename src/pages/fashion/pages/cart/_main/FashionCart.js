import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { waitingToDoLast } from '../../../../../_some_function/waitingToDoLast';
//
import {
    handle_API_FashionCart_C,
    handle_API_FashionCart_D,
    handle_API_FashionCart_L,
} from '../../../../../_handle_api/fashion/FashionCartHandleAPI';
//
import { openScreenConfirm } from '../../../../../component/_screen/type/confirm/ScreenConfirm';
import { openScreenNotice } from '../../../../../component/_screen_once/notice/ScreenNotice';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
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
import { handleSaveApplyVoucher } from '../_state/handleSaveApplyVoucher';
import { handleCancelVoucher } from '../_state/handleCancelVoucher';
import { handleOpenVoucher } from '../_state/handleOpenVoucher';
import { handleStateDelGift } from '../_state/handleStateDelGift';
//
import FashionH from '../../../components/head/_main/FashionH';
import CartHead from '../cart_head/CartHead';
import CartShop from '../shop/_main/CartShop';
import FsCartSummary from '../summary/_main/FsCartSummary';
import FsCartMayLike from '../may_like/FsCartMayLike';
//
import './FashionCart.scss';
import '../_mobile_css/FashionCartMb.scss';
import '../_mobile_css/FashionCartSummaryMb.scss';
import '../_mobile_css/FashionCartShopMb.scss';
import FsCNoticeDelItemChecked from '../notices/del_item_checked/FsCNoticeDelItemChecked';
import FsCNoticeGoingToBuy from '../notices/going_to_buy/FsCNoticeGoingToBuy';
import FsCNoticeDelItem from '../notices/del_item/FsCNoticeDelItem';
import FsCNoticeDelGift from '../notices/del_gift/FsCNoticeDelGift';

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
        free_ship_obj: { id: -1, name: '', cost: 0 },

        open_model_id: -1,
        open_search_id: -1,
        open_voucher_shop_id: -1,

        is_done,
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
        free_ship_obj,

        open_model_id,
        open_search_id,
        open_voucher_shop_id,

        is_done,
        coin,
        checked_coin,
        item_count,
        item_checked_count,
        // total_price,

        has_fetched,
    } = state_obj;

    //
    const ref_interval_set_item = useRef(null);

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
        if (data_count.total_add_cart) {
            await handle_API_FashionCart_C({ ...data_count });
            // console.log(data_count);
        }
    }

    //
    async function handle_API_Del(data_count = {}) {
        await handle_API_FashionCart_D({ ...data_count });
        // console.log(data_count);
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
            handle_API: (data) => {
                waitingToDoLast({
                    data: data,
                    ref_interval: ref_interval_set_item,
                    time: 300,
                    callback: handle_API_Count,
                });
            },
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
            notification: <FsCNoticeDelItem />,
            handleConfirm: () => {
                handleStateDelItem({
                    ...params,
                    setStateObj: setStateObj,
                    handle_API_Del: handle_API_Del,
                });
            },
        });
    }

    //
    function onDeleteGift(params = {}) {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Xóa quà tặng',
            notification: <FsCNoticeDelGift />,
            handleConfirm: () => {
                handleStateDelGift({
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
    function handleCloseVoucher() {
        handleClickCart();
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
    function toggleDoneMobile() {
        setStateObj({
            ...state_obj,
            is_done: !is_done,
        });
    }

    //
    function onChooseFreeShip(new_free_ship_obj) {
        setStateObj({
            ...state_obj,
            free_ship_obj: new_free_ship_obj,
        });
    }

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
            notification: <FsCNoticeDelItemChecked />,
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
            ComponentNotice: <FsCNoticeGoingToBuy />,
        });

        setTimeout(() => {
            closeScreenOnce();
        }, 1000);
    }

    //
    return (
        <div
            className={`FashionCart font-for-fashion ${
                IS_MOBILE ? 'FashionCart-mb' : ''
            }`}
            onClick={handleClickCart}
        >
            <div className="FashionCart_head fashion-head">
                <FashionH />
            </div>

            {has_fetched ? (
                cart_shop_arr.length > 0 ? (
                    <div className="fashion-width padding-y-20px">
                        <div className="margin-bottom-16px">
                            <CartHead
                                checked={item_count == item_checked_count}
                                handleCheckedALl={onCheckedAll}
                            />
                        </div>

                        {IS_MOBILE ? (
                            <div className="pos-fixed left-0 y-center z-index-lv3">
                                <div
                                    className={`FashionCart_fix display-flex-center brs-50 ${
                                        is_done
                                            ? 'FashionCart_fix-done bg-fashion-red'
                                            : 'FashionCart_fix-not-done bg-ccc'
                                    }`}
                                    onClick={toggleDoneMobile}
                                >
                                    <IconsArrow y={400} size_icon="1rem" />
                                </div>
                            </div>
                        ) : null}

                        {cart_shop_arr.map((cart_shop_obj, ix) => (
                            <div key={ix} className="margin-bottom-16px">
                                <CartShop
                                    shop_ix={ix}
                                    shop_info={cart_shop_obj.shop_info}
                                    group_arr={cart_shop_obj.group_arr}
                                    //
                                    open_model_id={open_model_id}
                                    open_search_id={open_search_id}
                                    open_voucher_shop_id={open_voucher_shop_id}
                                    //
                                    handleSetCount={onSetCount}
                                    handleCheckedShop={onCheckedShop}
                                    handleChecked={onChecked}
                                    //
                                    toggleOpenType={onToggleOpenType}
                                    handleChangeType={onChangeType}
                                    closeChangeType={onCloseChangeType}
                                    toggleSearchSame={onToggleSearchSame}
                                    //
                                    handleDelete={onDelete}
                                    handleDeleteGift={onDeleteGift}
                                    //
                                    handleOpenVoucher={onOpenVoucher}
                                    handleApplyVoucherCode={onApplyVoucherCode}
                                    handleSaveApplyVoucher={onSaveApplyVoucher}
                                    handleCancelVoucher={onCancelVoucher}
                                    handleCloseVoucher={handleCloseVoucher}
                                />
                            </div>
                        ))}

                        <div className="FashionCart_summary pos-sticky bottom-0">
                            <FsCartSummary
                                item_count={item_count}
                                item_checked_count={item_checked_count}
                                cart_shop_arr={cart_shop_arr}
                                free_ship_obj={free_ship_obj}
                                coin={coin}
                                checked_coin={checked_coin}
                                is_done={is_done}
                                //
                                toggleDoneMobile={toggleDoneMobile}
                                handleChooseFreeShip={onChooseFreeShip}
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
                        Chưa Có Sản Phẩm Trong Giỏ Hàng
                    </div>
                )
            ) : null}

            {has_fetched && false ? (
                <div className="fashion-width">
                    <div className="margin-top-16px">
                        <FsCartMayLike />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default FashionCart;
