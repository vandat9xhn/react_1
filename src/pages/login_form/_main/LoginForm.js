import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { LoginRequest } from '../../../api/api_django_no_token/login_logout/LoginLogout';
//
import { useScreenFetching } from '../../../_custom_hooks/UseScreenFetching';
//
import makeFormData from '../../../_some_function/makeFormData';
//
import ButtonRipple from '../../../component/button/button_ripple/ButtonRipple';
import IconDiv from '../../../component/some_div/icon_div/IconDiv';
import IconsAction from '../../../_icons_svg/icons_action/IconsAction';
import IconFav from '../../../_icons_svg/_icon_fav/IconFav';
import InputNotValid from '../../../component/input/input_not_valid/InputNotValid';
import InputNotValidPass from '../../../component/input/input_not_valid_pass/InputNotValidPass';
//
import './LoginForm.scss';
//
import LoginFetching from '../logging/LoginFetching';

//
function LoginForm() {
    //
    const { user, setDataUser } = useContext(context_api);

    //
    const [login_state, setLoginState] = useState({
        username: '',
        password: '',
        type_pass: 'password',
        account_wrong: false,
    });

    const { username, password, type_pass, account_wrong } = login_state;

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        document.title = 'Login';
    }, []);

    /* ----------------------- FORM --------------------------- */

    //
    function handleChange(e) {
        setLoginState({
            ...login_state,
            [e.target.name]: e.target.value,
        });
    }

    //
    function toggleType() {
        setLoginState({
            ...login_state,
            type_pass: type_pass == 'password' ? 'text' : 'password',
        });
    }

    //
    async function handleLogin(e) {
        e.preventDefault();

        setLoginState((login_state) => ({
            ...login_state,
            account_wrong: false,
        }));

        const formData = makeFormData({
            username: username,
            password: password,
        });

        const res = await handleScreenFetching(
            () => LoginRequest(formData),
            LoginFetching
        );

        if (res.data == 'wrong') {
            setLoginState((login_state) => ({
                ...login_state,
                account_wrong: true,
            }));
        } else {
            const data = res.data;
            const { access, life_time, ...user_data } = data;
            //
            localStorage.access_token = access;
            localStorage.life_time = life_time;
            localStorage.time_set = new Date().getTime();
            setDataUser(user_data);
        }
    }

    //
    if (user.id) {
        return <Redirect to={sessionStorage.url_before_login || '/home'} />;
    }
    //
    return (
        <div className="LoginForm">
            <div className="LoginForm_contain brs-5px">
                <div className="LoginForm_row display-flex">
                    <div className="LoginForm_col-left">
                        <div className="LoginForm_col-info">
                            <IconFav size_icon="6rem" />
                            <div>This web was built by ReactJs and Django</div>
                        </div>
                    </div>

                    <div className="LoginForm_col-right">
                        <form
                            className="LoginForm_form App_Form brs-5px App_box_shadow"
                            autoComplete="off"
                            onSubmit={handleLogin}
                        >
                            <div className="App_title">Login</div>
                            <hr className="App_hr-bg" />

                            {/* error */}
                            <div
                                className={`LoginForm_error ${
                                    account_wrong ? '' : 'display-none'
                                }`}
                            >
                                <IconDiv Icon={IconsAction} x={400} y={400}>
                                    username or password was wrong
                                </IconDiv>
                            </div>

                            {/* username */}
                            <div className="LoginForm_input">
                                <InputNotValid
                                    name="username"
                                    type="text"
                                    placeholder="username"
                                    max_length={15}
                                    //
                                    value={username}
                                    handleChange={handleChange}
                                />
                            </div>

                            {/* password */}
                            <div className="LoginForm_input">
                                <InputNotValidPass
                                    name="password"
                                    type={type_pass}
                                    placeholder="password"
                                    max_length={15}
                                    //
                                    password={password}
                                    handleChange={handleChange}
                                    toggleType={toggleType}
                                />
                            </div>

                            {/* submit */}
                            <div className="App_submit display-flex-center">
                                <ButtonRipple type="submit" title="Login">
                                    Login
                                </ButtonRipple>
                            </div>

                            <div>Do you have a account?</div>
                            <br />

                            {/* sign up */}
                            <div className="App_submit display-flex-center">
                                <a href="/registration-form">
                                    <div title="Sign up">Sign up now</div>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
