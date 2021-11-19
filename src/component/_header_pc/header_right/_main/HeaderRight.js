import React, { useContext, useEffect, useRef } from 'react';
//
import { context_api } from '../../../../_context/ContextAPI';
import { is_api_fake } from '../../../../api/_ConstAPI';
//
import HeaderMessage from '../message/_main/HeaderMessage';
import HeaderAccount from '../account/_main/HeaderAccount';
import HeaderNotice from '../notice/_main/HeaderNotice';
import HeaderUser from '../user/HeaderUser';
//
import './HeaderRight.scss';

//
function HeaderRight() {
    //
    const { user } = useContext(context_api);

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
                    const { user, message, room_chat } = e.data;
                    handleHasMessage(user, message, room_chat);
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
        room_chat,
        user,
        message,
        count_new_mess,
        count_new,
        count_zoom
    ) {}

    //
    function handleHasFriendAdd() {}

    //
    function handlePostWs(
        notice_id,
        link_id,
        user,
        content,
        count_notice,
        count_new
    ) {}

    //
    return (
        <div className="HeaderRight h-100per padding-x-16px">
            <ul className="HeaderRight_ul display-flex list-none h-100per">
                {user.id > 0 ? (
                    <React.Fragment>
                        <li className="HeaderRight_li HeaderRight_user margin-right-8px">
                            <HeaderUser user={user} />
                        </li>

                        <li className="HeaderRight_li margin-right-8px">
                            <HeaderMessage />
                        </li>

                        <li className="HeaderRight_li margin-right-8px">
                            <HeaderNotice />
                        </li>
                    </React.Fragment>
                ) : null}

                <li className="HeaderRight_li">
                    <HeaderAccount />
                </li>
            </ul>
        </div>
    );
}

export default HeaderRight;
