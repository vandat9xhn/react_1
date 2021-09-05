import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { openScreenPermission } from '../../../../../../../component/_screen/type/permission/_main/ScreenPermission';
//
import PermissionDiv from '../../../../../../../component/some_div/permission_div/PermissionDiv';
//
import './PfAboutConfirm.scss';

//
PfAboutConfirm.propTypes = {
    permission: PropTypes.number,
    handleCancel: PropTypes.func,
    handleSave: PropTypes.func,
};

//
function PfAboutConfirm({ permission, handleCancel, handleSave }) {
    const { openScreenFloor } = useContext(context_api);

    //
    const [cur_permission, setCurPermission] = useState(permission);

    //
    function onChangePermission() {
        openScreenPermission({
            openScreenFloor: openScreenFloor,
            permission: cur_permission,
            handleChoosePermission: setCurPermission,
        });
    }

    //
    function onSave() {
        handleSave(cur_permission);
    }

    //
    return (
        <div className="PfAboutConfirm">
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
                            className="PfAboutConfirm_right_btn bg-ccc font-500 hv-btn active-scale-sm"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                        <button
                            className="PfAboutConfirm_right_btn bg-blue font-500 text-white hv-btn active-scale-sm"
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
