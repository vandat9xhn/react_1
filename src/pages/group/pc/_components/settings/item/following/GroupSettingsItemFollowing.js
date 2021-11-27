import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import GroupSettingsItemLayout from '../_layout/GroupSettingsItemLayout';

//
GroupSettingsItemFollowing.propTypes = {};

//
function GroupSettingsItemFollowing({ openFollowing }) {
    //
    return (
        <div className="GroupSettingsItemFollowing">
            <GroupSettingsItemLayout
                Icon={<IconPlusSubtract />}
                handleClick={openFollowing}
            >
                <div>
                    <div className="group-settings-item-title">Following</div>

                    <div className="group-settings-item-info">
                        Follow or unfollow groups to control what you see in
                        News Feed.
                    </div>
                </div>
            </GroupSettingsItemLayout>
        </div>
    );
}

export default GroupSettingsItemFollowing;
