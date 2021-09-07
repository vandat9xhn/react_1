import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../../_some_function/UnitNumber';
//
import FsShopVoucher from '../../../../../components/shop_voucher/_main/FsShopVoucher';

//
FsBSVoucherList.propTypes = {};

//
function FsBSVoucherList({
    shop_name,
    shop_id,
    shop_picture,
    shop_discount_arr,

    shop_total_price,
    shop_discount_ix,

    handleApplyVoucherCode,
    handleSaveApplyVoucher,
    handleCancelVoucher,
    handleClose,
}) {
    //
    const shop_voucher_title =
        shop_discount_ix >= 0
            ? `Voucher đã chọn Đã giảm ₫${UnitNumber(
                  shop_discount_arr[shop_discount_ix].discount_value
              )}`
            : '';

    //
    return (
        <FsShopVoucher
            shop_name={shop_name}
            shop_id={shop_id}
            shop_picture={shop_picture}
            shop_discount_arr={shop_discount_arr}
            //
            shop_total_price={shop_total_price}
            has_chosen_product={true}
            best_discount_ix={shop_discount_arr.length - 1}
            shop_discount_ix={shop_discount_ix}
            shop_voucher_title={shop_voucher_title}
            //
            handleApplyVoucherCode={handleApplyVoucherCode}
            handleSaveApplyVoucher={handleSaveApplyVoucher}
            handleCancelVoucher={handleCancelVoucher}
            handleClose={handleClose}
        />
    );
}

export default FsBSVoucherList;
