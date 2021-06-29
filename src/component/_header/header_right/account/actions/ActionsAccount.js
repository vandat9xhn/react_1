import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';

import { LogoutRequest } from '../../../../../api/api_django_no_token/login_logout/LoginLogout';

import { useScreenFetching } from '../../../../../_hooks/UseScreenFetching';
//
import IconsMode from '../../../../../_icons_svg/icons_mode/IconsMode';
import IconsAccount from '../../../../../_icons_svg/icons_account/IconsAccount';
import IconsFlower from '../../../../../_icons_svg/icons_flower/IconsFlower';
import IconsNature from '../../../../../_icons_svg/icons_nature/IconsNature';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import IconDiv from '../../../../some_div/icon_div/IconDiv';
import SwitchDiv from '../../../../some_div/switch_div/_main/SwitchDiv';
import PictureName from '../../../../picture_name/pic_name/PictureName';
import FlexDiv from '../../../../some_div/flex_div/FlexDiv';
//
import './ActionsAccount.scss';
//
import HeaderNature from '../../nature/HeaderNature';

//
const icon_nature_obj = { snow: IconsNature, flower: IconsFlower };

//
ActionsAccount.propTypes = {
    closeAccount: PropTypes.func,
};

//
function ActionsAccount({ closeAccount }) {
    //
    const use_history = useHistory();

    //
    const { user, setDataUser, resetChat, toggleSnowFlower } =
        useContext(context_api);

    //
    const [light_mode, setLightMode] = useState(
        localStorage.light_mode != 0 ? 1 : 0
    );
    const [which_nature, setWhichNature] = useState('');
    const [open_choose_nature, setOpenChooseNature] = useState(false);

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        changeMode(light_mode);
        if (localStorage.light_mode == undefined) {
            localStorage.light_mode = light_mode;
        }
    }, []);

    /* ----------------- MODE ------------------ */

    //
    function changeMode(new_mode) {
        if (new_mode != 1) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }

        //
        const iframe = document.getElementById('LearnHTML__iframe');
        iframe &&
            iframe.contentWindow.document
                .getElementsByTagName('BODY')[0]
                .style.setProperty(
                    'color',
                    // new_mode == 1 ? 'black' : 'rgba(236, 229, 229, 0.8)'
                    'var(--md-color)'
                );
    }

    //
    function onChangeMode() {
        const new_light_mode = light_mode == 1 ? 0 : 1;

        changeMode(new_light_mode);
        setLightMode(new_light_mode);
        localStorage.light_mode = new_light_mode;
    }

    /* ------------ NATURE ---------- */

    //
    function seeNature() {
        setOpenChooseNature(true);
    }
    //
    function closeSeeNature() {
        setOpenChooseNature(false);
    }
    //
    function changeNature(new_which_nature) {
        toggleSnowFlower(new_which_nature);
        setWhichNature(
            new_which_nature == which_nature ? '' : new_which_nature
        );
    }

    /* ----------- LOG ---------- */

    //
    function handleBeForeLog() {
        let url_before_login = location.pathname + location.search;

        if (url_before_login.search(/(login-form|registration-form)/) == -1) {
            sessionStorage.url_before_login = url_before_login;
        }
    }

    //
    function handleLogin(e) {
        handleBeForeLog();
        closeAccount();
    }

    //
    async function handleLogout() {
        try {
            handleBeForeLog();
            closeAccount();
            resetChat();

            await handleScreenFetching(() => LogoutRequest());

            setDataUser({
                id: 0,
                first_name: '',
                last_name: '',
                picture: '',
            });

            use_history.push('/login-form');
        } catch (e) {
            console.log(e);
        }
    }

    //
    return (
        <div className="ActionsAccount">
            <div className={open_choose_nature ? 'display-none' : ''}>
                <div className={user.id ? '' : 'display-none'}>
                    <div
                        className="ActionsAccount_profile"
                        title="Profile"
                        onClick={closeAccount}
                    >
                        <PictureName user={user} content="View your profile" />
                    </div>
                </div>

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

                <div>
                    <div className="ActionsAccount_nature">
                        <div
                            className="header_item"
                            onClick={seeNature}
                            title="Choose nature effect"
                        >
                            <FlexDiv
                                ComponentLeft={
                                    <IconDiv
                                        Icon={
                                            which_nature
                                                ? icon_nature_obj[which_nature]
                                                : IconsNature
                                        }
                                    >
                                        Nature Effect
                                    </IconDiv>
                                }
                                ComponentRight={
                                    <div className="ActionsAccount_nature-right">
                                        <IconsArrow x={200} y={200} />
                                    </div>
                                }
                                space_between={true}
                            />
                        </div>
                    </div>
                </div>

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
