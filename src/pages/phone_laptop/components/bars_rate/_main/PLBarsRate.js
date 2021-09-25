import React from 'react';
import PropTypes from 'prop-types';
//
import PLBarsRateItem from '../item/PLBarsRateItem';
import PLBarsRateHead from '../head/PLBarsRateHead';

//
PLBarsRate.propTypes = {};

//
function PLBarsRate({ rating_arr, rating_avg, rating_count }) {
    //
    return (
        <div className="PLBarsRate">
            <div className="margin-bottom-15px">
                <PLBarsRateHead
                    rating_avg={rating_avg}
                    rating_count={rating_count}
                />
            </div>

            <ul className="list-none">
                {rating_arr.map((item, ix) => (
                    <li key={ix} className="margin-bottom-7px">
                        <PLBarsRateItem star_num={ix + 1} percent={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLBarsRate;
