import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { detectPasswordIsOk } from '../../../../../../../../_some_function/detectPasswordIsOk';
import { detectPhoneIsOk } from '../../../../../../../../_some_function/detectPhoneIsOk';
//
import { useScreenFetching } from '../../../../../../../../_hooks/UseScreenFetching';
//
import FsPPrPhoneSteps from '../steps/_main/FsPPrPhoneSteps';
import FsPPrPhoneConfirmPass from '../confirm_password/FsPPrPhoneConfirmPass';
import FsPPrPhoneSecretKey from '../secret_key/_main/FsPPrPhoneSecretKey';
import FsPProfilePhoneNew from '../new_phone/_main/FsPProfilePhoneNew';
import FsPPrBtnConfirm from '../../_component/btn_confirm/FsPPrBtnConfirm';
//
import './FsPProfilePhone.scss';

//
FsPProfilePhone.propTypes = {};

//
function FsPProfilePhone({ phone, handleDone }) {
    //
    const [state_obj, setStateObj] = useState({
        password: '',
        secret_key: '',
        new_phone: '',

        pass_error: '',
        key_error: '',
        phone_error: '',

        c_step: 0,
        step_error: -1,
        time_start: 0,
    });

    const {
        password,
        secret_key,
        new_phone,

        pass_error,
        key_error,
        phone_error,

        c_step,
        step_error,
        time_start,
    } = state_obj;

    //
    const handleScreenFetching = useScreenFetching();

    // -------

    //
    function handleChange({ key, value, other_state = {} }) {
        setStateObj({
            ...state_obj,
            [key]: value,
            ...other_state,
        });
    }

    // -----

    //
    function changePassword(e) {
        handleChange({
            key: 'password',
            value: e.target.value,
            other_state: {
                pass_error: '',
            },
        });
    }

    //
    async function onConfirmPassword() {
        const is_pass_ok = await handleScreenFetching(() =>
            detectPasswordIsOk(password)
        );

        if (is_pass_ok) {
            setStateObj({
                ...state_obj,
                c_step: c_step + 1,
                step_error: -1,
                time_start: new Date().getTime(),
            });
        } else {
            setStateObj({
                ...state_obj,
                pass_error: 'Mật khẩu không chính xác!',
                step_error: c_step,
            });
        }
    }

    // -------

    //
    function changeSecretKey(e) {
        handleChange({
            key: 'secret_key',
            value: e.target.value,
            other_state: {
                key_error: '',
            },
        });
    }

    //
    function sendKeyAgain() {
        setStateObj({
            ...state_obj,
            time_start: new Date().getTime(),
        });
    }

    //
    async function onConfirmKey() {
        if (new Date().getTime() - time_start >= 60000) {
            setStateObj({
                ...state_obj,
                key_error: 'Mã xác nhận đã hết thời gian hiệu lực!',
                step_error: c_step,
            });

            return;
        }

        const is_pass_ok = await handleScreenFetching(() =>
            detectPasswordIsOk(secret_key)
        );

        if (is_pass_ok) {
            setStateObj({
                ...state_obj,
                c_step: c_step + 1,
                step_error: -1,
                time_left: 0,
            });
        } else {
            setStateObj({
                ...state_obj,
                key_error: 'Mã xác nhận không chính xác!',
                step_error: c_step,
            });
        }
    }

    // -------

    //
    function changePhone(e) {
        handleChange({
            key: 'new_phone',
            value: e.target.value,
            other_state: {
                phone_error: '',
            },
        });
    }

    //
    async function onConfirmPhone() {
        const is_phone_ok = detectPhoneIsOk(new_phone);

        if (is_phone_ok) {
            setStateObj({
                ...state_obj,
                c_step: c_step + 1,
                step_error: -1,
            });
        } else {
            setStateObj({
                ...state_obj,
                phone_error: 'Số điện không chính xác!',
                step_error: c_step,
            });
        }
    }

    // -------

    function onDone() {
        handleDone({ new_phone: new_phone, confirm_password: password });
    }

    //
    return (
        <div className="FsPProfilePhone">
            <div className="margin-bottom-20px">
                <FsPPrPhoneSteps c_step={c_step} step_error={step_error} />
            </div>

            <div>
                <div className="display-flex align-items-center margin-bottom-20px padding-y-15px">
                    <div className="fs-profile-input-label">Số Điện Thoại</div>

                    <div>{c_step == 3 ? new_phone : phone}</div>
                </div>

                <div>
                    {c_step == 0 ? (
                        <FsPPrPhoneConfirmPass
                            password={password}
                            pass_error={pass_error}
                            changePassword={changePassword}
                            confirmPassword={onConfirmPassword}
                        />
                    ) : c_step == 1 ? (
                        <FsPPrPhoneSecretKey
                            secret_key={secret_key}
                            time_start={time_start}
                            key_error={key_error}
                            //
                            changeSecretKey={changeSecretKey}
                            sendKeyAgain={sendKeyAgain}
                            confirmKey={onConfirmKey}
                        />
                    ) : c_step == 2 ? (
                        <FsPProfilePhoneNew
                            new_phone={new_phone}
                            phone_error={phone_error}
                            changePhone={changePhone}
                            confirmPhone={onConfirmPhone}
                        />
                    ) : (
                        <div className="display-flex-center">
                            <FsPPrBtnConfirm
                                title="Hoàn thành"
                                handleConfirm={onDone}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FsPProfilePhone;
