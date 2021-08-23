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
    class_main: 'font-14px',
};

//
function DiscountDealSymbol({ discount, class_main }) {
    //
    return (
        <div className={`DiscountDealSymbol text-align-center ${class_main}`}>
            <span className="text-white label-field">{discount}</span>
        </div>
    );
}

export default DiscountDealSymbol;
