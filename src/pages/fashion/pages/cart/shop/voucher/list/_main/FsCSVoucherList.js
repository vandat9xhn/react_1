import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import { UnitNumber } from '../../../../../../../../_some_function/UnitNumber';
//
import { openScreenNotice } from '../../../../../../../../component/_screen_once/notice/ScreenNotice';
//
import FsShopVoucher from '../../../../../../components/shop_voucher/_main/FsShopVoucher';
import FsCSNoticeChooseProduct from '../notice_choose_product/FsCSNoticeChooseProduct';

//
FsCSVoucherList.propTypes = {};

//
function FsCSVoucherList({
    shop_name,
    shop_id,
    shop_picture,
    shop_discount_arr,

    shop_total_price,
    has_chosen_product,
    best_discount_ix,
    shop_discount_ix,

    handleApplyVoucherCode,
    handleSaveApplyVoucher,
    handleCancelVoucher,
    handleClose,
}) {
    //
    const { openScreenOnce, closeScreenOnce } = useContext(context_api);

    //
    const shop_voucher_title = !has_chosen_product
        ? 'Chọn sản phẩm từ shop trước khi nhập mã voucher'
        : best_discount_ix == -1
        ? 'Bạn chưa thể sử dụng những voucher bên dưới.'
        : shop_discount_ix >= 0
        ? `Voucher đã chọn Đã giảm ₫${UnitNumber(
              shop_discount_arr[shop_discount_ix].discount_value
          )}`
        : '';

    //
    function handleClickInputVoucher() {
        if (!has_chosen_product) {
            openScreenNotice({
                openScreenOnce: openScreenOnce,
                ComponentNotice: <FsCSNoticeChooseProduct />,
            });

            setTimeout(() => {
                closeScreenOnce();
            }, 1500);
        }
    }

    //
    return (
        <FsShopVoucher
            shop_name={shop_name}
            shop_id={shop_id}
            shop_picture={shop_picture}
            shop_discount_arr={shop_discount_arr}
            // 
            shop_voucher_title={shop_voucher_title}
            shop_total_price={shop_total_price}
            has_chosen_product={has_chosen_product}
            best_discount_ix={best_discount_ix}
            shop_discount_ix={shop_discount_ix}
            // 
            handleClickInputVoucher={handleClickInputVoucher}
            handleApplyVoucherCode={handleApplyVoucherCode}
            handleSaveApplyVoucher={handleSaveApplyVoucher}
            handleCancelVoucher={handleCancelVoucher}
            handleClose={handleClose}
        />
    );
}

export default FsCSVoucherList;
