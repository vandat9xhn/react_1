import React from 'react';
import PropTypes from 'prop-types';
//
import IconPinned from '../../../../../../../_icons_svg/pinned/IconPinned';
//
import GroupSettingsItemLayout from '../_layout/GroupSettingsItemLayout';

//
GroupSettingsItemPin.propTypes = {};

//
function GroupSettingsItemPin({ openPins }) {
    //
    return (
        <div className="GroupSettingsItemPin">
            <GroupSettingsItemLayout
                Icon={<IconPinned />}
                handleClick={openPins}
            >
                <div>
                    <div className="group-settings-item-title">Pins</div>

                    <div className="group-settings-item-info">
                        Pin your favourite groups for quick access.
                    </div>
                </div>
            </GroupSettingsItemLayout>
        </div>
    );
}

export default GroupSettingsItemPin;
