import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { detectPasswordIsOk } from '../../../../../../../../_some_function/detectPasswordIsOk';
import { detectNewEmailIsOk } from '../../../../../../../../_some_function/detectNewEmailIsOk';
//
import { useScreenFetching } from '../../../../../../../../_hooks/UseScreenFetching';
// 
import FsPPrEmailConfirmPass from '../confirm_password/FsPPrEmailConfirmPass';
import FsPPrEmailNew from '../new_email/FsPPrEmailNew';
//
import './FsPProfileEmail.scss';

//
FsPProfileEmail.propTypes = {};

//
function FsPProfileEmail({ email, confirmNewEmail, rejectNewEmail }) {
    //
    const [password, setPassword] = useState('');
    const [new_email, setNewEmail] = useState('');

    const [email_error, setEmailError] = useState('');
    const [pass_error, setPassError] = useState('');

    const [confirmed_pass, setConfirmedPass] = useState(false);

    //
    const handleScreenFetching = useScreenFetching();

    // ------

    //
    function changePassword(e) {
        setPassword(e.target.value);
        pass_error && setPassError('');
    }

    //
    function changeNewEmail(e) {
        setNewEmail(e.target.value);
        email_error && setEmailError('');
    }

    //
    async function onConfirmPassword() {
        const is_pass_ok = await handleScreenFetching(() =>
            detectPasswordIsOk(password)
        );

        if (is_pass_ok) {
            setConfirmedPass(true);
        } else {
            setPassError('Mật khẩu không chính xác!');
        }
    }

    //
    async function onConfirmNewEmail() {
        const is_email_ok = await handleScreenFetching(() =>
            detectNewEmailIsOk(new_email)
        );

        if (is_email_ok) {
            confirmNewEmail({
                confirm_password: password,
                new_email: new_email,
            });
        } else {
            setEmailError('Email không hợp lệ!');
        }
    }

    //
    return (
        <div className="FsPProfileEmail">
            <div className="FsPProfileEmail_title display-flex margin-bottom-20px">
                <div className="fs-personal-input-label">Địa Chỉ Hộp Thư</div>

                <div>{email}</div>
            </div>

            <div>
                {!confirmed_pass ? (
                    <FsPPrEmailConfirmPass
                        pass_error={pass_error}
                        password={password}
                        changePassword={changePassword}
                        confirmPassword={onConfirmPassword}
                    />
                ) : (
                    <FsPPrEmailNew
                        email_error={email_error}
                        new_email={new_email}
                        changeNewEmail={changeNewEmail}
                        confirmNewEmail={onConfirmNewEmail}
                        rejectNewEmail={rejectNewEmail}
                    />
                )}
            </div>
        </div>
    );
}

export default FsPProfileEmail;
