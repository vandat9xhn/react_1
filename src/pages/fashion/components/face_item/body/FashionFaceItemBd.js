import React from 'react';
import PropTypes from 'prop-types';
//
import DiscountSymbol from '../../../../../component/symbol/discount/DiscountSymbol';
//
import './FashionFaceItemBd.scss';

//
FashionFaceItemBd.propTypes = {};

//
function FashionFaceItemBd({ img, mall_like, flash_img, discount }) {
    //
    return (
        <div className="FashionFaceItemBd h-100per">
            <div className="FashionFaceItemBd_contain pos-rel h-100per bg-primary">
                <img
                    className="pos-abs-100 wh-100 object-fit-cover"
                    src={img}
                    alt=""
                />

                <img className="pos-abs-100 wh-100" src={flash_img} alt="" />

                <div className="pos-abs left-0 top-0">{mall_like}</div>

                <div className="pos-abs right-0 top-0">
                    <DiscountSymbol discount={discount} />
                </div>
            </div>
        </div>
    );
}

export default FashionFaceItemBd;
