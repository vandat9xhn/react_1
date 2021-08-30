import React from 'react';
import PropTypes from 'prop-types';
//
import { getFsCShopDiscountStatus } from '../../../../../../../_some_function/fashion/getFsShopDiscountTitle';
//
import FsCSVoucherList from '../list/_main/FsCSVoucherList';
//
import './FsCShopVoucher.scss';

//
FsCShopVoucher.propTypes = {};

//
function FsCShopVoucher({
    shop_ix,
    open_voucher,

    shop_id,
    shop_name,
    shop_picture,
    shop_discount_arr,
    item_checked_count,

    shop_total_price,
    shop_discount_ix,
    best_discount_ix,

    handleOpenVoucher,
    handleApplyVoucherCode,
    handleSaveApplyVoucher,
    handleCancelVoucher,
}) {
    //
    const title_action_obj = getFsCShopDiscountStatus({
        has_chosen_product: item_checked_count > 0,
        shop_discount_arr: shop_discount_arr,
        shop_discount_ix: shop_discount_ix,
        best_discount_ix: best_discount_ix,
        shop_total_price: shop_total_price,
    });

    // 
    function handleClickShopVoucher(e) {
        e.stopPropagation()
    }

    //
    function onOpenShopVoucher(e) {
        e.stopPropagation();

        handleOpenVoucher(shop_id);
    }

    //
    function onSaveShopBestDiscount() {
        handleSaveApplyVoucher(shop_ix, best_discount_ix);
    }

    //
    function onSaveApplyVoucher(ix) {
        handleSaveApplyVoucher(shop_ix, ix);
    }

    //
    function onCancelVoucher() {
        handleCancelVoucher(shop_ix);
    }

    //
    return (
        <div className="FsCShopVoucher">
            <div className="display-flex">
                <div></div>

                <div
                    className={`margin-right-10px ${
                        ['can', 'applied'].includes(title_action_obj.action)
                            ? 'color-fashion'
                            : ''
                    }`}
                >
                    {title_action_obj.title}
                </div>

                <div className="pos-rel" onClick={handleClickShopVoucher}>
                    {title_action_obj.action == 'save' ? (
                        <button
                            className="FsCShopVoucher_btn-save btn btn-hv btn-active color-fashion cursor-pointer"
                            type="button"
                            onClick={onSaveShopBestDiscount}
                        >
                            {title_action_obj.action_title}
                        </button>
                    ) : (
                        <div
                            className="cursor-pointer text-blue"
                            onClick={onOpenShopVoucher}
                        >
                            {title_action_obj.action_title}
                        </div>
                    )}

                    <div
                        className={`pos-abs top-100per left-0 z-index-lv1 ${
                            open_voucher ? '' : 'display-none'
                        }`}
                    >
                        <FsCSVoucherList
                            shop_name={shop_name}
                            shop_id={shop_id}
                            shop_picture={shop_picture}
                            shop_discount_arr={shop_discount_arr}
                            //
                            shop_total_price={shop_total_price}
                            has_chosen_product={item_checked_count > 0}
                            best_discount_ix={best_discount_ix}
                            shop_discount_ix={shop_discount_ix}
                            //
                            handleApplyVoucherCode={handleApplyVoucherCode}
                            handleSaveApplyVoucher={onSaveApplyVoucher}
                            handleCancelVoucher={onCancelVoucher}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsCShopVoucher;
