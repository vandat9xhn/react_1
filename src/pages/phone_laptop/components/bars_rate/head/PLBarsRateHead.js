import React from 'react';
import PropTypes from 'prop-types';
//
import StarsRate from '../../../../../component/stars_rate/_main/StarsRate';

//
PLBarsRateHead.propTypes = {};

//
function PLBarsRateHead({ rating_avg, rating_count }) {
    //
    return (
        <div className="PLBarsRateHead">
            <div className="PLBarsRateHead_row display-flex align-items-center">
                <div className="font-22px text-star">{rating_avg}</div>

                <div>
                    <StarsRate
                        rate_avg={rating_avg}
                        size_icon="16px"
                        color="var(--star)"
                    />
                </div>

                <div>{rating_count} đánh giá</div>
            </div>
        </div>
    );
}

export default PLBarsRateHead;
