import React from 'react';
import PropTypes from 'prop-types';
//
import './DiscountSymbol.scss';

//
DiscountSymbol.propTypes = { discount: PropTypes.string };

//
function DiscountSymbol({ discount }) {
    //
    return (
        <div className="DiscountSymbol pos-rel">
            <div className="text-align-center">
                <div className="text-red font-13px">{discount}</div>

                <div className="text-white font-13px">GIẢM</div>
            </div>
        </div>
    );
}

export default DiscountSymbol;
