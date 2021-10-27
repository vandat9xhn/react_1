import React from 'react';
import PropTypes from 'prop-types';
//
import ToggleSwitch from '../switch/Switch';
//
import './SwitchDiv.scss';

//
function SwitchDiv({ children, switch_on }) {
    //
    return (
        <div className="SwitchDiv">
            <div className="SwitchDiv_row flex-between-center">
                <div className="SwitchDiv_children">{children}</div>

                <div className="SwitchDiv_icon">
                    <ToggleSwitch switch_on={switch_on} />
                </div>
            </div>
        </div>
    );
}

SwitchDiv.propTypes = {
    children: PropTypes.any,
    switch_on: PropTypes.bool,
};

SwitchDiv.defaultProps = {};

export default SwitchDiv;
