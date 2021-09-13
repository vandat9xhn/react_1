import React from 'react';
import PropTypes from 'prop-types';
//
import './FsCSNoticeChooseProduct.scss';

//
FsCSNoticeChooseProduct.propTypes = {};

//
function FsCSNoticeChooseProduct(props) {
    //
    return (
        <div className="FsCSNoticeChooseProduct display-flex-center padding-16px bg-shadow-9 brs-8px">
            <div className="text-align-center text-white font-16px">
                Chọn sản phẩm của shop trước khi nhập mã voucher
            </div>
        </div>
    );
}

export default FsCSNoticeChooseProduct;
