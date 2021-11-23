import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_RoomCountNew_R } from '../../../../../api/api_django/header/APIHeaderToken';
//
import IconsMenu from '../../../../../_icons_svg/icons_menu/IconsMenu';
//
import HeaderBtnIcon from '../../../_components/btn_icon/HeaderBtnIcon';

//
HeaderMessBtnToggle.propTypes = {};

//
function HeaderMessBtnToggle({ toggleOpenZoom }) {
    //
    const [count_new, setCountNew] = useState(0);

    //
    useEffect(() => {
        getData_API_CountNewZoom();
    }, []);

    // -----

    //
    async function getData_API_CountNewZoom() {
        const res = await API_RoomCountNew_R({});

        setCountNew(res.data);
    }

    // ----

    //
    function onToggleOpenZoom() {
        count_new > 0 && setCountNew(0);
        toggleOpenZoom();
    }

    //
    return (
        <HeaderBtnIcon
            handleClick={onToggleOpenZoom}
            count_new={count_new}
            title="message"
        >
            <IconsMenu x={200} y={200} />
        </HeaderBtnIcon>
    );
}

export default HeaderMessBtnToggle;
