import React from 'react';
import { FastField } from 'formik';
import PropTypes from 'prop-types';
//
import InputText from '../../../../component/input/input_text/InputText';

//
RegisterName.propTypes = {};

//
function RegisterName() {
    //
    return (
        <div>
            <div>
                <h2 className="register-part-title">What is your name?</h2>

                <div>
                    <div>
                        Last name and first name has 1-20 letters, spaces and
                        start with a letter
                    </div>
                </div>

                <div>
                    <div className="register-part-item">
                        <FastField
                            name="first_name"
                            component={InputText}
                            label=""
                            placeholder="first name"
                            max_length={20}
                        />
                    </div>

                    <div className="register-part-item">
                        <FastField
                            name="last_name"
                            component={InputText}
                            label=""
                            placeholder="last name"
                            max_length={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterName;
