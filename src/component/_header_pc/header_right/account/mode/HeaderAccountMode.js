import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsMode from '../../../../../_icons_svg/icons_mode/IconsMode';
//
import IconDiv from '../../../../some_div/icon_div/IconDiv';
import SwitchDiv from '../../../../some_div/switch_div/_main/SwitchDiv';

//
HeaderAccountMode.propTypes = {};

//
function HeaderAccountMode(props) {
    //
    const [light_mode, setLightMode] = useState(
        localStorage.light_mode != 0 ? 1 : 0
    );

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
    return (
        <div
            className="HeaderAccountMode header_item"
            onClick={onChangeMode}
            title="Change mode"
        >
            <SwitchDiv switch_on={light_mode == 0}>
                <IconDiv
                    Icon={IconsMode}
                    icon_props={{ light_mode: !light_mode }}
                >
                    {light_mode ? 'Light Mode' : 'Dark Mode'}
                </IconDiv>
            </SwitchDiv>
        </div>
    );
}

export default HeaderAccountMode;
