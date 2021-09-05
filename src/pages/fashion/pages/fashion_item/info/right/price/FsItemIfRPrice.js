import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import { makePriceToPrice } from '../../../../../../../_some_function/makePriceToPrice';
//
import './FsItemIfRPrice.scss';

//
FsItemIfRPrice.propTypes = {
    // old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

//
function FsItemIfRPrice({}) {
    //
    const {
        item_info,

        c_old_price,
        c_new_price,
        c_old_price_max,
        c_new_price_max,
    } = useContext(context_fashion_item);

    const { discount } = item_info;

    //
    return (
        <div className="FsItemIfRPrice bg-fb">
            <div className="FsItemIfRPrice_row display-flex align-items-center">
                <div className="FsItemIfRPrice_old font-16px">
                    <span className="text-del">
                        <del>{makePriceToPrice(c_old_price, c_old_price_max)}</del>
                    </span>
                </div>

                <div className="FsItemIfRPrice_new">
                    <span className="color-fashion font-500">
                        ₫{makePriceToPrice(c_new_price, c_new_price_max)}
                    </span>
                </div>

                <div className="FsItemIfRPrice_discount bg-fashion-red">
                    <span className="text-white font-500 font-12px">
                        {discount} GIẢM
                    </span>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRPrice;
