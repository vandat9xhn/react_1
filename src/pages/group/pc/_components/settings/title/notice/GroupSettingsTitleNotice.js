import React from 'react';
import PropTypes from 'prop-types';
//
import GroupSettingsTitle from '../_main/GroupSettingsTitle';

//
GroupSettingsTitleNotice.propTypes = {};

//
function GroupSettingsTitleNotice(props) {
    //
    return (
        <GroupSettingsTitle
            title="Notification settings"
            info="You can manage how you are notified about group updates."
        />
    );
}

export default GroupSettingsTitleNotice;
