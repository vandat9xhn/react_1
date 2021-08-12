import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsEye from '../../../_icons_svg/icons_eye/IconsEye';
import IconsAction from '../../../_icons_svg/icons_action/IconsAction';
//
import IconDiv from '../../some_div/icon_div/IconDiv';
//
import './InputPassword.scss';

//
InputPassword.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object,
    label: PropTypes.string,
    max_length: PropTypes.number,
    placeholder: PropTypes.string,
};

InputPassword.defaultProps = {
    max_length: 15,
};

//
function InputPassword({ field, form, label, placeholder, max_length, help }) {
    //
    const { name } = field;
    const { touched, errors } = form;
    const showError = touched[name] && errors[name];

    //
    const [type_password, setType] = useState(true);

    //
    const ChangeTypePassword = () => {
        setType(!type_password);
    };

    //
    return (
        <div>
            <div>
                <label className="label-field">{label}</label>
            </div>

            <div className="InputPassword_password pos-rel">
                <input
                    className={`InputPassword_input w-100per padding-8px brs-5px ${
                        touched[name] && !errors[name]
                            ? 'InputPassword_valid'
                            : ''
                    } ${
                        touched[name] && !!errors[name]
                            ? 'InputPassword_invalid'
                            : ''
                    }`}
                    {...field}
                    maxLength={max_length}
                    placeholder={placeholder}
                    type={type_password ? 'password' : 'text'}
                />

                <div className="InputPassword__eye">
                    <div onClick={ChangeTypePassword}>
                        <IconsEye x={200} y={200} close_eye={type_password} />
                    </div>
                </div>
            </div>

            {help && (
                <div className="help-text">
                    <IconDiv Icon={IconsAction} x={600}>
                        * {help}
                    </IconDiv>
                </div>
            )}

            {showError && (
                <div className="error-field">
                    <IconDiv Icon={IconsAction} x={400} y={400}>
                        {errors[name]}
                    </IconDiv>
                </div>
            )}
        </div>
    );
}

export default InputPassword;
