import React from 'react';
import PropTypes from 'prop-types';
//
import DiscountSymbol from '../../../../../component/symbol/discount/DiscountSymbol';
// 
import FsFaceVidPic from '../../face_vid_pic/FsFaceVidPic';
//
import './FashionFaceItemBd.scss';

//
FashionFaceItemBd.propTypes = {
    img: PropTypes.string,
    mall_like: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    flash_img: PropTypes.string,
    discount: PropTypes.string,
};

//
function FashionFaceItemBd({ img, mall_like, flash_img, discount }) {
    //
    return (
        <div className="FashionFaceItemBd h-100per">
            <div className="FashionFaceItemBd_contain pos-rel h-100per bg-primary">
                <FsFaceVidPic img={img} flash_img={flash_img} />

                <div className="pos-abs left-0 top-0">{mall_like}</div>

                {discount ? (
                    <div className="pos-abs right-0 top-0">
                        <DiscountSymbol discount={discount} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default FashionFaceItemBd;
