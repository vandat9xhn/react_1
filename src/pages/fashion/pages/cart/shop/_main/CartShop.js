import React from 'react';
import PropTypes from 'prop-types';
//
import FsCShopHead from '../head/FsCShopHead';
import FsCShopVoucher from '../voucher/_main/FsCShopVoucher';
import FsCSFreeShip from '../free_ship/_main/FsCSFreeShip';
import FsCSGDeal from '../group/hot_deal/_main/FsCSGDeal';
import FsCSGGift from '../group/gift/_main/FsCSGGift';
import FsCSGCombo from '../group/combo/_main/FsCSGCombo';
import FsCSGroupItem from '../group/item/FsCSGroupItem';
//
import './CartShop.scss';
import {
    getFsCartGroupTotalPrice,
    getFsCartShopTotalPrice,
} from '../../../../../../_some_function/fashion/getFsCartTotalPrice';

//
CartShop.propTypes = {};

//
function CartShop({
    shop_ix,
    shop_info,
    group_arr,

    open_model_id,
    open_search_id,
    open_voucher_shop_id,

    handleSetCount,
    handleCheckedShop,
    handleChecked,

    toggleOpenType,
    handleChangeType,
    closeChangeType,

    toggleSearchSame,
    handleDelete,

    handleOpenVoucher,
    handleApplyVoucherCode,
    handleSaveApplyVoucher,
    handleCancelVoucher,
}) {
    //
    const common_props = {
        open_search_id,
        open_model_id,

        handleSetCount,
        handleChecked,

        toggleOpenType,
        handleChangeType,
        closeChangeType,

        toggleSearchSame,
        handleDelete,
    };

    //
    const {
        id,
        name,
        picture,
        is_mall,
        is_like,
        is_plus,

        ship_arr,
        ship_text,

        item_count,
        item_checked_count,

        discount_arr,
        // best_discount_ix,
        shop_discount_ix,
    } = shop_info;

    //
    const shop_total_price = getFsCartShopTotalPrice(group_arr);
    const best_discount_ix =
        discount_arr.filter((item) => item.min_spend < shop_total_price)
            .length - 1;

    //
    function onCheckedShop() {
        handleCheckedShop(shop_ix);
    }

    //
    return (
        <div className="CartShop padding-16px bg-primary pos-rel">
            <div>
                <FsCShopHead
                    id={id}
                    name={name}
                    checked={item_count == item_checked_count}
                    is_mall={is_mall}
                    is_like={is_like}
                    is_plus={is_plus}
                    handleChecked={onCheckedShop}
                />
            </div>

            <div>
                {group_arr.map((group_obj, group_ix) => (
                    <div
                        key={group_ix}
                        className={`CartShop_group_item ${
                            !group_obj.type
                                ? 'CartShop_group_item-item'
                                : 'CartShop_group_item-group brs-3px'
                        }`}
                    >
                        {group_obj.type == 'hot_deal' ? (
                            <FsCSGDeal
                                shop_ix={shop_ix}
                                group_ix={group_ix}
                                main_item_id={group_obj.item_info_arr[0].id}
                                item_info_arr={group_obj.item_info_arr}
                                {...common_props}
                            />
                        ) : group_obj.type == 'gift' ? (
                            <FsCSGGift
                                shop_ix={shop_ix}
                                group_ix={group_ix}
                                more_spend={
                                    group_obj.min_spend -
                                    getFsCartGroupTotalPrice(
                                        group_obj.item_info_arr
                                    )
                                }
                                gift_count={group_obj.gift_count}
                                gift_chosen_count={group_obj.gift_chosen_count}
                                gift_id={group_obj.gift_id}
                                main_items={group_obj.item_info_arr}
                                gift_items={group_obj.gift_items}
                                {...common_props}
                            />
                        ) : group_obj.type == 'combo' ? (
                            <FsCSGCombo
                                shop_ix={shop_ix}
                                group_ix={group_ix}
                                more_count={
                                    group_obj.min_count -
                                    group_obj.item_info_arr.reduce(
                                        (a, item_info) => a + item_info.checked,
                                        0
                                    )
                                }
                                discount={group_obj.discount}
                                combo_id={group_obj.combo_id}
                                item_info_arr={group_obj.item_info_arr}
                                {...common_props}
                            />
                        ) : (
                            group_obj.item_info_arr.map((item_info, ix) => (
                                <FsCSGroupItem
                                    key={item_info.id}
                                    cart_ix_obj={{
                                        shop_ix: shop_ix,
                                        group_ix: group_ix,
                                        item_ix: ix,
                                    }}
                                    group_type=""
                                    item_info={item_info}
                                    model_ix={item_info.model_ix}
                                    checked={item_info.checked}
                                    open_model={item_info.id == open_model_id}
                                    open_search={item_info.id == open_search_id}
                                    {...common_props}
                                />
                            ))
                        )}
                    </div>
                ))}
            </div>

            <div>
                <FsCShopVoucher
                    shop_ix={shop_ix}
                    shop_id={id}
                    shop_name={name}
                    shop_picture={picture}
                    open_voucher={open_voucher_shop_id == id}
                    //
                    shop_discount_arr={discount_arr}
                    item_checked_count={item_checked_count}
                    shop_total_price={shop_total_price}
                    best_discount_ix={best_discount_ix}
                    shop_discount_ix={shop_discount_ix}
                    //
                    handleOpenVoucher={handleOpenVoucher}
                    handleApplyVoucherCode={handleApplyVoucherCode}
                    handleSaveApplyVoucher={handleSaveApplyVoucher}
                    handleCancelVoucher={handleCancelVoucher}
                />
            </div>

            <div>
                <FsCSFreeShip
                    ship_text={ship_text}
                    ship_arr={ship_arr}
                    shop_name={name}
                />
            </div>
        </div>
    );
}

export default CartShop;
