import React from 'react';
import PropTypes from 'prop-types';
//
import RadioCustom from '../../../../input/radio_custom/RadioCustom';
//
import './ScreenPermissionItem.scss';

//
ScreenPermissionItem.propTypes = {
    is_active: PropTypes.bool,
    icon_obj: PropTypes.object,
};

//
function ScreenPermissionItem({ is_active, ix, icon_obj, choosePermission }) {
    //
    const { Icon, title } = icon_obj;

    //
    function onChoosePermission() {
        !is_active && choosePermission(ix);
    }

    //
    return (
        <div
            className={`ScreenPermissionItem cursor-pointer ${
                is_active ? 'ScreenPermissionItem_active' : ''
            }`}
            onClick={onChoosePermission}
        >
            <div className="display-flex align-items-center">
                <div>
                    <RadioCustom is_active={is_active} />
                </div>

                <div className="ScreenPermissionItem_right">
                    <div className="display-flex align-items-center">
                        <div className="ScreenPermissionItem_right_icon display-flex">
                            {Icon}
                        </div>

                        <div className="font-500">{title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenPermissionItem;
