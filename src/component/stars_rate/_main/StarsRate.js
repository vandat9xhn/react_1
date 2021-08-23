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

//
function StarsRate({ rate_avg, size_icon, color, handleChangeRate }) {
    //
    const rates_icon = [1, 2, 3, 4, 5].map((item) => {
        let rate = rate_avg + 1 - item;

        return rate <= 0 ? 0 : rate >= 1 ? 1 : rate;
    });

    //
    return (
        <div className="StarsRate">
            <div className="display-flex align-items-center">
                {rates_icon.map((rate, ix) => (
                    <StarRate
                        key={`${ix}`}
                        rate_icon={rate}
                        star_ix={ix + 1}
                        size_icon={size_icon}
                        color={color}
                        handleChangeRate={handleChangeRate}
                    />
                ))}
            </div>
        </div>
    );
}

export default StarsRate;
