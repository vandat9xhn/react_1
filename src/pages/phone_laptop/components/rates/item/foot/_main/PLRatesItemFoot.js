import React from 'react';
import PropTypes from 'prop-types';
//
import PLUsedTime from '../../../../used_time/PLUsedTime';
import PLRItemFootLeft from '../left/PLRItemFootLeft';

//
PLRatesItemFoot.propTypes = {};

//
function PLRatesItemFoot({
    count_like,
    count_discuss,

    buying_time,
    rating_time,
    used_time_str,

    handleLike,
    showDiscuss,
}) {
    //
    return (
        <div className="PLRatesItemFoot">
            <div className="PLRatesItemFoot_row display-flex align-items-center">
                <div>
                    <PLRItemFootLeft
                        count_like={count_like}
                        count_discuss={count_discuss}
                        handleLike={handleLike}
                        showDiscuss={showDiscuss}
                    />
                </div>

                <div className="margin-x-20px text-third">|</div>

                <div>
                    <PLUsedTime
                        buying_time={buying_time}
                        rating_time={rating_time}
                        used_time_str={used_time_str}
                    />
                </div>
            </div>
        </div>
    );
}

export default PLRatesItemFoot;
