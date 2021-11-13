import React from 'react';
import PropTypes from 'prop-types';
//
import './Switch.scss';

//
Switch.propTypes = {
    switch_on: PropTypes.bool,
};

Switch.defaultProps = {
    switch_on: false,
};

//
function Switch({ switch_on }) {
    //
    return (
        <div className={`Switch ${switch_on ? 'Switch-open' : ''}`}>
            <div className="Switch_ball" />
        </div>
    );
}

export default Switch;
