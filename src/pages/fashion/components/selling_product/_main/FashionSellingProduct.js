import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import DiscountSymbol from '../../../../../component/symbol/discount/DiscountSymbol';
//
import './FashionSellingProduct.scss';

//
FashionSellingProduct.propTypes = {};

//
function FashionSellingProduct({ id, img, price, discount }) {
    //
    return (
        <Link to={`/fashion:${id}`}>
            <div className="FashionSellingProduct pos-rel wh-100 bg-primary">
                <div className="pos-abs right-0 top-0">
                    <DiscountSymbol discount={discount} />
                </div>

                <div
                    className="FashionSellingProduct_bd wh-100"
                    style={{ backgroundImage: `url(${img})` }}
                ></div>

                <div className="padding-8px">
                    <div className="text-align-center text-fashion-red">
                        <span>
                            <sup>₫</sup>
                        </span>

                        <span className="font-18px">{price}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default FashionSellingProduct;
