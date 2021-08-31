import React from 'react';
import PropTypes from 'prop-types';
//
import { getFsCShopDiscountStatus } from '../../../../../../../_some_function/fashion/getFsShopDiscountTitle';
//
import FsCSVoucherList from '../list/_main/FsCSVoucherList';
//
import './FsCShopVoucher.scss';
import IconFsVoucher from '../../../../../../../_icons_svg/_icon_fs_voucher/IconFsVoucher';
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';

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
    handleCloseVoucher,
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
    function handleStopPropagation(e) {
        e.stopPropagation();
    }

    //
    function onOpenShopVoucher() {
        handleOpenVoucher(shop_id);
    }

    //
    function onSaveShopBestDiscount(e) {
        e.stopPropagation();

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
        <div className="FsCShopVoucher" onClick={handleStopPropagation}>
            <div
                className={`FsCShopVoucher_row display-flex ${
                    IS_MOBILE ? 'space-between font-14px' : ''
                }`}
                onClick={IS_MOBILE ? onOpenShopVoucher : undefined}
            >
                <div
                    className={`FsCShopVoucher_left ${
                        IS_MOBILE ? '' : ' margin-right-10px'
                    } ${
                        ['can', 'applied'].includes(title_action_obj.action)
                            ? 'color-fashion'
                            : ''
                    }`}
                >
                    {/* <IconFsVoucher /> */}

                    <span>{title_action_obj.title}</span>
                </div>

                <div className="FsCShopVoucher_right pos-rel">
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
                            onClick={IS_MOBILE ? undefined : onOpenShopVoucher}
                        >
                            {IS_MOBILE ? (
                                <IconsArrow x={200} size_icon="0.75rem" />
                            ) : (
                                <span>{title_action_obj.action_title}</span>
                            )}
                        </div>
                    )}

                    {!open_voucher && IS_MOBILE ? null : (
                        <div
                            className={`${open_voucher ? '' : 'display-none'} ${
                                IS_MOBILE
                                    ? 'pos-fixed-100per bg-film z-index-lv5'
                                    : 'pos-abs top-100per left-0 z-index-lv1'
                            }`}
                            onClick={handleStopPropagation}
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
                                handleClose={handleCloseVoucher}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FsCShopVoucher;
