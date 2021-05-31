import React from 'react';
import PropTypes from 'prop-types';
//
import StarsRate from '../../../../../../../component/stars_rate/_main/StarsRate';
//
import FashionRateBody from '../body/_main/FashionRateBody';
import FashionRateFoot from '../foot/_main/FashionRateFoot';
// 
import './FashionRateChart.scss';

// 
FashionRateChart.propTypes = {};

//
function FashionRateChart({
    rate_num_arr,
    rate_count,
    rate_avg,
    user_rate,
    openRateNow,
}) {
    return (
        <div className="FashionRateChart">
            <div className="FashionRateChart_head">
                <div className="FashionRateChart_avg display-flex-center">
                    <div>
                        <StarsRate rate_avg={rate_avg} size_icon="2rem" />
                    </div>

                    <div className="FashionRateChart_avg-num label-field">
                        {rate_avg ? rate_avg.toFixed(1) : 0.0}
                    </div>
                </div>
            </div>

            <div className="FashionRateChart_body">
                <FashionRateBody
                    rate_num_arr={rate_num_arr}
                    rate_count={rate_count}
                />
            </div>

            {localStorage.is_login == 1 && (
                <div className="FashionRateChart_foot">
                    <FashionRateFoot
                        user_rate={user_rate}
                        openRateNow={openRateNow}
                    />
                </div>
            )}
        </div>
    );
}

export default FashionRateChart;
