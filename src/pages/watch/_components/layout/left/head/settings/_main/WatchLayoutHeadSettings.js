import React from 'react';
import PropTypes from 'prop-types';
//
import FbSettingsItemSwitchNotice from '../../../../../../../../component/fb_settings/item/switch_notice/FbSettingsItemSwitchNotice';
import FbSettingsTitle from '../../../../../../../../component/fb_settings/title/FbSettingsTitle';

//
WatchLayoutHeadSettings.propTypes = {};

//
function WatchLayoutHeadSettings(props) {
    // ----

    // 
    function callbackSwitch() {
        
    }

    //
    return (
        <div className="WatchLayoutHeadSettings padding-top-16px padding-bottom-8px padding-x-8px brs-8px bg-primary box-shadow-fb">
            <div className="padding-x-8px padding-bottom-12px border-bottom-blur">
                <FbSettingsTitle
                    title="Notification settings"
                    info="You can manage how you are notified about Watch updates."
                />
            </div>

            <div className="padding-top-5px">
                <FbSettingsItemSwitchNotice callbackSwitch={callbackSwitch} />;
            </div>
        </div>
    );
}

export default WatchLayoutHeadSettings;
