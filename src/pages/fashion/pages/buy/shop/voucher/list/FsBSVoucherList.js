import React from 'react';
import PropTypes from 'prop-types';
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
            // 
            handleApplyVoucherCode={handleApplyVoucherCode}
            handleSaveApplyVoucher={handleSaveApplyVoucher}
            handleCancelVoucher={handleCancelVoucher}
            handleClose={handleClose}
        />
    );
}

export default FsBSVoucherList;
