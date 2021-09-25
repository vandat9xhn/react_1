import React from 'react';
import PropTypes from 'prop-types';

//
PLDPromotionGiftItem.propTypes = {};

//
function PLDPromotionGiftItem({ ix, img, name, openDetailGift }) {
    //
    function onOpenDetailGift() {
        openDetailGift(ix);
    }

    //
    return (
        <div
            className="PLDPromotionGiftItem border-blur padding-3px cursor-pointer"
            onClick={onOpenDetailGift}
        >
            <div className="PLDPromotionGiftItem_row display-flex align-items-center">
                <img
                    className="object-fit-cover"
                    src={img}
                    alt=""
                    width="40"
                    height="40"
                />

                <div className="wk-box-vertical line-clamp-2 padding-left-5px overflow-hidden">
                    {name}
                </div>
            </div>
        </div>
    );
}

export default PLDPromotionGiftItem;
