import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';

import { API_Friends_LC } from '../../../api/api_django/user/user_friend/UserFriend';

import { useMounted } from '../../../_hooks/useMounted';

import { ScrollDownBool } from '../../../_some_function/ScrollDown';
import observeToDo from '../../../_some_function/observerToDo';
//
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';
//
import PicNameContent from '../../picture_name/pic_name_content/PicNameContent';
//
import './ChatU.scss';

//
ChatU.propTypes = {};

//
function ChatU() {
    //
    const { openMessage, auth_class } = useContext(context_api);

    //
    const [friend_obj, setFriendObj] = useState({
        friend_arr: [],
        is_open: false,
        has_fetched: false,
    });

    const { friend_arr, is_open, has_fetched } = friend_obj;

    //
    ;
    const ref_chat_user = useRef(null);
    const posScroll = useRef(0);
    const just_scroll = useRef(false);
    const max_friend = useRef(false);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        observeToDo(ref_chat_user.current, getFriends, 0.1);
    }, []);

    //
    useEffect(() => {
        is_open &&
            setFriendObj({
                ...friend_obj,
                is_open: false,
            });
    }, [location.href]);

    /* --------------------- GET API -------------------- */

    //
    async function getFriends() {
        const res = await API_Friends_LC('GET', {
            page: 1,
            size: 10,
            c_count: friend_arr.length,
        });

        const new_friends = res.data.data.map((item) => item.friend);
        mounted &&
            setFriendObj((friend_obj) => ({
                ...friend_obj,
                friend_arr: [...friend_arr, ...new_friends],
                has_fetched: true,
            }));
        //
        if (res.data.data.length <= 10) {
            max_friend.current = true;
        }
        just_scroll.current = false;
    }

    /* ----------------------------------------- */

    //
    function onScroll(e) {
        if (ScrollDownBool(e.target, posScroll, just_scroll, max_friend)) {
            posScroll.current = e.target.scrollTop;
            just_scroll.current = true;
            getFriends();
        }
    }

    //
    function toggleChatUser() {
        setFriendObj({
            ...friend_obj,
            is_open: !is_open,
        });
    }

    //
    function onOpenMessage(friend_id) {
        if (friend_obj.is_open) {
            setFriendObj({
                ...friend_obj,
                is_open: false,
            });
            openMessage(friend_id);
        }
    }

    //
    return (
        <div className={`ChatU ${auth_class}`}>
            <div
                className={`ChatU_toggle hv-opacity brs-5px ${
                    is_open ? '' : 'ChatU_open'
                }`}
            >
                <div className="ChatU_close-icon" onClick={toggleChatUser}>
                    <IconsArrow x={is_open ? 0 : 400} y={is_open ? 400 : 0} />
                </div>
            </div>

            <div
                ref={ref_chat_user}
                className={`ChatU_contain brs-5px box-shadow-1 ${
                    is_open ? 'ChatU_contain-open' : 'ChatU_contain-close'
                }`}
                onScroll={onScroll}
            >
                {(has_fetched ? friend_arr : [{}, {}, {}]).map(
                    (item, index) => (
                        <div
                            key={`ChatU_friends_${index}`}
                            className="ChatU_friends"
                        >
                            <PicNameContent
                                user={item}
                                handleClick={() => onOpenMessage(item.id)}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default ChatU;
