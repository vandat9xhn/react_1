import React from 'react';
import PropTypes from 'prop-types';
//
import IconSetting from '../../../../../../../_icons_svg/icon_setting/IconSetting';
//
import GroupSettingsItemLayout from '../_layout/GroupSettingsItemLayout';

//
GroupSettingsItemCustom.propTypes = {};

//
function GroupSettingsItemCustom({ openCustomSettings }) {
    //
    return (
        <div className="GroupSettingsItemCustom">
            <GroupSettingsItemLayout
                Icon={<IconSetting />}
                handleClick={openCustomSettings}
            >
                <div className="group-settings-item-title">
                    Customize notifications
                </div>
            </GroupSettingsItemLayout>
        </div>
    );
}

export default GroupSettingsItemCustom;
