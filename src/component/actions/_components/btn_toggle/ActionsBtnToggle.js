import React from 'react';
import PropTypes from 'prop-types';
//
import IconThreeDot from '../../../../_icons_svg/icon_three_dot/IconThreeDot';
// 
import './ActionsBtnToggle.scss';

//
ActionsBtnToggle.propTypes = {
    title_action: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    toggleShow: PropTypes.func,
};

ActionsBtnToggle.defaultProps = {
    title_action: (
        <div className="ActionsBtnToggle_icon display-flex-center brs-50 hv-opacity hv-bg-s-through font-700 user-select-none cursor-pointer">
            <IconThreeDot size_icon="1.25rem" color="var(--md-color-third)" />
        </div>
    ),
};

//
function ActionsBtnToggle({ title_action, toggleShow }) {
    //
    return (
        <div className="ActionsBtnToggle" onClick={toggleShow}>
            {title_action}
        </div>
    );
}

export default ActionsBtnToggle;
