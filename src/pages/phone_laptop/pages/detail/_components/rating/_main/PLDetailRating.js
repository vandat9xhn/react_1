import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import PLRates from '../../../../../components/rates/_main/PLRates';
import PLDRatingHead from '../head/_main/PLDRatingHead';
//
import './PLDetailRating.scss';

//
PLDetailRating.propTypes = {};

//
function PLDetailRating({
    product_id,
    product_name,

    rating_arr,
    rating_avg,
    rating_count,

    rate_img_arr,
    rate_img_count,
    rate_arr,

    openDetailRateImg,
    openDetailRate,
    handleSendDiscuss,
}) {
    //
    return (
        <div className="PLDetailRating padding-15px brs-8px border-blur">
            <div className="padding-bottom-15px border-bottom-blur">
                <PLDRatingHead
                    product_id={product_id}
                    product_name={product_name}
                    rating_arr={rating_arr}
                    rating_avg={rating_avg}
                    rating_count={rating_count}
                    rate_img_arr={rate_img_arr}
                    rate_img_count={rate_img_count}
                    openDetailRateImg={openDetailRateImg}
                />
            </div>

            <div className="margin-bottom-15px">
                <PLRates
                    rate_arr={rate_arr}
                    handleSendDiscuss={handleSendDiscuss}
                />
            </div>

            <div className="flex-between-center padding-y-15px border-top-blur">
                <Link
                    className="PLDetailRating_see_all padding-y-10px brs-4px bg-blue text-white text-align-center"
                    to={`/phone-laptop/rate?product_id=${product_id}`}
                >
                    Xem tất cả đánh giá
                </Link>

                <button
                    className="PLDetailRating_btn_rate padding-y-10px brs-4px border-blue text-blue text-align-center cursor-pointer"
                    type="button"
                    onClick={openDetailRate}
                >
                    Viết đánh giá
                </button>
            </div>
        </div>
    );
}

export default PLDetailRating;
