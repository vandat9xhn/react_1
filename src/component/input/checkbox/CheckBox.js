import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../_icons_svg/icons_status_message/icon_sent/IconSent';
//
import './CheckBox.scss';

//
CheckBox.propTypes = {};

//
function CheckBox({ size_icon }) {
    //
    return (
        <div className="CheckBox display-flex-center brs-5px border-blur bg-current">
            <IconSent stroke="var(--md-bg-primary)" size_icon={size_icon} />
        </div>
    );
}

export default CheckBox;
