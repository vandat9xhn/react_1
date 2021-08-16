import React from 'react';
import PropTypes from 'prop-types';
//
import StarRate from '../star_rate/StarRate';

//
StarsRate.propTypes = {
    rate_avg: PropTypes.number,
    size_icon: PropTypes.string,
    handleChangeRate: PropTypes.func,
};
StarsRate.defaultProps = {
    rate_avg: 5,
};

/**
 *  stars for rate:
 * @props: rate_avg, size_icon, handleChangeRate
 */
function StarsRate({ rate_avg, size_icon, handleChangeRate }) {
    //
    const rates_icon = [1, 2, 3, 4, 5].map((item) => {
        const rate = rate_avg + 1 - item;
        if (rate <= 0) {
            return 0;
        }
        if (rate >= 1) {
            return 1;
        }
        return rate;
    });

    //
    return (
        <div>
            <div className="display-flex align-items-center">
                {rates_icon.map((item, ix) => (
                    <StarRate
                        key={`${ix}`}
                        rate_icon={item}
                        star_ix={ix + 1}
                        size_icon={size_icon}
                        handleChangeRate={handleChangeRate}
                    />
                ))}
            </div>
        </div>
    );
}

export default StarsRate;
