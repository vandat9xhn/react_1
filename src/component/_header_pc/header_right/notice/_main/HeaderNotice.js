import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
//
import { API_Notice_U } from '../../../../../api/api_django/header/APIHeaderToken';
//
import { usePosFollowBodyOrElm } from '../../../../../_hooks/usePosFollowBodyOrElm';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
//
import HeaderNoticeContain from '../contain/_main/HeaderNoticeContain';
import HeaderNoticeBtnToggle from '../btn_toggle/HeaderNoticeBtnToggle';
//
import './HeaderNotice.scss';

//
HeaderNotice.propTypes = {};

//
function HeaderNotice({}) {
    //
    useParams();

    //
    const ref_child_elm = useRef(null);
    const ref_btn_elm = useRef(null);

    const ref_scroll_elm = useRef(null);

    //
    const {
        ref_is_open,
        ref_starting,
        ref_pos,

        handleOpen,
        handleClose,
    } = usePosFollowBodyOrElm({
        // getScrollElms: getScrollElms,
        ref_base_elm: ref_btn_elm,
        getChildWidth: getChildWidth,

        is_at_body: false,
        use_scroll: false,
        use_resize: true,
    });

    const { left_or_right, position_x, transform_x } = ref_pos.current;

    //
    useEffect(() => {
        closeNotice();
    }, [location.href]);

    // ---------

    //
    function getChildWidth() {
        return ref_child_elm.current.getBoundingClientRect().width;
    }

    //
    function closeNotice() {
        ref_is_open.current && handleClose({});
    }

    //
    function openNotice() {
        !ref_is_open.current && handleOpen({});
    }

    //
    function toggleOpenNotice() {
        if (location.pathname.startsWith('/fb-notice')) {
            return;
        }

        !ref_is_open.current ? openNotice() : closeNotice();
    }

    // ----------

    //
    async function hasReceivedNotices() {
        // await API_Notice_U();
    }

    //
    return (
        <CloseDiv makeDivHidden={closeNotice}>
            <div
                ref={ref_btn_elm}
                className={`Header_notice ${
                    ref_is_open.current ? 'nav-active' : ''
                } ${
                    location.pathname.startsWith('/fb-notice')
                        ? 'nav-active pointer-events-none'
                        : ''
                }`}
                onClick={hasReceivedNotices}
            >
                <HeaderNoticeBtnToggle toggleOpenNotice={toggleOpenNotice} />

                <div
                    ref={ref_child_elm}
                    className="header_hidden"
                    style={{
                        [left_or_right]: position_x,
                        transform: `translateX(${transform_x}) translateX(${'-10px'})`,
                    }}
                >
                    <div
                        className={`${
                            ref_is_open.current ? '' : 'display-none'
                        } ${ref_starting.current ? 'opacity-0' : ''}`}
                    >
                        <div
                            ref={ref_scroll_elm}
                            className="RightHeader_hidden_contain header_hidden_contain border-top-blur"
                        >
                            <HeaderNoticeContain
                                ref_scroll_elm={ref_scroll_elm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default HeaderNotice;
