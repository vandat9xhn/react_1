import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { SignupRequest } from '../../../api/api_django_no_token/signup/Signup';
//
import makeFormData from '../../../_some_function/makeFormData';
//
import IconsAction from '../../../_icons_svg/icons_action/IconsAction';
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
} from '../_default/DefaultResgitration';
//
import './Registration.scss';
import { useScreenFetching } from '../../../_custom_hooks/UseScreenFetching';
import { actionLocation } from '../../../redux/action/action_location';

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

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        document.title = 'Registration';

        dispatch(actionLocation(true));

        return () => {
            dispatch(actionLocation(false));
        };
    }, []);

    //
    async function onSubmit(values) {
        window.scroll(0, 0);

        const { username, password, first_name, last_name, email } = values;

        const formData = makeFormData({
            username: username,
            password: password,
            email: email,
            first_name: first_name,
            last_name: last_name,
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
                sessionStorage.new_member = 1;

                setDataUser({
                    id: data.id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    picture: data.picture,
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

    if (user.id) {
        return <Redirect to="/home" />;
    }

    //
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    onSubmit(values);
                }}
            >
                {(props) => (
                    <Form
                        autoComplete="off"
                        className="Registration_form App_Form brs-5px App_box_shadow"
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
                        <div className="App_submit display-flex-center">
                            <ButtonRipple type="submit">Sign up</ButtonRipple>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Registration;
