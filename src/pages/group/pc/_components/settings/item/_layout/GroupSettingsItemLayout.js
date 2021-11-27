import React from 'react';
import PropTypes from 'prop-types';
//
import FbSettingsItemLayout from '../../../../../../../component/fb_settings/item/_layout/FbSettingsItemLayout';
//
import './GroupSettingsItemLayout.scss';

//
GroupSettingsItemLayout.propTypes = {};

//
function GroupSettingsItemLayout({ Icon, children, handleClick }) {
    //
    return (
        <FbSettingsItemLayout Icon={Icon} handleClick={handleClick}>
            {children}
        </FbSettingsItemLayout>
    );
}

export default GroupSettingsItemLayout;
