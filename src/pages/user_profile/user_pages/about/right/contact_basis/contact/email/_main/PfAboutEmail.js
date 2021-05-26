import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useScreenFetching } from '../../../../../../../../../_custom_hooks/UseScreenFetching';
import { useForceUpdate } from '../../../../../../../../../_custom_hooks/UseForceUpdate';
//
import EditDiv from '../../../../../../../../../component/some_div/edit_div/EditDiv';
import IconDiv from '../../../../../../../../../component/some_div/icon_div/IconDiv';
import IconsProfile from '../../../../../../../../../_icons_svg/icons_profile/IconsProfile';
//
import { handle_API_PermissionEmail_U } from '../../../../../../../__handle_api/ProfileHandleAPI';

import PfAbEmailEdit from '../edit/PfAbEmailEdit';
//
import './PfAboutEmail.scss';

//
PfAboutEmail.propTypes = {};

//
function PfAboutEmail(props) {
    //
    const { email_obj } = props;

    const { email, permission } = email_obj;

    //
    const [email_state, setEmailState] = useState({
        is_editing: false,
    });

    const { is_editing } = email_state;

    //
    function closeEdit() {
        setEmailState({
            ...email_state,
            is_editing: false,
        });
    }

    //
    const handleScreenFetching = useScreenFetching();
    const forceUpdate = useForceUpdate();

    //
    async function handleChoosePermission(new_permission) {
        await handleScreenFetching(() =>
            handle_API_PermissionEmail_U({ permission: new_permission })
        );

        email_obj.permission = new_permission;
        forceUpdate();
    }

    //
    function toggleEdit() {
        setEmailState({
            ...email_state,
            is_editing: !is_editing,
        });
    }

    //
    async function handleSave(new_email, new_password, new_permission) {
        await handleScreenFetching(() =>
            handle_API_PermissionEmail_U({
                email: new_email,
                password: new_password,
                permission: new_permission,
            })
        );

        email_obj.permission = new_permission;
        email_obj.email = new_email;
        closeEdit();
    }

    //
    function handleCancel() {
        closeEdit();
    }

    //
    return (
        <div>
            <div className="PfAboutEmail_current">
                <div
                    className={`flex-between-center ${
                        is_editing ? 'PfAboutEmail_current_row_edit' : ''
                    }`}
                >
                    <div className={is_editing ? 'display-none' : ''}>
                        <IconDiv Icon={IconsProfile} x={200}>
                            {email}
                        </IconDiv>
                    </div>

                    <div>
                        <EditDiv
                            permission={permission}
                            is_editing={is_editing}
                            handleChoosePermission={handleChoosePermission}
                            toggleEdit={toggleEdit}
                        />
                    </div>
                </div>
            </div>

            {is_editing && (
                <div className="PfAboutEmail_edit">
                    <PfAbEmailEdit
                        email={email}
                        permission={permission}
                        handleSave={handleSave}
                        handleCancel={handleCancel}
                    />
                </div>
            )}
        </div>
    );
}

export default PfAboutEmail;
