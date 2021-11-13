import React from 'react';
import PropTypes from 'prop-types';
//
import SwitchDiv from '../../../../../some_div/switch_div/_main/SwitchDiv';

//
FbSearchPageFilterSwitch.propTypes = {};

//
function FbSearchPageFilterSwitch({ title, switch_on, toggleSwitch }) {
    //
    return (
        <div
            className="FbSearchPageFilterSwitch padding-8px brs-6px line-20px cursor-pointer hv-bg-fb"
            onClick={toggleSwitch}
        >
            <SwitchDiv switch_on={switch_on}>{title}</SwitchDiv>
        </div>
    );
}

export default FbSearchPageFilterSwitch;
