import React from 'react';
import PropTypes from 'prop-types';
//
import './GroupSettingsCommon.scss';
//
import GroupSettingsTitleNotice from '../title/notice/GroupSettingsTitleNotice';
import GroupSettingsTitleManage from '../title/manage/GroupSettingsTitleManage';

import GroupSettingsItemSwitchNotice from '../item/switch_notice/GroupSettingsItemSwitchNotice';
import GroupSettingsItemCustom from '../item/custom/GroupSettingsItemCustom';
import GroupSettingsItemFollowing from '../item/following/GroupSettingsItemFollowing';
import GroupSettingsItemMember from '../item/membership/GroupSettingsItemMember';
import GroupSettingsItemPin from '../item/pin/GroupSettingsItemPin';
//
import './GroupSettings.scss';
//

GroupSettings.propTypes = {};

//
function GroupSettings(props) {
    //
    return (
        <div className="GroupSettings padding-y-16px brs-8px bg-primary box-shadow-fb">
            <div className="GroupSettings_notice border-bottom-blur">
                <div className="padding-x-16px">
                    <GroupSettingsTitleNotice />
                </div>

                <div className="padding-y-12px padding-x-8px">
                    <div>
                        <GroupSettingsItemSwitchNotice />
                    </div>

                    <div>
                        <GroupSettingsItemCustom />
                    </div>
                </div>
            </div>

            <div className="GroupSettings_manage padding-top-12px">
                <div className="padding-x-16px">
                    <GroupSettingsTitleManage />
                </div>

                <div className="padding-top-12px padding-x-8px">
                    <div>
                        <GroupSettingsItemPin />
                    </div>

                    <div>
                        <GroupSettingsItemFollowing />
                    </div>

                    <div>
                        <GroupSettingsItemMember />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupSettings;
