import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
//
import { context_api } from '../../../../_context/ContextAPI';
import { is_api_fake } from '../../../../api/_ConstAPI';
//
import IconsMenu from '../../../../_icons_svg/icons_menu/IconsMenu';
import IconsAction from '../../../../_icons_svg/icons_action/IconsAction';
//
import {
    data_count_new,
    data_list_notices,
    data_list_zooms,
    default_friend_arr,
} from '../zz_initial/InitialRightHeader';

import HeaderMessage from '../message/_main/HeaderMessage';
import HeaderAccount from '../account/_main/HeaderAccount';
import HeaderNotice from '../notice/_main/HeaderNotice';
//
import './RightHeader.scss';
import './RightHeaderRes.scss';

//
function RightHeader() {
    // context
    const { chat_class, openMessage, user } = useContext(context_api);
    
    // state
    const [zoom_obj, setZoomObj] = useState({
        zooms: [],
        count_zoom: 0,
        count_new_zoom: 0,
        friend_arr: [],
    });
    const [notice_obj, setNoticeObj] = useState({
        notices: [],
        count_notice: 0,
        count_new_notice: 0,
    });
    const [count_new_add_friend, setCountNewAddFriend] = useState(0);
    
    // ref
    const ws = useRef(null);

    /* ------------------------------------------- */

    //
    useEffect(() => {
        !is_api_fake &&
            user.id &&
            (ws.current = new WebSocket('ws://localhost:8000/ws/notice/'));
        if (ws.current) {
            ws.current.onopen = () => {
                console.log('ok');
            };

            ws.current.onmessage = (e) => {
                const { type } = e.data;
                //
                if (type == 'has_mess') {
                    const { user, message, zoom_chat } = e.data;
                    handleHasMessage(user, message, zoom_chat);
                }
                //
                else if (type == 'friend') {
                    handleHasFriendAdd();
                }
                //
                else if (type == 'post') {
                    const { notice_id, link_id, user, content } = e.data;
                    handlePostWs(notice_id, link_id, user, content);
                }
            };
        }

        return () => {
            if (ws.current) {
                ws.current.onclose = () => {
                    console.log('close');
                };
            }
        };
    }, []);

    useEffect(() => {
        getData_API_Notice();
    }, []);

    /* ------------------- GET API ------------------ */

    //
    async function getData_API_Notice() {
        // const res = await DoAPiDataNotice_L()
        // const {count_new_zoom, count_new_notice, count_new_add_friend} = res.data
        const {
            count_new_zoom,
            count_new_notice,
            count_new_add_friend,
        } = data_count_new;
        //
        (zoom_obj.count_new_zoom = count_new_zoom), (zoom_obj.count_zoom = 8);
        notice_obj.count_new_notice = count_new_notice;
        notice_obj.count_notice = 5;
        setCountNewAddFriend(count_new_add_friend);
    }

    /* ------------------ HANDLE ---------------------- */

    //
    function handleHasMessage(
        zoom_chat,
        user,
        message,
        count_new_mess,
        count_new,
        count_zoom
    ) {
        const new_zoom_obj = { ...zoom_obj };
        const { zooms } = new_zoom_obj;
        //
        if (zooms.length) {
            const zoom_ix = zooms.findIndex(
                (item) => item.zoom_chat == zoom_chat
            );
            const zoom_item = {
                zoom_chat: zoom_chat,
                messages: [
                    {
                        user: user,
                        message: message,
                    },
                ],
                count_new_mess: count_new_mess,
                updated_time: new Date(),
            };
            //
            zoom_ix >= 0 && zooms.splice(zoom_ix, 1);
            zooms.unshift(zoom_item);
            setZoomObj(new_zoom_obj);
        }
        //
        new_zoom_obj.count_zoom = count_zoom;
        new_zoom_obj.count_new_zoom = count_new;
        setZoomObj(new_zoom_obj);
    }

    //
    function handleHasFriendAdd() {
        setCountNewAddFriend(count_new_add_friend + 1);
    }

    //
    function handlePostWs(
        notice_id,
        link_id,
        user,
        content,
        count_notice,
        count_new
    ) {
        const new_notice_obj = { ...notice_obj };
        const { notices } = new_notice_obj;
        //
        if (notices.length) {
            const notice_ix = notices.findIndex((item) => item.id == notice_id);
            const notice_item = {
                id: notice_id,
                link_id: link_id,
                user: user,
                content: content,
                status_seen: 0,
                updated_time: new Date(),
            };
            //
            notice_ix >= 0 && notices.splice(notice_ix, 1);
            notices.unshift(notice_item);
        }
        //
        new_notice_obj.count_notice = count_notice;
        new_notice_obj.count_new_notice = count_new;
        setZoomObj(new_notice_obj);
    }

    /* ------------------ MESSAGE ---------------------- */

    //
    async function handleOpenZooms() {
        setZoomObj((zoom_obj) => ({
            ...zoom_obj,
            count_new_zoom: 0,
        }));
        // const res = await DoAPIHistoryMess_L()
        // const {list_zooms, count_zoom, count_new_zoom} = res.data
        const { zooms, count_zoom, friend_arr } = {
            zooms: data_list_zooms,
            count_zoom: 4,
            friend_arr: default_friend_arr,
        };
        //
        setZoomObj((zoom_obj) => ({
            ...zoom_obj,
            zooms: zooms,
            count_zoom: count_zoom,
            friend_arr: friend_arr,
        }));
    }

    //
    function hasReceiveListZooms() {
        setZoomObj((zoom_obj) => ({
            ...zoom_obj,
            count_new_zoom: 0,
        }));
        //
        // ws.current.send({
        //     type: 'receive_mess',
        // })
    }

    //
    async function handleClickZoomItem(id, ix) {
        const new_zoom_obj = zoom_obj;
        const zoom_item = new_zoom_obj.zooms[ix];
        zoom_item.count_new_mess = 0;
        setZoomObj(new_zoom_obj);
        //
        openMessage(zoom_item.zoom_chat, false);
        // await DoAPINotice_U(id)
    }

    //
    async function getMoreZooms() {
        const new_zoom_obj = zoom_obj;
        const { zooms, count_zoom } = new_zoom_obj;
        //
        if (count_zoom > zooms.length) {
            // const res = await DoAPIHistoryMess_L()
            // zooms.push(...res.data.zooms)
            zooms.push(...data_list_zooms);
            setZoomObj(new_zoom_obj);
        }
    }

    /* ------------------ NOTICE ---------------------- */

    //
    async function handleOpenNotice() {
        // notice_obj.count_new_notice = 0;
        setNoticeObj((notice_obj) => ({
            ...notice_obj,
            count_new_notice: 0,
        }));
        // const res = await DoAPINotice_L()
        // const {list_notices, count_notice, count_new_notice} = res.data
        const res = {
            data: { list_notices: data_list_notices, count_notice: 5 },
        };
        const { list_notices, count_notice } = res.data;
        //
        setNoticeObj((notice_obj) => ({
            ...notice_obj,
            notices: list_notices,
            count_notice: count_notice,
        }));
    }

    //
    async function MarkAllAsRead() {
        const new_notice_obj = { ...notice_obj };
        const { notices } = new_notice_obj;
        notices.map((item) => {
            item.status_seen = 2;
            return item;
        });
        //
        setNoticeObj(new_notice_obj);
        //
        // await DoAPISeenAllNotice_U()
    }

    //
    async function hasReceiveNotices() {
        notice_obj.notices.map((item) => {
            if (item.status_seen == 0) {
                item.status_seen = 1;
            }
            return item;
        });
        //
        setNoticeObj({
            ...notice_obj,
            count_new_notice: 0,
        });
        // await DoAPISeenNotice_U()
    }

    //
    async function handleClickNoticeItem(id, ix) {
        const notice = notice_obj.notices[ix];
        notice.status_seen = 2;
        await DoAPINotice_U(id);
    }

    //
    async function getMoreNotice() {
        const new_notice_obj = notice_obj;
        const { count_notice, notices } = new_notice_obj;
        if (count_notice > notices.length) {
            // const res = await DoAPINotice_L()
            //
            // notices.push(...res.data.notices)
            setTimeout(() => {
                notices.push(...data_list_notices);
                setNoticeObj(new_notice_obj);
            }, 1000);
        }
    }

    //
    return (
        <div className="RightHeader">
            <ul className="RightHeader_ul list-none">
                <li className={`RightHeader_li  ${chat_class}`}>
                    <div className="header_menu">
                        <NavLink
                            to="/add-friend-add"
                            activeClassName="nav-active"
                        >
                            <div
                                className="RightHeader__icon header_icon"
                                title="friends"
                            >
                                <IconsAction x={400} />

                                <div
                                    className={
                                        count_new_add_friend
                                            ? 'RightHeader__num-notice'
                                            : 'display-none'
                                    }
                                >
                                    {count_new_add_friend}
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </li>

                <li className={`RightHeader_li  ${chat_class}`}>
                    <div className="header_menu">
                        <div>
                            <NavLink
                                to="/new-feed"
                                activeClassName="nav-active"
                            >
                                <div className="header_icon" title="new feed">
                                    <IconsMenu y={200} />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </li>

                <li className={`RightHeader_li ${chat_class}`}>
                    <HeaderMessage
                        zoom_obj={zoom_obj}
                        //
                        handleOpenZooms={handleOpenZooms}
                        hasReceiveListZooms={hasReceiveListZooms}
                        handleClickZoomItem={handleClickZoomItem}
                        getMoreZooms={getMoreZooms}
                    />
                </li>

                <li className={`RightHeader_li ${chat_class}`}>
                    <HeaderNotice
                        notice_obj={notice_obj}
                        //
                        MarkAllAsRead={MarkAllAsRead}
                        hasReceiveNotices={hasReceiveNotices}
                        handleOpenNotice={handleOpenNotice}
                        handleClickNoticeItem={handleClickNoticeItem}
                        getMoreNotice={getMoreNotice}
                    />
                </li>

                <li className="RightHeader_li">
                    <HeaderAccount />
                </li>
            </ul>
        </div>
    );
}

export default RightHeader;
