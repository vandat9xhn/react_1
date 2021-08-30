import React from 'react';
import PropTypes from 'prop-types';
//
import DiscountSymbol from '../../../../../component/symbol/discount/DiscountSymbol';
//
import FashionMallLike from '../../is_like/FashionMallLike';
//
import FsFaceVidPic from '../../face_vid_pic/FsFaceVidPic';
//
import './FashionFaceItemBd.scss';

//
FashionFaceItemBd.propTypes = {
    img: PropTypes.string,
    flash_img: PropTypes.string,
    discount: PropTypes.string,
    is_like: PropTypes.bool,
    is_mall: PropTypes.bool,
    is_plus: PropTypes.bool,
};

//
function FashionFaceItemBd({
    img,
    flash_img,
    discount,
    is_like,
    is_mall,
    is_plus,
}) {
    //
    return (
        <div className="FashionFaceItemBd h-100per">
            <div className="FashionFaceItemBd_contain pos-rel h-100per bg-primary">
                <FsFaceVidPic img={img} flash_img={flash_img} />

                <div className="pos-abs left-0 top-0">
                    <FashionMallLike
                        is_like={is_like}
                        is_mall={is_mall}
                        is_plus={is_plus}
                    />
                </div>

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
