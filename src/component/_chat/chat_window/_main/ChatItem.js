import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../api/_ConstAPI';
//
import { useForceUpdate } from '../../../../_hooks/UseForceUpdate';
//
import ChatHide from '../hide/_main/ChatHide';
import ChatWd from '../show/_main/ChatShow';

//
ChatItem.propTypes = {};

//
function ChatItem({
    chat_item,
    room_chat,

    chat_ix,
    index,
    scroll_y,

    is_active,
    is_two_chat,
}) {
    //
    const ws = useRef(
        null
        // || new WebSocket('ws://127.0.0.1:8000/ws/message/' + room_chat)
    );

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        if (!is_api_fake) {
            ws.current = new WebSocket(
                'ws://127.0.0.1:8000/ws/message/' + room_chat
            );
        }

        is_api_fake &&
            (ws.current = {
                send: (data) => {
                    console.log(data);
                },
            });

        forceUpdate();
    }, []);

    //
    return (
        <div>
            <div>
                {is_active ? (
                    <ChatWd
                        chat_item={chat_item}
                        ws={ws.current}
                        scroll_y={scroll_y}
                        chat_ix={chat_ix}
                        index={index}
                        is_two_chat={is_two_chat}
                    />
                ) : (
                    <ChatHide
                        room_chat={room_chat}
                        chat_ix={chat_ix}
                        ws={ws.current}
                        is_group={chat_item.is_group}
                        room_users={chat_item.room_obj.room_users}
                    />
                )}
            </div>
        </div>
    );
}

export default ChatItem;
