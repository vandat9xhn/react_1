import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { useBool } from '../../../../../_hooks/useBool';
//
import IconsMode from '../../../../../_icons_svg/icons_mode/IconsMode';
//
import IconDiv from '../../../../some_div/icon_div/IconDiv';
import SwitchDiv from '../../../../some_div/switch_div/_main/SwitchDiv';
import PictureName from '../../../../picture_name/pic_name/PictureName';
//
import HeaderNature from '../../nature/HeaderNature';
import ActionsAccountLog from '../log/ActionsAccountLog';
import ActionsAccountNature from '../nature/ActionsAccountNature';
//
import './ActionsAccount.scss';
import LinkToProfilePage from '../../../../link/to_profile_page/LinkToProfilePage';
import HeaderAccountProfile from '../profile/HeaderAccountProfile';

//
ActionsAccount.propTypes = {
    closeAccount: PropTypes.func,
};

//
function ActionsAccount({ closeAccount }) {
    //
    const { user, toggleSnowFlower } = useContext(context_api);

    //
    const [light_mode, setLightMode] = useState(
        localStorage.light_mode != 0 ? 1 : 0
    );
    const [which_nature, setWhichNature] = useState('');

    //
    const { is_true: open_nature, toggleBool: toggleNature } = useBool();

    //
    useEffect(() => {
        changeMode(light_mode);
    }, [light_mode]);

    // ---------

    //
    function changeMode(new_light_mode) {
        document.documentElement.setAttribute(
            'data-theme',
            new_light_mode != 1 ? 'dark' : 'light'
        );
        localStorage.light_mode = new_light_mode;
    }

    //
    function onChangeMode() {
        setLightMode((light_mode) => (light_mode == 1 ? 0 : 1));
    }

    //
    function changeNature(new_which_nature) {
        toggleSnowFlower(new_which_nature);
        setWhichNature(
            new_which_nature == which_nature ? '' : new_which_nature
        );
    }

    //
    return (
        <div className="ActionsAccount">
            <div className={open_nature ? 'display-none' : ''}>
                {user.id > 0 ? (
                    <HeaderAccountProfile
                        user={user}
                        closeAccount={closeAccount}
                    />
                ) : null}

                <div className="font-500">
                    <div onClick={onChangeMode} title="Change mode">
                        <div className="header_item ActionsAccount_mode">
                            <SwitchDiv switch_on={light_mode == 0}>
                                <IconDiv
                                    Icon={IconsMode}
                                    icon_props={{ light_mode: !light_mode }}
                                >
                                    {light_mode ? 'Light Mode' : 'Dark Mode'}
                                </IconDiv>
                            </SwitchDiv>
                        </div>
                    </div>

                    <ActionsAccountNature
                        which_nature={which_nature}
                        seeNature={toggleNature}
                    />

                    <ActionsAccountLog closeAccount={closeAccount} />
                </div>
            </div>

            <div className={open_nature ? '' : 'display-none'}>
                <HeaderNature
                    which_nature={which_nature}
                    closeSeeNature={toggleNature}
                    changeNature={changeNature}
                />
            </div>
        </div>
    );
}

export default ActionsAccount;
