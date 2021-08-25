import React from 'react';
import PropTypes from 'prop-types';
//
import './FsShopDiscountLabel.scss';

//
FsShopDiscountLabel.propTypes = {
    discount: PropTypes.string,
};

//
function FsShopDiscountLabel({ discount }) {
    //
    return (
        <div className="FsShopDiscountLabel bg-discount-gold pos-rel">
            <span className="text-white">Giảm {discount}</span>

            <div className="FsShopDiscountLabel_side pos-abs left-0 trans-x--50per top-0 h-100per"></div>

            <div className="FsShopDiscountLabel_side pos-abs left-100per trans-x--50per top-0 h-100per"></div>
        </div>
    );
}

export default FsShopDiscountLabel;
