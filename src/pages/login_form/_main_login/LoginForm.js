import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//
import { context_api } from '../../../_context/ContextAPI';
import { LoginRequest } from '../../../api/api_django_no_token/login_logout/LoginLogout';
import makeFormData from '../../../_some_function/makeFormData';
//
import ButtonRipple from '../../../component/button/button_ripple/ButtonRipple';
import BlurFetchingDiv from '../../../component/some_div/fetching/BlurFetchingDiv';
import IconDiv from '../../../component/some_div/icon_div/IconDiv';
import IconsAction from '../../../_icons_svg/icons_action/IconsAction';
import FetchingDiv from '../../../component/some_div/fetching/FetchingDiv';
import IconFav from '../../../_icons_svg/_icon_fav/IconFav';
import InputNotValid from '../../../component/input/input_not_valid/InputNotValid';
import InputNotValidPass from '../../../component/input/input_not_valid_pass/InputNotValidPass';
//
import './LoginForm.scss';

//
class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        type_pass: 'password',
        //
        is_logging: false,
        account_wrong: false,
    };

    componentDidMount() {
        document.title = 'Login';
    }

    /* ----------------------- FORM --------------------------- */

    //
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    //
    toggleType = () => {
        this.setState({
            type_pass: this.state.type_pass == 'password' ? 'text' : 'password',
        });
    };

    //
    handleLogin = async (e) => {
        e.preventDefault()
        this.setState({
            is_logging: true,
            account_wrong: false,
        });
        //
        try {
            const { username, password } = this.state;
            const formData = makeFormData({
                username: username,
                password: password,
            });
            const res = await LoginRequest(formData);
            //
            if (res.data == 'wrong') {
                this.setState({
                    account_wrong: true,
                    is_logging: false,
                });
            } else {
                const data = res.data;
                const { access, ...user_data } = data;
                //
                localStorage.access_token = access;
                localStorage.time_set = new Date().getTime();
                this.context.setDataUser(user_data);
            }
        } catch (e) {
            this.setState({
                is_logging: false,
            });
            console.log(e);
        }
    };

    // render
    render() {
        if (this.context.user.id) {
            return <Redirect to={sessionStorage.url_before_login || '/home'} />;
        }

        const {
            is_logging,
            account_wrong,
            username,
            password,
            type_pass,
        } = this.state;

        return (
            <div className="LoginForm">
                <div className="LoginForm_contain brs-5px">
                    <div className="LoginForm_row display-flex">
                        <div className="LoginForm_col-left">
                            <div className="LoginForm_col-info">
                                <IconFav size_icon="6rem" />
                                <div>
                                    This web was built by ReactJs and Django
                                </div>
                            </div>
                        </div>

                        <div className="LoginForm_col-right">
                            <form
                                className="LoginForm_form App_Form brs-5px App_box_shadow"
                                autoComplete="off"
                                onSubmit={this.handleLogin}
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
                                        handleChange={this.handleChange}
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
                                        handleChange={this.handleChange}
                                        //
                                        toggleType={this.toggleType}
                                    />
                                </div>

                                {/* submit */}
                                <div className="App_submit">
                                    <ButtonRipple
                                        type="submit"
                                        title="Login"
                                        disabled={is_logging}
                                    >
                                        Login
                                    </ButtonRipple>
                                </div>

                                <div>Do you have a account?</div>
                                <br />

                                {/* sign up */}
                                <div className="App_submit">
                                    <a href="/registration-form">
                                        <div title="Sign up">Sign up now</div>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <BlurFetchingDiv
                    FetchingComponent={FetchingDiv}
                    open_fetching={is_logging}
                />
            </div>
        );
    }
}

LoginForm.contextType = context_api;

export default LoginForm;
