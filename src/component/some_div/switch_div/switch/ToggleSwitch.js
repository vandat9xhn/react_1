import React from 'react';
import PropTypes from 'prop-types';
//
import './ToggleSwitch.scss';

//
ToggleSwitch.propTypes = {
    switch_on: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
    switch_on: false,
};

//
function ToggleSwitch({ switch_on }) {
    //
    return (
        <div className={`ToggleSwitch ${switch_on ? 'ToggleSwitch-open' : ''}`}>
            <div className="ToggleSwitch_ball" />
        </div>
    );
}

export default ToggleSwitch;
