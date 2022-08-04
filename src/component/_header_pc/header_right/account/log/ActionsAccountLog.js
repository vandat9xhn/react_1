import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { REG_ACCOUNT } from '../../../../../_constant/Constant';
import { context_api } from '../../../../../_context/ContextAPI';
//
import { LogoutRequest } from '../../../../../api/api_django_no_token/login_logout/LoginLogout';
//
import { useScreenFetching } from '../../../../../_hooks/UseScreenFetching';
//
import IconsAccount from '../../../../../_icons_svg/icons_account/IconsAccount';
//
import IconDiv from '../../../../some_div/icon_div/IconDiv';

//
ActionsAccountLog.propTypes = {};

//
function ActionsAccountLog({ closeAccount }) {
    //
    const use_history = useHistory();

    //
    const { user, setDataUser, closeAllRoomChat } = useContext(context_api);

    //
    const handleScreenFetching = useScreenFetching();

    // ------

    //
    function handleBeForeLog() {
        let url_before_login = location.pathname + location.search;

        if (url_before_login.search(REG_ACCOUNT) == -1) {
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
            closeAllRoomChat();

            await handleScreenFetching(() => LogoutRequest());

            setDataUser({
                id: 0,
                first_name: '',
                last_name: '',
                picture: '',
            });

            use_history.push('/login-pic');
        } catch (e) {
            console.log(e);
        }
    }

    //
    return (
        <div>
            {user.id > 0 ? (
                <div
                    className="header_item"
                    title="Logout"
                    onClick={handleLogout}
                >
                    <IconDiv Icon={IconsAccount}>Logout</IconDiv>
                </div>
            ) : (
                <Link to="/login-pic" onClick={handleLogin}>
                    <div className="header_item" title="Login">
                        <IconDiv Icon={IconsAccount} x={200}>
                            Login
                        </IconDiv>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default ActionsAccountLog;
