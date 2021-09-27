import React from 'react';
import PropTypes from 'prop-types';
//
import PLBarsRateItem from '../item/PLBarsRateItem';
import PLBarsRateHead from '../head/PLBarsRateHead';

//
PLBarsRate.propTypes = {
    rating_arr: PropTypes.arrayOf(PropTypes.number),
    ...PLBarsRateHead.propTypes,
};

//
function PLBarsRate({ product_id, rating_arr, rating_avg, rating_count }) {
    //
    return (
        <div className="PLBarsRate">
            <div className="margin-bottom-15px">
                <PLBarsRateHead
                    product_id={product_id}
                    rating_avg={rating_avg}
                    rating_count={rating_count}
                />
            </div>

            <ul className="list-none font-12px">
                {rating_arr.map((item, ix) => (
                    <li key={ix} className="margin-bottom-5px">
                        <PLBarsRateItem
                            product_id={product_id}
                            star_num={ix + 1}
                            percent={Math.round((item * 100) / rating_count)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLBarsRate;
