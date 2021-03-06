import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
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
    //
    const { user } = useContext(context_api);

    //
    return (
        <div className="FashionRateChart">
            <div className="FashionRateChart_head">
                <div className="FashionRateChart_avg display-flex-center">
                    <div>
                        <StarsRate rate_avg={rate_avg} size_icon="2rem" />
                    </div>

                    <div className="FashionRateChart_avg-num font-500">
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

            {user.id ? (
                <div className="FashionRateChart_foot">
                    <FashionRateFoot
                        user_rate={user_rate}
                        openRateNow={openRateNow}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default FashionRateChart;
