import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import FsFaceVidPic from '../../../face_vid_pic/FsFaceVidPic';
import DiscountDealSymbol from '../../../../../../component/symbol/discount_deal/DiscountDealSymbol';
import FsShopDealLabel from '../../../shop_deal_label/FsShopDealLabel';

//
FsIHDItemHead.propTypes = {};

//
function FsIHDItemHead({
    id,
    name,
    img,
    flash_img,
    discount,

    total_add,
    use_checked,
}) {
    //
    return (
        <Link to={`/fashion:${id}`} className="FsHotDealItemHead">
            <div className="FsHotDealItemHead_img padding-top-100per pos-rel">
                <FsFaceVidPic img={img} flash_img={flash_img} />

                <div className="pos-abs right-0 top-0">
                    <DiscountDealSymbol discount={discount} />
                </div>

                {total_add > 1 ? (
                    <div className="pos-abs right-0 bottom-0">
                        <div className="padding-x-4px bg-loader text-white font-14px">
                            {total_add}
                        </div>
                    </div>
                ) : null}
            </div>

            <div className="FsHotDealItemHead_name wk-box-vertical line-clamp-2 text-secondary overflow-hidden">
                {use_checked ? (
                    <div className="inline-block margin-right-5px">
                        <FsShopDealLabel
                            label="Deal Sốc"
                            class_main="font-10px color-fashion"
                        />
                    </div>
                ) : null}

                <span className="font-14px">{name}</span>
            </div>

            <div></div>
        </Link>
    );
}

export default FsIHDItemHead;
