import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_NoticeCountNew_R } from '../../../../../api/api_django/header/APIHeaderToken';
//
import IconBell from '../../../../../_icons_svg/icon_bell/IconBell';
//
import Tooltip from '../../../../tooltip/_main/Tooltip';
import HeaderBtnIcon from '../../../_components/btn_icon/HeaderBtnIcon';

//
HeaderNoticeBtnToggle.propTypes = {};

//
function HeaderNoticeBtnToggle({ toggleOpenNotice }) {
    //
    const [count_new, setCountNew] = useState(0);

    const ref_elm = useRef(null)

    //
    useEffect(() => {
        !location.pathname.startsWith('/fb-notice') &&
            getData_API_CountNewNotice();
    }, []);

    // -------

    //
    async function getData_API_CountNewNotice() {
        const res = await API_NoticeCountNew_R();

        setCountNew(res.data);
    }

    // -----

    //
    function onToggleOpenNotice() {
        count_new > 0 && setCountNew(0);
        toggleOpenNotice();
    }

    //
    return (
        <div>
            <HeaderBtnIcon
                count_new={count_new}
                // title="Notice"
                ref_btn={ref_elm}
                //
                handleClick={onToggleOpenNotice}
            >
                <IconBell />
            </HeaderBtnIcon>

            <Tooltip ref_elm={ref_elm} pos="bottom">
                Notices
            </Tooltip>
        </div>
    );
}

export default HeaderNoticeBtnToggle;
