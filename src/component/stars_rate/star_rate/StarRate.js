import React from 'react';
import PropTypes from 'prop-types';

import IconsStar from '../../../_icons_svg/icons_star/IconsStar';
// 
import './StarRate.scss';

//
StarRate.propTypes = {
    rate_avg: PropTypes.number,
    star_ix: PropTypes.number,
    size_icon: PropTypes.string,
    handleChangeRate: PropTypes.func,
};
StarRate.defaultProps = {
    handleChangeRate: () => {},
};

//
function StarRate({ star_ix, rate_icon, size_icon, handleChangeRate }) {
    //
    function onChangeRate() {
        handleChangeRate && handleChangeRate(star_ix);
    }

    //
    return (
        <div className="StarRate">
            <div className="StarRate_contain" onClick={onChangeRate}>
                <div>
                    <IconsStar color="var(--md-bg-ccc)" size_icon={size_icon} />
                </div>

                <div
                    className={`StarRate_rate ${
                        rate_icon ? '' : 'display-none'
                    }`}
                    style={{
                        width: rate_icon
                            ? rate_icon * size_icon.replace('rem', '') + 'rem'
                            : undefined,
                    }}
                >
                    <IconsStar size_icon={size_icon} />
                </div>
            </div>
        </div>
    );
}

export default StarRate;
