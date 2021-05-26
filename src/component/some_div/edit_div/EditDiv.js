import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import IconsEdit from '../../../_icons_svg/icons_edit/IconsEdit';
import PermissionDiv from '../permission_div/PermissionDiv';
//
import './EditDiv.scss';

//
EditDiv.propTypes = {
    permission: PropTypes.number,
    is_editing: PropTypes.bool,

    handleChoosePermission: PropTypes.func,
    toggleEdit: PropTypes.func,
};

//
function EditDiv(props) {
    //
    const { openScreenPermission } = useContext(context_api);

    //
    const {
        permission,
        is_editing,

        handleChoosePermission,
        toggleEdit,
    } = props;

    //
    function handlePermission() {
        openScreenPermission(permission, handleChoosePermission);
    }

    //
    return (
        <div>
            <div className="display-flex align-item-center">
                <div
                    className={`EditDiv_left ${is_editing ? 'display-none' : ''}`}
                    onClick={handlePermission}
                    title="Change permission"
                >
                    <PermissionDiv
                        permission={permission}
                        show_title={is_editing}
                    />
                </div>

                <div
                    className="display-flex-center"
                >
                    <div
                        className="EditDiv_right-icon display-flex-center brs-50 cursor-pointer hv-bg-blur"
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

export default EditDiv;
