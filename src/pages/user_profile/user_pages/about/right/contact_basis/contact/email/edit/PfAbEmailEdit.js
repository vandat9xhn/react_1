import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import InputNotValid from '../../../../../../../../../component/input/input_not_valid/InputNotValid';
import InputNotValidPass from '../../../../../../../../../component/input/input_not_valid_pass/InputNotValidPass';
// 
import PfAboutConfirm from '../../../../_component/confirm/PfAboutConfirm';
// 
import './PfAbEmailEdit.scss';

//
PfAbEmailEdit.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    permission: PropTypes.number,

    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAbEmailEdit(props) {
    const {
        email,
        permission,

        handleSave,
        handleCancel,
    } = props;

    // 
    const [cur_email, setCurEmail] = useState(email)
    const [cur_pass, setCurPass] = useState('')

    // 
    function handleChangeEmail(e) {
        setCurEmail(e.target.value)
    }

    // 
    function handleChangePass(e) {
        setCurPass(e.target.value)
    }

    // 
    function onSave(new_permission) {
        handleSave(cur_email, cur_pass, new_permission)
    }

    //
    return (
        <div className="PfAbEmailEdit">
            <div className="PfAbEmailEdit_input">
                <InputNotValid
                    name="email"
                    value={cur_email}
                    type="email"
                    placeholder="Email"
                    handleChange={handleChangeEmail}
                />
            </div>

            <div className="PfAbEmailEdit_input">
                <InputNotValidPass
                    name="password"
                    password={cur_pass}
                    placeholder="Confirm Password"
                    handleChange={handleChangePass}
                />
            </div>

            <div className="PfAbEmailEdit_confirm">
                <PfAboutConfirm
                    permission={permission}
                    handleSave={onSave}
                    handleCancel={handleCancel}
                />
            </div>
        </div>
    );
}

export default PfAbEmailEdit;
