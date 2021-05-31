import React from 'react';
import PropTypes from 'prop-types';
// 
import FashionRateBar from '../item/FashionRateBar';
// 
import './FashionRateBody.scss';

// 
FashionRateBody.propTypes = {};

// 
function FashionRateBody({rate_num_arr, rate_count}) {

    // 
    return (
        <div>
            {[0, 1, 2, 3, 4].map((ix) => (
                <div key={`FashionRate_${ix}`} className="FashionRateBody_item">
                    <FashionRateBar
                        ix={ix}
                        rate_count={rate_count}
                        rate_num_arr={rate_num_arr}
                    />
                </div>
            ))}
        </div>
    );
}

export default FashionRateBody;
