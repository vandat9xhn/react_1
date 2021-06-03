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
    label: PropTypes.string,

    handle_API_U: PropTypes.func,
    ComponentEdit: PropTypes.func,
    handleUpdateItemObj: PropTypes.func,
};

AboutRowItemEdit.defaultProps = {
    label: '',
};

//
function AboutRowItemEdit(props) {
    //
    const {
        item_obj,
        Icon,
        label,

        ComponentEdit,
        handle_API_U,
        handleUpdateItemObj,
    } = props;

    const { permission, title } = item_obj;

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

    //
    return (
        <div className={`AboutRowItemEdit ${title ? '' : 'display-none'}`}>
            {label && (
                <div>
                    <div className="label-field text-secondary">{label}</div>
                </div>
            )}

            <div>
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
        </div>
    );
}

export default AboutRowItemEdit;
