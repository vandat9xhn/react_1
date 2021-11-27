import React from 'react';
import PropTypes from 'prop-types';
//
import FbSettingsItemSwitchNotice from '../../../../../../../component/fb_settings/item/switch_notice/FbSettingsItemSwitchNotice';

//
GroupSettingsItemSwitchNotice.propTypes = {};

//
function GroupSettingsItemSwitchNotice({ callbackSwitch }) {
    //
    return <FbSettingsItemSwitchNotice callbackSwitch={callbackSwitch} />;
}

export default GroupSettingsItemSwitchNotice;
