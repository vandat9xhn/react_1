import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../_hooks/useBool';
//
import IconGroupNoticeDot from '../../../../_icons_svg/group_notice_dot/IconGroupNoticeDot';
//
import SwitchDiv from '../../../some_div/switch_div/_main/SwitchDiv';
//
import FbSettingsItemLayout from '../_layout/FbSettingsItemLayout';

//
FbSettingsItemSwitchNotice.propTypes = {
    callbackSwitch: PropTypes.func,
};

FbSettingsItemSwitchNotice.defaultProps = {
    callbackSwitch: () => {},
};

//
function FbSettingsItemSwitchNotice({ callbackSwitch }) {
    //
    const { is_true, setIsTrue } = useBool(true);

    // -----

    //
    function toggleSwitch() {
        setIsTrue((is_true) => {
            callbackSwitch(is_true);
            return !is_true;
        });
    }

    //
    return (
        <div className="FbSettingsItemSwitchNotice">
            <FbSettingsItemLayout
                Icon={<IconGroupNoticeDot />}
                handleClick={toggleSwitch}
            >
                <SwitchDiv switch_on={is_true}>
                    <div className="group-settings-item-title">
                        Show notification dots
                    </div>
                </SwitchDiv>
            </FbSettingsItemLayout>
        </div>
    );
}

export default FbSettingsItemSwitchNotice;
