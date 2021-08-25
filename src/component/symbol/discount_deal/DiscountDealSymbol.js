import React from 'react';
import PropTypes from 'prop-types';
//
import './DiscountDealSymbol.scss';

//
DiscountDealSymbol.propTypes = {
    discount: PropTypes.string,
    class_main: PropTypes.string,
};

DiscountDealSymbol.defaultProps = {
    class_main: 'font-12px bg-fashion-red color-fashion',
};

//
function DiscountDealSymbol({ discount, class_main }) {
    //
    return (
        <div
            className={`DiscountDealSymbol fashion-value-padding text-align-center ${class_main}`}
        >
            <span className="text-white label-field">{discount}</span>
        </div>
    );
}

export default DiscountDealSymbol;
