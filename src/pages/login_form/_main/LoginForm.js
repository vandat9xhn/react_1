import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
//
import { context_api } from "../../../_context/ContextAPI";
//
import { LoginRequest } from "../../../api/api_django_no_token/login_logout/LoginLogout";
//
import { useScreenFetching } from "../../../_hooks/UseScreenFetching";
//
import makeFormData from "../../../_some_function/makeFormData";
//
import IconsAction from "../../../_icons_svg/icons_action/IconsAction";
import IconFav from "../../../_icons_svg/_icon_fav/IconFav";
//
import IconDiv from "../../../component/some_div/icon_div/IconDiv";
import ButtonRipple from "../../../component/button/button_ripple/ButtonRipple";
import InputNotValid from "../../../component/input/input_not_valid/InputNotValid";
import InputNotValidPass from "../../../component/input/input_not_valid_pass/InputNotValidPass";
//
import LoginFetching from "../logging/LoginFetching";
//
import "./LoginForm.scss";

//
function LoginForm() {
    //
    const { user, setDataUser } = useContext(context_api);

    //
    const [login_state, setLoginState] = useState({
        username: "",
        password: "",
        type_pass: "password",
        account_wrong: false,
    });

    const { username, password, type_pass, account_wrong } = login_state;

    //
    const ref_checked = useRef(null);

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        document.title = "Login";
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
            type_pass: type_pass == "password" ? "text" : "password",
        });
    }

    //
    function toggleSaved() {
        ref_checked.current.checked = !ref_checked.current.checked;
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
            saved: ref_checked.current.checked,
        });

        const res = await handleScreenFetching(
            () => LoginRequest(formData),
            <LoginFetching is_fetching={true} />
        );

        if (res.data == "Wrong") {
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

    // //
    // if (user.id) {
    //     return <Redirect to={sessionStorage.url_before_login || '/home'} />;
    // }
    //
    return (
        <div className="LoginForm">
            <div className="LoginForm_contain padding-8px">
                <div className="LoginForm_row display-flex flex-wrap">
                    <div className="LoginForm_col-left display-flex-center">
                        <div className="LoginForm_col-info text-align-center">
                            <IconFav size_icon="6rem" />

                            <div>This web was built by ReactJs and Django</div>
                        </div>
                    </div>

                    <div className="LoginForm_col-right display-flex justify-content-center">
                        <form
                            className="LoginForm_form App_Form padding-8px brs-8px-pc bg-react"
                            autoComplete="off"
                            onSubmit={handleLogin}
                        >
                            <h2 className="App_title margin-0">Login</h2>
                            <hr className="hr-bg" />

                            <div
                                className={`LoginForm_error ${
                                    account_wrong ? "" : "display-none"
                                }`}
                            >
                                <IconDiv Icon={IconsAction} x={400} y={400}>
                                    username or password was wrong
                                </IconDiv>
                            </div>

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

                            <div
                                className="display-flex align-items-center cursor-pointer margin-bottom-5px"
                                onClick={toggleSaved}
                            >
                                <input
                                    ref={ref_checked}
                                    className="margin-right-5px pointer-events-none"
                                    type="checkbox"
                                />

                                <div className="text-555 font-14px">Save account</div>
                            </div>

                            <div className="LoginForm_login App_submit display-flex-center">
                                <ButtonRipple type="submit" title="Login">
                                    Login
                                </ButtonRipple>
                            </div>

                            <div>
                                <Link to="#">Forgot password?</Link>
                            </div>

                            <div className="LoginForm_or">
                                <div className="LoginForm_or_row display-flex-center">
                                    <div></div>

                                    <div>or</div>

                                    <div></div>
                                </div>
                            </div>

                            <Link
                                className="text-light"
                                to="/registration-form"
                            >
                                <div className="LoginForm_sign_up display-flex-center">
                                    <ButtonRipple type="text" title="sign up">
                                        <div>Sign up now</div>
                                    </ButtonRipple>
                                </div>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
