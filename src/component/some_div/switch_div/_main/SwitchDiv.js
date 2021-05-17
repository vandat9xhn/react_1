import React from 'react';
import PropTypes from 'prop-types';
// 
import ToggleSwitch from '../switch/Switch';
// 
import './SwitchDiv.scss';

//
function SwitchDiv(props) {
    const {children, switch_on} = props;

    // 
    return (
        <div className="SwitchDiv">
            <div className="SwitchDiv_row">
                <div className="SwitchDiv__children">
                    {children}
                </div>

                <div className="SwitchDiv__icon">
                    <ToggleSwitch switch_on={switch_on}/>
                </div>
            </div>
        </div>
    );
}


SwitchDiv.propTypes = {
    children: PropTypes.any,
    switch_on: PropTypes.bool,
};

SwitchDiv.defaultProps = {
    
}

export default SwitchDiv;