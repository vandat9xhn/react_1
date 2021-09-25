import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
PLDetailOldProduct.propTypes = {};

//
function PLDetailOldProduct({ link_to, title, price, saved_price }) {
    //
    return (
        <div className="PLDetailOldProduct">
            <Link to={link_to}>
                <span className="text-blue">{title}</span>

                <span className="color-fashion">{price}₫</span>

                <div className="inline-block">
                    <span>Tiết kiệm</span>

                    <span className="color-fashion">{saved_price}</span>
                </div>
            </Link>
        </div>
    );
}

export default PLDetailOldProduct;
