import React from 'react';
import { FastField } from 'formik';
import PropTypes from 'prop-types';
//
import InputText from '../../../../component/input/input_text/InputText';

//
RegisterEmail.propTypes = {};

//
function RegisterEmail() {
    return (
        <div>
            <div>
                <h2 className="register-part-title">Your email</h2>

                <div>
                    <div>Email must like "**@gmail.com"</div>
                </div>

                <div className="register-part-item">
                    <FastField
                        name="email"
                        component={InputText}
                        label=""
                        placeholder="email"
                    />
                </div>
            </div>
        </div>
    );
}

export default RegisterEmail;
