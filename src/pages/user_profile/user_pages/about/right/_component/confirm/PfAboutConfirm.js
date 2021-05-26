import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import PermissionDiv from '../../../../../../../component/some_div/permission_div/PermissionDiv';
//
import './PfAboutConfirm.scss';

//
PfAboutConfirm.propTypes = {};

//
function PfAboutConfirm({ permission, handleCancel, handleSave }) {
    const { openScreenPermission } = useContext(context_api);

    //
    const [cur_permission, setCurPermission] = useState(permission);

    //
    function onChangePermission() {
        openScreenPermission(cur_permission, (new_permission) =>
            setCurPermission(new_permission)
        );
    }

    //
    function onSave() {
        handleSave(cur_permission);
    }

    //
    return (
        <div>
            <div className="display-flex align-items-center space-between">
                <div onClick={onChangePermission}>
                    <PermissionDiv
                        permission={cur_permission}
                        show_title={true}
                    />
                </div>

                <div>
                    <div className="display-flex align-items-center">
                        <button
                            className="PfAboutConfirm_right_btn bg-ccc label-field hv-btn act-scale-sm"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                        <button
                            className="PfAboutConfirm_right_btn bg-blue label-field text-white hv-btn act-scale-sm"
                            onClick={onSave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PfAboutConfirm;
