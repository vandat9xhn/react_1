import React from 'react';
import PropTypes from 'prop-types';
//
import './FsCFsVoucher.scss';

//
FsCFsVoucher.propTypes = {};

//
function FsCFsVoucher({ voucher_name, handleChooseVoucher }) {
    //
    function openFashionVoucher() {}

    //
    return (
        <div className="FsCFsVoucher fs-cart-summary-part">
            <div className="display-flex justify-content-end">
                <div className="font-16px text-secondary">Shopee Voucher</div>

                <div className="FsCFsVoucher_name">{voucher_name}</div>

                <div
                    className="color-fashion cursor-pointer"
                    onClick={openFashionVoucher}
                >
                    Áp Dụng Mã Giảm Giá Ngay
                </div>
            </div>
        </div>
    );
}

export default FsCFsVoucher;
