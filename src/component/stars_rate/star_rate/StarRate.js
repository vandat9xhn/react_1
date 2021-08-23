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
function StarRate({ star_ix, rate_icon, size_icon, color, handleChangeRate }) {
    //
    function onChangeRate() {
        handleChangeRate(star_ix);
    }

    //
    return (
        <div className="StarRate pos-rel" onClick={onChangeRate}>
            <IconsStar color="var(--md-bg-ccc)" size_icon={size_icon} />

            <div
                className={`StarRate_rate pos-abs top-0 left-0 overflow-hidden ${
                    rate_icon ? '' : 'display-none'
                }`}
                style={{
                    width: rate_icon
                        ? // ? rate_icon * size_icon.replace('rem', '') + 'rem'
                          rate_icon * 100 + '%'
                        : undefined,
                }}
            >
                <IconsStar size_icon={size_icon} color={color} />
            </div>
        </div>
    );
}

export default StarRate;
