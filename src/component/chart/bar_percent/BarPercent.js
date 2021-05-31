import React from 'react';
import PropTypes from 'prop-types';
// 
import './BarPercent.scss';

//
BarPercent.propTypes = {
    percent: PropTypes.number,
};

//
function BarPercent({percent}) {
    return (
        <div className="BarPercent" title={percent + '%'}>
            <div
                className="BarPercent_real"
                style={{
                    width: percent + '%',
                    height: '100%',
                }}
            ></div>
        </div>
    );
}

export default BarPercent;
