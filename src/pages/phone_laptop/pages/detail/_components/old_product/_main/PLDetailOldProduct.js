import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { formatNum } from '../../../../../../../_some_function/FormatNum';

//
PLDetailOldProduct.propTypes = {};

//
function PLDetailOldProduct({ old_product_obj }) {
    //
    const { link_to, title, price, saved_price } = old_product_obj;

    //
    return (
        <div className="PLDetailOldProduct padding-y-10px">
            <Link to={link_to}>
                <span className="text-blue">{title}</span>

                <span className="margin-left-5px color-fashion">
                    {formatNum(price)}₫
                </span>

                <div className="inline-block margin-left-5px">
                    <span>Tiết kiệm</span>

                    <span className="color-fashion">{saved_price}</span>
                </div>
            </Link>
        </div>
    );
}

export default PLDetailOldProduct;
