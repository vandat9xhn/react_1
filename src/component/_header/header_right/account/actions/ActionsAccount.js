import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
//
import { context_api } from '../../../../../_context/ContextAPI';

import { LogoutRequest } from '../../../../../api/api_django_no_token/login_logout/LoginLogout';
//
import IconDiv from '../../../../some_div/icon_div/IconDiv';
import IconsMode from '../../../../../_icons_svg/icons_mode/IconsMode';
import SwitchDiv from '../../../../some_div/switch_div/_main/SwitchDiv';
import ToggleSwitch from '../../../../some_div/switch_div/switch/Switch';
import IconsAccount from '../../../../../_icons_svg/icons_account/IconsAccount';
import PictureName from '../../../../picture_name/pic_name/PictureName';
import IconsFlower from '../../../../../_icons_svg/icons_flower/IconsFlower';
import BlurFetchingDiv from '../../../../some_div/fetching/BlurFetchingDiv';
import CircleLoading from '../../../../waiting/circle_loading/CircleLoading';
import IconsNature from '../../../../../_icons_svg/icons_nature/IconsNature';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import HeaderNature from '../../nature/HeaderNature';
//
import './ActionsAccount.scss';

//
const arr_icons_nature = [IconsNature, IconsNature, IconsFlower];

//
ActionsAccount.propTypes = {
    closeAccount: PropTypes.func,
};

//
function ActionsAccount(props) {
    const { closeAccount } = props;
    //
    const [light_mode, setLightMode] = useState(
        localStorage.light_mode != 0 ? 1 : 0
    );
    const [which_nature, setWhichNature] = useState('');
    const [open_choose_nature, setOpenChooseNature] = useState(false);
    const [logging_out, setLoggingOut] = useState(false);
    const [logout_success, setLogoutSuccess] = useState(false);
    //
    const { user, setDataUser, toggleSnowFlower } = useContext(context_api);

    //
    useEffect(() => {
        changeMode(light_mode);
        if (localStorage.light_mode == undefined) {
            localStorage.light_mode = light_mode;
        }
    }, []);

    /* ----------------- MODE ------------------ */

    // func change mode
    function changeMode(new_mode) {
        if (new_mode != 1) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }

        // set color for iframe learn html
        const iframe = document.getElementById('LearnHTML__iframe');
        iframe &&
            iframe.contentWindow.document
                .getElementsByTagName('BODY')[0]
                .style.setProperty(
                    'color',
                    new_mode == 1 ? 'black' : 'rgba(236, 229, 229, 0.8)'
                );
    }

    // on change mode
    function onChangeMode() {
        const new_light_mode = light_mode == 1 ? 0 : 1;
        changeMode(new_light_mode);
        setLightMode(new_light_mode);
        localStorage.light_mode = new_light_mode;
    }

    /* ----------------- NATURE ------------------ */

    // open
    function seeNature() {
        setOpenChooseNature(true);
    }
    // close
    function closeSeeNature() {
        setOpenChooseNature(false);
    }
    // change
    function changeNature(new_which_nature) {
        toggleSnowFlower(new_which_nature);
        setWhichNature(new_which_nature);
    }

    /* ---------------- LOG IN OUT -------------------- */

    //

    function handleBeForeLog() {
        sessionStorage.url_before_login = location.pathname + location.search;
    }

    //
    function handleLogin(e) {
        handleBeForeLog();
        closeAccount();
    }

    //
    async function handleLogout() {
        try {
            setLoggingOut(true);
            await LogoutRequest();

            localStorage.light_mode = 1;
            handleBeForeLog();

            setDataUser({
                id: 0,
                first_name: '',
                last_name: '',
                picture: '',
            });
        } catch (e) {
            console.log(e);
            alert('Something went wrong!');
        } finally {
            setLogoutSuccess(true);
            setTimeout(() => {
                setLogoutSuccess(false);
                setLoggingOut(false);
                closeAccount();
            }, 0);
        }
    }

    if (logout_success) {
        return <Redirect to="/login-form" push />;
    }
    //
    const IconNature =
        arr_icons_nature[['', 'snow', 'flower'].indexOf(which_nature)];
    //
    return (
        <div className="ActionsAccount">
            <div className={open_choose_nature ? 'display-none' : ''}>
                {/* profile */}
                <div className={user.id ? '' : 'display-none'}>
                    <div
                        className="ActionsAccount_profile"
                        title="Profile"
                        onClick={closeAccount}
                    >
                        <PictureName user={user} content="View your profile" />
                    </div>
                </div>

                {/* mode */}
                <div onClick={onChangeMode} title="Change mode">
                    <div className="header_item ActionsAccount_mode">
                        <SwitchDiv switch_on={light_mode == 0}>
                            <IconDiv
                                Icon={IconsMode}
                                icon_props={{ light_mode: !light_mode }}
                            >
                                {light_mode ? 'Dark Mode' : 'Light Mode'}
                            </IconDiv>
                        </SwitchDiv>
                    </div>
                </div>

                {/* Nature */}
                <div>
                    <div className="ActionsAccount_nature">
                        <div
                            className="header_item"
                            onClick={seeNature}
                            title="Choose nature effect"
                        >
                            <IconDiv
                                Icon={IconsArrow}
                                x={200}
                                y={200}
                                is_reverse={true}
                                space_between={true}
                            >
                                <IconDiv Icon={IconNature}>
                                    Nature Effect
                                </IconDiv>
                            </IconDiv>
                        </div>
                    </div>
                </div>

                {/* log in/out */}
                {user.id ? (
                    <div
                        className="header_item"
                        title="Logout"
                        onClick={handleLogout}
                    >
                        <IconDiv Icon={IconsAccount}>Logout</IconDiv>
                    </div>
                ) : (
                    <Link to="/login-form" onClick={handleLogin}>
                        <div className="header_item" title="Login">
                            <IconDiv Icon={IconsAccount} x={200}>
                                Login
                            </IconDiv>
                        </div>
                    </Link>
                )}
            </div>

            <BlurFetchingDiv
                FetchingComponent={CircleLoading}
                open_fetching={logging_out}
            />

            <div className={open_choose_nature ? '' : 'display-none'}>
                <HeaderNature
                    which_nature={which_nature}
                    closeSeeNature={closeSeeNature}
                    changeNature={changeNature}
                />
            </div>
        </div>
    );
}

export default ActionsAccount;
