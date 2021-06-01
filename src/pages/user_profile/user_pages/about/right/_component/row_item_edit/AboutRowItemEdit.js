import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../_custom_hooks/UseForceUpdate';
import { useScreenFetching } from '../../../../../../../_custom_hooks/UseScreenFetching';
//
import AboutRowItem from '../row_item/_main/AboutRowItem';
//
import './AboutRowItemEdit.scss';

//
AboutRowItemEdit.propTypes = {
    item_obj: PropTypes.object,
    Icon: PropTypes.element,

    handle_API_U: PropTypes.func,
    ComponentEdit: PropTypes.func,
    handleUpdateItemObj: PropTypes.func,
};

//
function AboutRowItemEdit(props) {
    //
    const {
        item_obj,
        Icon,

        ComponentEdit,
        handle_API_U,
        handleUpdateItemObj,
    } = props;

    const { permission, title, is_del } = item_obj;

    //
    const [is_editing, setIsEditing] = useState(false);

    //
    const forceUpdate = useForceUpdate();
    const handleScreenFetching = useScreenFetching();

    /* --------------- COMMON ---------------- */

    function closeEdit() {
        setIsEditing(false);
    }

    /* ------------------------------- */

    //
    function toggleEdit() {
        setIsEditing(!is_editing);
    }

    //
    async function handleChoosePermission(new_permission) {
        await handleScreenFetching(() =>
            handle_API_U({ permission: new_permission })
        );

        item_obj.permission = new_permission;
        forceUpdate();
    }

    //
    async function handleSave(data) {
        await handleScreenFetching(() => handle_API_U(data));

        handleUpdateItemObj(data);
        closeEdit();
    }

    //
    function handleCancel() {
        setIsEditing(false);
    }

    if (is_del) {
        return <div></div>;
    }
    //
    return (
        <div className="AboutRowItemEdit">
            <div className="AboutRowItemEdit_item">
                <AboutRowItem
                    Icon={Icon}
                    title={title}
                    permission={permission}
                    is_editing={is_editing}
                    handleChoosePermission={handleChoosePermission}
                    toggleEdit={toggleEdit}
                />
            </div>

            {is_editing && (
                <div className="PfAbout_edit">
                    <ComponentEdit
                        item_obj={item_obj}
                        handleCancel={handleCancel}
                        handleSave={handleSave}
                    />
                </div>
            )}
        </div>
    );
}

export default AboutRowItemEdit;
