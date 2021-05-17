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
function Switch(props) {
    const { switch_on } = props;
    //
    return (
        <div>
            <div
                className={`Switch_btn ${
                    switch_on ? 'Switch_open' : ''
                }`}
            >
                <div className="Switch_ball" />
            </div>
        </div>
    );
}

export default Switch;
