import React from 'react';
import PropTypes from 'prop-types';
//
import PLDPromotionItem from '../item/PLDPromotionItem';
import PLDPromotionHead from '../head/PLDPromotionHead';
import PLDPromotionGifts from '../gifts/_main/PLDPromotionGifts';
import PLDetailConditions from '../conditions/_main/PLDetailConditions';
//
import './PLDetailPromotion.scss';

//
PLDetailPromotion.propTypes = {};

//
function PLDetailPromotion({ promotion_obj, openDetailGift }) {
    //
    const { cost, end_time, data, note, gift_arr, condition_arr } =
        promotion_obj;

    //
    return (
        <div className="PLDetailPromotion">
            {condition_arr.length ? (
                <div className="margin-bottom-15px">
                    <PLDetailConditions condition_arr={condition_arr} />
                </div>
            ) : null}

            <div className="PLDetailPromotion_contain brs-4px border-blur">
                <div>
                    <PLDPromotionHead cost={cost} end_time={end_time} />
                </div>

                <div>
                    <ul className="list-none">
                        {data.map((item, ix) => (
                            <li key={item.id}>
                                <PLDPromotionItem ix={ix} info={item.info} />
                            </li>
                        ))}
                    </ul>
                </div>

                {gift_arr.length ? (
                    <div className="PLDetailPromotion_gifts">
                        <PLDPromotionGifts
                            gift_arr={gift_arr}
                            openDetailGift={openDetailGift}
                        />
                    </div>
                ) : null}

                {note ? (
                    <div className="PLDetailPromotion_note padding-10px">
                        {note}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default PLDetailPromotion;
