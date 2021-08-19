import React from 'react';
import PropTypes from 'prop-types';
//
import './FsItemIfRPrice.scss';

//
FsItemIfRPrice.propTypes = {
    old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

//
function FsItemIfRPrice({ old_price, new_price, discount }) {
    //
    return (
        <div className="FsItemIfRPrice bg-fb">
            <div className="display-flex">
                <div>
                    <span className="text-del font-16px">
                        <del>{old_price}</del>
                    </span>
                </div>

                <div className="FsItemIfRPrice_new">
                    <span className="color-fashion label-field">
                        {new_price}
                    </span>
                </div>

                <div>
                    <span className="text-white label-field font-12px">
                        {discount}% GIẢM
                    </span>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRPrice;
