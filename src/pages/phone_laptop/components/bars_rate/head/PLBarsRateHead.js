import React from 'react';
import PropTypes from 'prop-types';
//
import StarsRate from '../../../../../component/stars_rate/_main/StarsRate';
import { Link } from 'react-router-dom';

//
PLBarsRateHead.propTypes = {
    rating_avg: PropTypes.number,
    rating_count: PropTypes.number,
};

//
function PLBarsRateHead({ product_id, rating_avg, rating_count }) {
    //
    return (
        <div className="PLBarsRateHead">
            <div className="PLBarsRateHead_row display-flex align-items-center">
                <div className="font-22px text-star font-700">{rating_avg}</div>

                <div className="margin-x-10px">
                    <StarsRate
                        rate_avg={rating_avg}
                        size_icon="18px"
                        color="var(--star)"
                    />
                </div>

                <Link
                    className="color-inherit"
                    to={`/phone-laptop/rate?product_id=${product_id}`}
                >
                    {rating_count} đánh giá
                </Link>
            </div>
        </div>
    );
}

export default PLBarsRateHead;
