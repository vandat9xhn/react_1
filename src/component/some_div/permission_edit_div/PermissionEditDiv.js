import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { openScreenPermission } from '../../_screen/type/permission/_main/ScreenPermission';
// 
import IconsEdit from '../../../_icons_svg/icons_edit/IconsEdit';
import PermissionDiv from '../permission_div/PermissionDiv';
//
import './PermissionEditDiv.scss';

//
PermissionEditDiv.propTypes = {
    permission: PropTypes.number,
    is_editing: PropTypes.bool,

    handleChoosePermission: PropTypes.func,
    toggleEdit: PropTypes.func,
};

//
function PermissionEditDiv({
    permission,
    is_editing,

    handleChoosePermission,
    toggleEdit,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function handlePermission() {
        openScreenPermission({
            openScreenFloor: openScreenFloor,
            permission: permission,
            handleChoosePermission: handleChoosePermission,
        });
    }

    //
    return (
        <div>
            <div className="display-flex align-item-center">
                <div
                    className={`PermissionEditDiv_left ${
                        is_editing ? 'display-none' : ''
                    }`}
                    onClick={handlePermission}
                    title="Change permission"
                >
                    <PermissionDiv
                        permission={permission}
                        show_title={is_editing}
                    />
                </div>

                <div className="display-flex-center">
                    <div
                        className="PermissionEditDiv_right-icon display-flex-center brs-50 cursor-pointer hv-bg-blur"
                        onClick={toggleEdit}
                        title="Edit"
                    >
                        <IconsEdit is_editing={is_editing} size_icon="1rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PermissionEditDiv;
