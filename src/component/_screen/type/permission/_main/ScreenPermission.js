import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { IconsPermission } from '../../../../../_groups_icon/permission/GroupIconPermission';
//
import ScreenBlurHead from '../../../components/part/head/ScreenBlurHead';
import ScreenBlur from '../../../components/frame/blur/ScreenBlur';
import ScreenPermissionItem from '../item/ScreenPermissionItem';
import ScreenBlurFootYesNo from '../../../components/part/foot_yes_no/ScreenBlurFootYesNo';
//
import './ScreenPermission.scss';

//
export function openScreenPermission({
    openScreenFloor,
    permission,
    handleChoosePermission,
}) {
    openScreenFloor({
        FloorComponent: ScreenPermission,
        permission: permission,
        handleChoosePermission: handleChoosePermission,
    });
}

//
ScreenPermission.propTypes = {};

//
function ScreenPermission({ closeScreen, permission, handleChoosePermission }) {
    //
    const [permission_state, setPermissionState] = useState({
        active_permission: permission,
    });

    const { active_permission } = permission_state;

    //
    function choosePermission(new_active_permission) {
        setPermissionState({
            ...permission_state,
            active_permission: new_active_permission,
        });
    }

    //
    function handleConfirm() {
        closeScreen();
        permission != active_permission &&
            handleChoosePermission(active_permission);
    }

    //
    return (
        <ScreenBlur closeScreen={closeScreen} screen_center={true}>
            <div className="ScreenPermission">
                <div>
                    <ScreenBlurHead
                        title="Permission"
                        closeScreenBlur={closeScreen}
                    />
                </div>

                <div className="ScreenBlur_body_contain scroll-thin">
                    {IconsPermission.map((icon_obj, ix) => (
                        <div
                            key={`ScreenPermission_${ix}`}
                            className="ScreenPermission_item"
                        >
                            <ScreenPermissionItem
                                ix={ix}
                                is_active={active_permission == ix}
                                icon_obj={icon_obj}
                                choosePermission={choosePermission}
                            />
                        </div>
                    ))}
                </div>

                <div>
                    <ScreenBlurFootYesNo
                        disabled={permission == active_permission}
                        handleConfirm={handleConfirm}
                        closeScreenBlur={closeScreen}
                    />
                </div>
            </div>
        </ScreenBlur>
    );
}

export default ScreenPermission;
