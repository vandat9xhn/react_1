import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAccount from '../../../../../../../_icons_svg/icons_account/IconsAccount';
//
import GroupSettingsItemLayout from '../_layout/GroupSettingsItemLayout';

//
GroupSettingsItemMember.propTypes = {};

//
function GroupSettingsItemMember({ openMembership }) {
    //
    return (
        <div className="GroupSettingsItemMember">
            <GroupSettingsItemLayout
                Icon={<IconsAccount />}
                handleClick={openMembership}
            >
                <div>
                    <div className="group-settings-item-title">Membership</div>

                    <div className="group-settings-item-info">
                        Leave groups that no longer interest you.
                    </div>
                </div>
            </GroupSettingsItemLayout>
        </div>
    );
}

export default GroupSettingsItemMember;
