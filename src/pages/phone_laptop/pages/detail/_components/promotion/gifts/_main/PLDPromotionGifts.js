import React from 'react';
import PropTypes from 'prop-types';
//
import PLDPromotionGiftItem from '../item/PLDPromotionGiftItem';
//
import './PLDPromotionGifts.scss';

//
PLDPromotionGifts.propTypes = {};

//
function PLDPromotionGifts({ gift_arr, openDetailGift }) {
    //
    return (
        <div className="PLDPromotionGifts padding-top-10px">
            <div className="PLDPromotionGifts_title margin-bottom-10px padding-x-10px">
                Quà khuyến mãi
            </div>

            <div className="PLDPromotionGifts_contain padding-left-10px font-12px">
                <ul className="display-flex flex-wrap list-none">
                    {gift_arr.map((item, ix) => (
                        <li
                            key={item.id}
                            className="PLDPromotionGifts_item margin-right-10px margin-bottom-10px"
                        >
                            <PLDPromotionGiftItem
                                ix={ix}
                                name={item.name}
                                img={item.img}
                                openDetailGift={openDetailGift}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PLDPromotionGifts;
