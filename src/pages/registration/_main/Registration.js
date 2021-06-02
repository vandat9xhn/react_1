import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, FastField } from 'formik';
//
import { SignupRequest } from '../../../api/api_django_no_token/signup/Signup';
import makeFormData from '../../../_some_function/makeFormData';
//
import ButtonRipple from '../../../component/button/button_ripple/ButtonRipple';
import BlurFetchingDiv from '../../../component/some_div/fetching/BlurFetchingDiv';
import IconDiv from '../../../component/some_div/icon_div/IconDiv';
import IconsAction from '../../../_icons_svg/icons_action/IconsAction';
import FetchingDiv from '../../../component/some_div/fetching/FetchingDiv';
//
import {
    fields,
    initialValues,
    validationSchema,
} from '../_default/DefaultResgitration';
import InputText from '../../../component/input/input_text/InputText';
import InputPassword from '../../../component/input/input_password/InputPassword';
//
import './Registration.scss';

//
Registration.propTypes = {};

//
function Registration(props) {
    //
    const [submitting, setSubmitting] = useState(false);
    const [username_existed, setUserExisted] = useState(false);
    const [email_existed, setEmailExisted] = useState(false);

    //
    useEffect(() => {
        document.title = 'Registration';
    }, []);

    // submit
    async function onSubmit(values) {
        const { username, password, first_name, last_name, email } = values;
        window.scroll(0, 0);
        setSubmitting(true);
        // make form data
        const formData = makeFormData({
            username: username,
            password: password,
            email: email,
            first_name: first_name,
            last_name: last_name,
        });
        //
        try {
            const res = await SignupRequest(formData);
            const data = res.data;
            //
            if (data == 'username_existed') {
                setUserExisted(true);
                setSubmitting(false);
                //
            } else if (data == 'email_existed') {
                setEmailExisted(true);
                setSubmitting(false);
                //
            } else {
                sessionStorage.new_member = 1;
                setDataUser({
                    id: data.user_id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    picture: data.picture,
                });
            }
            //
        } catch (e) {
            console.log(e);
            alert('Something was wrong');
            setSubmitting(false);
        }
    }

    // close more error
    function closeMoreError() {
        username_existed && setUserExisted(false);
        email_existed && setEmailExisted(false);
    }

    // 
    if (localStorage.is_login == 1) {
        return <Redirect to="/home" />;
    }
    //
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    // console.log(actions);
                    onSubmit(values);
                }}
            >
                {(props) => (
                    <Form
                        autoComplete="off"
                        className="Registration_form App_Form brs-5px App_box_shadow"
                        onClick={closeMoreError}
                    >
                        <div className="App_title">Sign up</div>
                        <hr className="App_hr-bg" />

                        {/* error */}
                        <div
                            className={`Registration_error text-red ${
                                username_existed || email_existed
                                    ? ''
                                    : 'display-none'
                            }`}
                        >
                            <IconDiv Icon={IconsAction} x={400} y={400}>
                                {username_existed ? 'Username' : 'Email'} was existed
                            </IconDiv>
                        </div>

                        {/* fields */}
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
                        )
                        
                        <div className="App_submit display-flex-center">
                            <ButtonRipple
                                type="submit"
                                title="Sign up"
                                disabled={submitting}
                            >
                                Sign up
                            </ButtonRipple>
                        </div>
                    </Form>
                )}
            </Formik>

            {/* fetching div */}
            <BlurFetchingDiv
                FetchingComponent={FetchingDiv}
                open_fetching={submitting}
            />
        </div>
    );
}

export default Registration;
