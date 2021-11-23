import React, { useContext, useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { SignupRequest } from '../../../../api/api_django_no_token/signup/Signup';
//
import { useScreenFetching } from '../../../../_hooks/UseScreenFetching';
import { useInputDate } from '../../../../_hooks/useInputDate';
//
import makeFormData from '../../../../_some_function/makeFormData';
import { handleScrollSmooth } from '../../../../_some_function/handleScrollSmooth';
//
import IconsAction from '../../../../_icons_svg/icons_action/IconsAction';
//
import IconDiv from '../../../../component/some_div/icon_div/IconDiv';
import FetchingDiv from '../../../../component/some_div/fetching/FetchingDiv';
//
import {
    initialValues,
    register_step_count,
    register_step_obj,
    validationSchema,
} from '../../../../_initial/register/RegistrationInitial';
//
import './RegisterStepCommon.scss';
//
import RegisterBirth from '../birth/RegisterBirth';
import RegisterName from '../name/RegisterName';
import RegisterEmail from '../email/RegisterEmail';
import RegisterAccount from '../account/RegisterAccount';
import RegisterNexPrev from '../next_prev/RegisterNexPrev';
//
import white_person from '../../../../../image/white_person.svg';
import './RegisterStep.scss';

//
RegisterStep.propTypes = {};

//
function RegisterStep() {
    //
    const { setDataUser } = useContext(context_api);

    //
    const [username_existed, setUserExisted] = useState(false);
    const [email_existed, setEmailExisted] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [c_step, setCStep] = useState(0);

    //
    const handleScreenFetching = useScreenFetching();

    const {
        day,
        month,
        year,

        handleChangeDay,
        handleChangeMonth,
        handleChangeYear,
    } = useInputDate({});

    //
    useEffect(() => {
        document.title = 'Registration';
        document.documentElement.setAttribute('data-theme', 'light');

        return () => {
            localStorage.light_mode != 1 &&
                document.documentElement.setAttribute('data-theme', 'dark');
        };
    }, []);

    /* -------- COMMON -------- */

    //
    function handleFormValid(form_props) {
        const field_arr = register_step_obj[c_step].fields;

        for (const field of field_arr) {
            if (form_props.errors[field] || !form_props.touched[field]) {
                return false;
            }
        }

        return true;
    }

    //
    function handleValidBirth() {
        const birth = new Date(year, month, day);
        const is_invalid = birth > new Date() || birth <= new Date(1960);

        setInvalid(is_invalid);
        return !is_invalid;
    }

    //
    function handleOtherValid() {
        if (register_step_obj[c_step].part == 'birth') {
            return handleValidBirth();
        }
    }

    /* ----------------- */

    //
    function handleNextPrevStep(form_props, is_next = true) {
        const new_c_step = c_step + (is_next ? 1 : -1);

        if (new_c_step < 0 || new_c_step >= register_step_count) {
            return;
        }

        if (!is_next) {
            setCStep(c_step - 1);

            return;
        }

        const is_valid = register_step_obj[c_step].form_valid
            ? handleFormValid(form_props)
            : handleOtherValid();

        is_valid && setCStep(c_step + 1);
    }

    //
    async function onSubmit(values) {
        handleScrollSmooth(() => {
            window.scroll(0, 0);
        });

        const { username, password, email } = values;

        const first_name = values.first_name.trim();
        const last_name = values.last_name.trim();

        const formData = makeFormData({
            username: username,
            password: password,
            email: email,
            first_name: first_name,
            last_name: last_name,
            day: day,
            month: month,
            year: year,
        });

        try {
            const res = await handleScreenFetching(
                () => SignupRequest(formData),
                <FetchingDiv is_fetching={true} />
            );
            const data = res.data;

            if (data == 'username_existed') {
                setUserExisted(true);
            } else if (data == 'email_existed') {
                setEmailExisted(true);
            } else {
                sessionStorage.new_member = first_name + ' ' + last_name;

                setDataUser({
                    id: data.id,
                    first_name: first_name,
                    last_name: last_name,
                    picture: white_person,
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    //
    function closeMoreError() {
        username_existed && setUserExisted(false);
        email_existed && setEmailExisted(false);
    }

    //
    return (
        <div>
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        onSubmit(values);
                    }}
                >
                    {(form_props) => (
                        <Form
                            autoComplete="off"
                            className="RegistrationStep_form App_Form brs-8px-pc padding-8px"
                            onClick={closeMoreError}
                        >
                            <div>
                                <h2 className="App_title margin-0">Sign up</h2>{' '}
                                <hr className="hr-bg" />
                                <div
                                    className={`RegistrationStep_error text-red ${
                                        username_existed || email_existed
                                            ? ''
                                            : 'display-none'
                                    }`}
                                >
                                    <IconDiv Icon={IconsAction} x={400} y={400}>
                                        {username_existed
                                            ? 'Username'
                                            : 'Email'}{' '}
                                        was existed
                                    </IconDiv>
                                </div>
                            </div>

                            <div>
                                <div
                                    className="RegistrationStep_row display-flex"
                                    style={{
                                        transform: `translateX(${
                                            (-100 * c_step) / 4
                                        }%)`,
                                    }}
                                >
                                    <div className="RegistrationStep_part">
                                        <div
                                            className={`${
                                                c_step == 0
                                                    ? ''
                                                    : 'display-none'
                                            }`}
                                        >
                                            <RegisterName />
                                        </div>
                                    </div>

                                    <div className="RegistrationStep_part">
                                        <div
                                            className={`${
                                                c_step == 1
                                                    ? ''
                                                    : 'display-none'
                                            }`}
                                        >
                                            <RegisterBirth
                                                day={day}
                                                month={month}
                                                year={year}
                                                //
                                                min_year={1960}
                                                max_year={2021}
                                                //
                                                invalid={invalid}
                                                title_invalid="Birth must be from 1960 to now"
                                                //
                                                handleChangeDay={
                                                    handleChangeDay
                                                }
                                                handleChangeMonth={
                                                    handleChangeMonth
                                                }
                                                handleChangeYear={
                                                    handleChangeYear
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="RegistrationStep_part">
                                        <div
                                            className={`${
                                                c_step == 2
                                                    ? ''
                                                    : 'display-none'
                                            }`}
                                        >
                                            <RegisterEmail />
                                        </div>
                                    </div>

                                    <div className="RegistrationStep_part">
                                        <div
                                            className={`${
                                                c_step == 3
                                                    ? ''
                                                    : 'display-none'
                                            }`}
                                        >
                                            <RegisterAccount />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />

                            <RegisterNexPrev
                                c_step={c_step}
                                form_props={form_props}
                                handleNextPrevStep={handleNextPrevStep}
                            />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default RegisterStep;
