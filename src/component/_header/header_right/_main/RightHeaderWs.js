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
    const { auth_class, user } = useContext(context_api);

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

    /* --------------- HANDLE --------------- */

    //
    function handleHasMessage(
        zoom_chat,
        user,
        message,
        count_new_mess,
        count_new,
        count_zoom
    ) {
        
    }

    //
    function handleHasFriendAdd() {
        
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
        
    }

    //
    return (
        <div className="RightHeader">
            <ul className="RightHeader_ul list-none">
                <li className={`RightHeader_li  ${auth_class}`}>
                    <HeaderFriend />
                </li>

                <li className={`RightHeader_li  ${auth_class}`}>
                    <HeaderNewFeed />
                </li>

                <li className={`RightHeader_li ${auth_class}`}>
                    <HeaderMessage />
                </li>

                <li className={`RightHeader_li ${auth_class}`}>
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
