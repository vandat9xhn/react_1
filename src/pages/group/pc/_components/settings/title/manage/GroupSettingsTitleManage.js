import React from 'react';
import PropTypes from 'prop-types';
//
import GroupSettingsTitle from '../_main/GroupSettingsTitle';

//
GroupSettingsTitleManage.propTypes = {};

//
function GroupSettingsTitleManage(props) {
    //
    return (
        <GroupSettingsTitle
            title="Manage groups"
            info="You can manage all of the groups that you are a member of at once."
        />
    );
}

export default GroupSettingsTitleManage;
