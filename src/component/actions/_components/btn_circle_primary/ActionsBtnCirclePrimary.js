import React from 'react';
import PropTypes from 'prop-types';
//
import IconThreeDot from '../../../../_icons_svg/icon_three_dot/IconThreeDot';

//
ActionsBtnCirclePrimary.propTypes = {};

//
function ActionsBtnCirclePrimary(props) {
    //
    return (
        <div className="ActionsBtnCirclePrimary display-flex-center brs-50 border-blur bg-primary cursor-pointer hv-bg-blur">
            <IconThreeDot size_icon="18px" color="var(--md-color-third)" />
        </div>
    );
}

export default ActionsBtnCirclePrimary;
