import React from 'react';
import PropTypes from 'prop-types';
//
import ButtonRipple from '../../../../component/button/button_ripple/ButtonRipple';
// 
import { register_step_count } from '../../../../_initial/register/RegistrationInitial';
//
import './RegisterNexPrev.scss';

//
RegisterNexPrev.propTypes = {};

//
function RegisterNexPrev({ c_step, form_props, handleNextPrevStep }) {
    //
    return (
        <div>
            <div className="display-flex">
                <div
                    className={`RegisterNexPrev_btn btn btn-active w-100per text-align-center text-white ${
                        c_step == 0 ? 'display-none' : ''
                    }`}
                    onClick={() => handleNextPrevStep(form_props, false)}
                >
                    <div className="padding-8px bg-blue brs-5px">
                        <strong>Prev</strong>
                    </div>
                </div>

                {c_step == register_step_count - 1 ? (
                    <div className="RegisterNexPrev_btn App_submit w-100per">
                        <ButtonRipple type="submit">Sign up</ButtonRipple>
                    </div>
                ) : (
                    <div
                        className="RegisterNexPrev_btn btn btn-active w-100per text-align-center text-white"
                        onClick={() => handleNextPrevStep(form_props)}
                    >
                        <div className="padding-8px bg-blue brs-5px">
                            <strong>Next</strong>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RegisterNexPrev;
