import React, { useContext, useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { SignupRequest } from '../../../api/api_django_no_token/signup/Signup';
//
import { useScreenFetching } from '../../../_hooks/UseScreenFetching';
import { useInputDate } from '../../../_hooks/useInputDate';
//
import makeFormData from '../../../_some_function/makeFormData';
import { handleScrollSmooth } from '../../../_some_function/handleScrollSmooth';
//
import IconsAction from '../../../_icons_svg/icons_action/IconsAction';
//
import { actionLocationRegister } from '../../../redux/action/action_location';
//
import ButtonRipple from '../../../component/button/button_ripple/ButtonRipple';
import IconDiv from '../../../component/some_div/icon_div/IconDiv';
import FetchingDiv from '../../../component/some_div/fetching/FetchingDiv';
import InputText from '../../../component/input/input_text/InputText';
import InputPassword from '../../../component/input/input_password/InputPassword';
//
import {
    fields,
    initialValues,
    validationSchema,
} from '../_initial/ResgitrationInitial';
//
import InputDate from '../../../component/input/date/_main/InputDate';
//
import white_person from '../../../../image/white_person.svg';
import './Registration.scss';

//
Registration.propTypes = {};

//
function Registration(props) {
    //
    const { user, setDataUser } = useContext(context_api);

    //
    const dispatch = useDispatch();

    //
    const [username_existed, setUserExisted] = useState(false);
    const [email_existed, setEmailExisted] = useState(false);
    const [invalid, setInvalid] = useState(false);

    //
    const ref_register_elm = useRef(null);

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
        dispatch(actionLocationRegister(true));

        return () => {
            dispatch(actionLocationRegister(false));
        };
    }, []);

    useEffect(() => {
        document.title = 'Registration';
        document.documentElement.setAttribute('data-theme', 'light');

        return () => {
            localStorage.light_mode != 1 &&
                document.documentElement.setAttribute('data-theme', 'dark');
        };
    }, []);

    //
    function handleErrorBeforeSubmit(e, form_props) {
        if (form_props.dirty) {
            const err_keys = Object.keys(form_props.errors);

            if (err_keys.length) {
                handleScrollSmooth(() => {
                    ref_register_elm.current
                        .querySelector(`[name=${err_keys[0]}]`)
                        .scrollIntoView(false);
                });
            }
        }

        //
        const birth = new Date(year, month, day);

        if (birth > new Date() || birth <= new Date(1960)) {
            setInvalid(true);

            e.preventDefault();
        }
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
                FetchingDiv
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
        invalid && setInvalid(false);
    }

    //
    // if (user.id) {
    //     return <Redirect to="/home" />;
    // }

    //
    return (
        <div ref={ref_register_elm}>
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
                        className="Registration_form App_Form brs-5px-md padding-8px"
                        onClick={closeMoreError}
                    >
                        <h2 className="App_title margin-0">Sign up</h2>{' '}
                        <hr className="App_hr-bg" />
                        <div
                            className={`Registration_error text-red ${
                                username_existed || email_existed
                                    ? ''
                                    : 'display-none'
                            }`}
                        >
                            <IconDiv Icon={IconsAction} x={400} y={400}>
                                {username_existed ? 'Username' : 'Email'} was
                                existed
                            </IconDiv>
                        </div>
                        <div>
                            {fields.map((item, index) => (
                                <div
                                    key={`Registration_${index}`}
                                    className="Registration_input"
                                >
                                    <FastField
                                        name={item.name}
                                        component={
                                            item.name.startsWith('password')
                                                ? InputPassword
                                                : InputText
                                        }
                                        label={item.label}
                                        placeholder={`${item.label}...`}
                                        help={item.help}
                                        max_length={item.max_length}
                                    />
                                </div>
                            ))}

                            <div>
                                <div>
                                    <div className="label-field">Birth day</div>
                                </div>

                                <div>
                                    <InputDate
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
                                        handleChangeDay={handleChangeDay}
                                        handleChangeMonth={handleChangeMonth}
                                        handleChangeYear={handleChangeYear}
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="App_submit display-flex-center">
                            <ButtonRipple
                                type="submit"
                                onClick={(e) =>
                                    handleErrorBeforeSubmit(e, form_props)
                                }
                            >
                                Sign up
                            </ButtonRipple>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Registration;
