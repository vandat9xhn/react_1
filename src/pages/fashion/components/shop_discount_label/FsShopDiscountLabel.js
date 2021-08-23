import React from 'react';
import PropTypes from 'prop-types';

//
FsShopDiscountLabel.propTypes = {
    discount: PropTypes.string,
};

//
function FsShopDiscountLabel({ discount }) {
    //
    return (
        <div className="FsShopDiscountLabel bg-border-fashion padding-1px">
            <span className="text-red">Giảm {discount}</span>
        </div>
    );
}

export default FsShopDiscountLabel;
