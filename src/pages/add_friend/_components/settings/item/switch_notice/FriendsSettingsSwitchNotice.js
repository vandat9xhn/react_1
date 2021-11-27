import React from 'react';
import PropTypes from 'prop-types';
// 
import FbSettingsItemSwitchNotice from '../../../../../../component/fb_settings/item/switch_notice/FbSettingsItemSwitchNotice';

//
FriendsSettingsSwitchNotice.propTypes = {};

//
function FriendsSettingsSwitchNotice({ callbackSwitch }) {
    //
    return <FbSettingsItemSwitchNotice callbackSwitch={callbackSwitch} />;
}

export default FriendsSettingsSwitchNotice;
