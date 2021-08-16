import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../_some_function/FormatNum';
//
import StarsRate from '../../../../../component/stars_rate/_main/StarsRate';
//
import IconHeart from '../../../../../_icons_svg/icons_like/icon_heart/IconHeart';
//
import './FashionFaceItemFoot.scss';

//
FashionFaceItemFoot.propTypes = {};

//
function FashionFaceItemFoot({
    name,
    shop_discount,
    tag_arr,
    old_price,
    new_price,
    rate_avg,
    sold,
    address,
}) {
    //
    function onLike(e) {
        e.preventDefault();

        handleLike();
    }

    //
    return (
        <div className="FashionFaceItemFoot padding-8px font-12px">
            <div className="FashionFaceItemFoot_name overflow-hidden">
                <span>{name}</span>
            </div>

            <div className="display-flex align-items-center flex-wrap font-10px">
                {shop_discount ? (
                    <div className="bg-border-fashion padding-1px">
                        <span className="text-red">Giảm {shop_discount}</span>
                    </div>
                ) : null}

                {tag_arr.map((item, ix) => (
                    <div
                        key={ix}
                        className="FashionFaceItemFoot_tag_item padding-1px"
                    >
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            <div className="">
                <div>
                    <span>
                        <del>{formatNum(old_price)}</del>
                    </span>

                    <span className="text-red">₫ {formatNum(new_price)}</span>
                </div>

                <div className="flex-between-center">
                    <div className="FashionFaceItemFoot_heart" onClick={onLike}>
                        <IconHeart />
                    </div>

                    <div>
                        <StarsRate rate_avg={rate_avg} size_icon="11px" />
                    </div>
                </div>

                <div className="text-align-end">
                    <span>Đã bán {sold}</span>
                </div>
            </div>

            <div className="text-align-end">
                <span className="text-secondary">{address}</span>
            </div>
        </div>
    );
}

export default FashionFaceItemFoot;
