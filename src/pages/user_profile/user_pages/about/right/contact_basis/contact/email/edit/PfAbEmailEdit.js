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
        item_obj,

        handleSave,
        handleCancel,
    } = props;

    const { email, permission } = item_obj;

    //
    const [email_state, setEmailState] = useState({
        cur_email: email,
        cur_pass: '',
        is_error: false,
    });

    const { cur_email, cur_pass, is_error } = email_state;

    //
    function handleChange(key, event) {
        setEmailState({
            ...email_state,
            [key]: event.target.value,
            is_error: false,
        });
    }

    //
    function handleChangeEmail(e) {
        handleChange('cur_email', e);
    }

    //
    function handleChangePass(e) {
        handleChange('cur_pass', e);
    }

    //
    function onSave(new_permission) {
        if (/^[a-zA-Z0-9]{4,}@[a-z]{2,10}\.[a-z]{2,10}$/.test(cur_email)) {
            handleSave({
                email: cur_email,
                password: cur_pass,
                permission: new_permission,
            });
        } else {
            setEmailState({
                ...email_state,
                is_error: true,
            });
        }
    }

    //
    return (
        <div className="PfAbEmailEdit">
            <div className={is_error ? '' : 'display-none'}>
                <div className="text-red">
                    Your email does not look like a real email!
                </div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="email"
                        value={cur_email}
                        type="email"
                        placeholder="Email"
                        handleChange={handleChangeEmail}
                    />
                </div>

                <div className="PfAbout_input">
                    <InputNotValidPass
                        name="password"
                        password={cur_pass}
                        placeholder="Confirm Password"
                        handleChange={handleChangePass}
                    />
                </div>
            </div>

            <div>
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
