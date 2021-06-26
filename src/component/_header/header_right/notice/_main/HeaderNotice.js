import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    API_NoticeCountNew_R,
    API_Notice_L,
    API_Notice_U,
} from '../../../../../api/api_django/header/APIHeaderToken';
//
import IconBell from '../../../../../_icons_svg/icon_bell/IconBell';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
import BadgeDiv from '../../../../some_div/badge_div/BadgeDiv';
//
import ListNotices from '../list/_main/ListNotices';
//
import './HeaderNotice.scss';
import { useAppearancePosition } from '../../../../../_custom_hooks/useAppearancePosition';

//
HeaderNotice.propTypes = {};

//
function HeaderNotice({}) {
    //
    const ref_child_elm = useRef(null);
    const ref_parent_elm = useRef(null);

    //
    const {
        handleOpen,
        handleClose,

        position_state: notice_state,
        setPositionState: setNoticeState,
    } = useAppearancePosition({
        ref_child_elm: ref_child_elm,
        ref_parent_elm: ref_parent_elm,
        other_state: {
            notices: [],
            count: 0,
            count_new: 0,

            is_fetching: false,
            has_fetched: false,
        },
        extra_transform_x: 0,
    });

    const {
        is_open,
        transform_x,

        notices,
        count,
        count_new,

        is_fetching,
        has_fetched,
    } = notice_state;

    //
    useEffect(() => {
        getData_API_CountNewNotice();
    }, []);

    /* ------------------- COMMON ------------------ */

    //
    function handleCallbackOpen(callback_open_state = {}) {
        getData_API_Notice(callback_open_state);
    }

    //
    function closeNotice() {
        handleClose();
    }

    /* ------------------- GET API ------------------ */

    //
    async function getData_API_CountNewNotice() {
        const res = await API_NoticeCountNew_R();

        setNoticeState((notice_state) => ({
            ...notice_state,
            count_new: res.data,
        }));
    }

    //
    async function getData_API_Notice(start_obj_state = {}) {
        setNoticeState({
            ...notice_state,
            ...start_obj_state,
            is_fetching: true,
        });

        const res = await API_Notice_L({
            page: 1,
            size: 10,
            c_count: notices.length,
        });
        const { data, count: new_count } = res.data;

        setNoticeState((notice_state) => ({
            ...notice_state,
            notices: notice_state.has_fetched ? [...notices, ...data] : data,
            count_new: 0,
            count: notice_state.has_fetched ? count : new_count,
            is_fetching: false,
            has_fetched: true,
        }));
    }

    /* ----------------------------- */

    //
    function toggleOpenNotice() {
        if (is_open) {
            closeNotice();

            return;
        }

        if (!has_fetched) {
            handleOpen({
                self_handle: false,
                handleCallbackOpen: handleCallbackOpen,
            });

            return;
        }

        handleOpen({ self_handle: true });
    }

    //
    function makeDivHidden() {
        closeNotice();
    }

    /* ----------------------------- */

    //
    async function MarkAllAsRead() {
        const new_notices = [...notices];
        new_notices.map((item) => {
            item.status_seen = 2;
            return item;
        });

        setNoticeState((notice_state) => ({
            ...notice_state,
            notices: new_notices,
        }));

        await API_Notice_U();
    }

    //
    async function hasReceivedNotices() {
        const new_notices = [...notices];
        new_notices.map((item) => {
            if (item.status_seen == 0) {
                item.status_seen = 1;
            }
            return item;
        });

        setNoticeState((notice_state) => ({
            ...notice_state,
            notices: new_notices,
        }));

        await API_Notice_U();
    }

    //
    async function handleClickItem(id, ix) {
        notices[ix].status_seen = 2;
        closeNotice();

        await API_Notice_U(id);
    }

    //
    return (
        <CloseDiv makeDivHidden={makeDivHidden}>
            <div
                ref={ref_parent_elm}
                className={`header_menu Header_notice ${
                    is_open ? 'nav-active bottom-blue' : ''
                }`}
            >
                <div
                    className="RightHeader__icon HeaderNotice__bell header_icon"
                    onClick={toggleOpenNotice}
                    title="Notice"
                >
                    <IconBell />

                    <div className="RightHeader__num-notice">
                        <BadgeDiv num={count_new} />
                    </div>
                </div>

                <div
                    className={`header-hidden-position header_hidden left-50per ${
                        is_open ? 'visibility-visible' : 'visibility-hidden'
                    }
                    ${has_fetched ? '' : 'pointer-events-none'}
                    `}
                    style={{
                        transform: `translateX(-50%) translateX(${transform_x}px)`,
                    }}
                    onClick={hasReceivedNotices}
                >
                    <div ref={ref_child_elm}></div>

                    <div className={`${is_open ? '' : 'display-none'}`}>
                        <ListNotices
                            notices={notices}
                            count={count}
                            is_fetching={is_fetching}
                            //
                            MarkAllAsRead={MarkAllAsRead}
                            handleClickItem={handleClickItem}
                            getMoreNotice={getData_API_Notice}
                        />
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default HeaderNotice;
