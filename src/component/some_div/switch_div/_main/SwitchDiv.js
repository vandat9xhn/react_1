import React from 'react';
import PropTypes from 'prop-types';
//
import ToggleSwitch from '../switch/Switch';
//
import './SwitchDiv.scss';

//
SwitchDiv.propTypes = {
    children: PropTypes.any,
    switch_on: PropTypes.bool,
};

SwitchDiv.defaultProps = {};

//
function SwitchDiv({ children, switch_on }) {
    //
    return (
        <div className="SwitchDiv w-100per">
            <div className="SwitchDiv_row flex-between-center">
                <div className="SwitchDiv_children">{children}</div>

                <div className="SwitchDiv_icon">
                    <ToggleSwitch switch_on={switch_on} />
                </div>
            </div>
        </div>
    );
}

export default SwitchDiv;
