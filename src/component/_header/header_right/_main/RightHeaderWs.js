import React, { useContext, useEffect, useRef } from 'react';
//
import { context_api } from '../../../../_context/ContextAPI';
import { is_api_fake } from '../../../../api/_ConstAPI';
//
import './RightHeader.scss';
// 
import HeaderMessage from '../message/_main/HeaderMessage';
import HeaderAccount from '../account/_main/HeaderAccount';
import HeaderNotice from '../notice/_main/HeaderNotice';
import HeaderFriend from '../friend/HeaderFriend';
import HeaderNewFeed from '../new_feed/HeaderNewFeed';
// 
import './RightHeaderRes.scss';

//
function RightHeader() {
    // 
    const { chat_class, user } = useContext(context_api);

    // 
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
        // const new_zoom_obj = { ...zoom_obj };
        // const { zooms } = new_zoom_obj;
        // //
        // if (zooms.length) {
        //     const zoom_ix = zooms.findIndex(
        //         (item) => item.zoom_chat == zoom_chat
        //     );
        //     const zoom_item = {
        //         zoom_chat: zoom_chat,
        //         messages: [
        //             {
        //                 user: user,
        //                 message: message,
        //             },
        //         ],
        //         count_new_mess: count_new_mess,
        //         updated_time: new Date(),
        //     };
        //     //
        //     zoom_ix >= 0 && zooms.splice(zoom_ix, 1);
        //     zooms.unshift(zoom_item);
        //     setZoomObj(new_zoom_obj);
        // }
        // //
        // new_zoom_obj.count_zoom = count_zoom;
        // new_zoom_obj.count_new_zoom = count_new;
        // setZoomObj(new_zoom_obj);
    }

    //
    function handleHasFriendAdd() {
        // setCountNewAddFriend(count_new_add_friend + 1);
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
        // const new_notice_obj = { ...notice_obj };
        // const { notices } = new_notice_obj;
        // //
        // if (notices.length) {
        //     const notice_ix = notices.findIndex((item) => item.id == notice_id);
        //     const notice_item = {
        //         id: notice_id,
        //         link_id: link_id,
        //         user: user,
        //         content: content,
        //         status_seen: 0,
        //         updated_time: new Date(),
        //     };
        //     //
        //     notice_ix >= 0 && notices.splice(notice_ix, 1);
        //     notices.unshift(notice_item);
        // }
        // //
        // new_notice_obj.count_notice = count_notice;
        // new_notice_obj.count_new_notice = count_new;
        // setZoomObj(new_notice_obj);
    }

    //
    return (
        <div className="RightHeader">
            <ul className="RightHeader_ul list-none">
                <li className={`RightHeader_li  ${chat_class}`}>
                    <HeaderFriend />
                </li>

                <li className={`RightHeader_li  ${chat_class}`}>
                    <HeaderNewFeed />
                </li>

                <li className={`RightHeader_li ${chat_class}`}>
                    <HeaderMessage />
                </li>

                <li className={`RightHeader_li ${chat_class}`}>
                    <HeaderNotice />
                </li>

                <li className="RightHeader_li">
                    <HeaderAccount />
                </li>
            </ul>
        </div>
    );
}

export default RightHeader;
