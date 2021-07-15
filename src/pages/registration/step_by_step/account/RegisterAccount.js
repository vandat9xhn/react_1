import React from 'react';
import { FastField } from 'formik';
import PropTypes from 'prop-types';
//
import InputText from '../../../../component/input/input_text/InputText';
import InputPassword from '../../../../component/input/input_password/InputPassword';

//
RegisterAccount.propTypes = {};

//
function RegisterAccount() {
    //
    return (
        <div>
            <div>
                <h2 className="register-part-title">Account to login</h2>

                <div>
                    <div>
                        Username and password has 5-15 letters, numbers and no
                        spaces. Password has at least a upper letter
                    </div>
                </div>

                <div>
                    <div className="register-part-item">
                        <FastField
                            name="username"
                            component={InputText}
                            label=""
                            placeholder="username"
                            max_length={15}
                        />
                    </div>

                    <div className="register-part-item">
                        <FastField
                            name="password"
                            component={InputPassword}
                            label=""
                            placeholder="password"
                            max_length={15}
                        />
                    </div>

                    <div className="register-part-item">
                        <FastField
                            name="password_confirm"
                            component={InputPassword}
                            label=""
                            placeholder="password confirm"
                            max_length={15}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterAccount;
