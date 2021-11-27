import React from 'react';
import PropTypes from 'prop-types';
//
import FbSettingsTitle from '../../../../../component/fb_settings/title/FbSettingsTitle';
//
import FriendsSettingsSwitchNotice from '../item/switch_notice/FriendsSettingsSwitchNotice';

//
FriendsSettings.propTypes = {};

//
function FriendsSettings(props) {
    //
    return (
        <div className="FriendsSettings padding-top-16px padding-bottom-8px padding-x-8px brs-8px bg-primary box-shadow-fb">
            <div className="padding-x-8px padding-bottom-12px border-bottom-blur">
                <FbSettingsTitle
                    title="Notification settings"
                    info="You can manage how you are notified about friends updates."
                />
            </div>

            <div className="padding-top-5px">
                <FriendsSettingsSwitchNotice />
            </div>
        </div>
    );
}

export default FriendsSettings;
