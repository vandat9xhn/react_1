import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import ContextChat from '../../../../../_context/chat/ContextChat';
//
import './ChatShow.scss';
//
import ChatScreen from '../../__screen/_main/ChatScreen';
import ChatH from '../head/ChatH';
import ChatBd from '../body/_main/ChatBd';
import ChatF from '../footer/_main/ChatFoot';
import ChatGroup from '../group/_main/ChatGroup';

//
ChatShow.propTypes = {};

//
function ChatShow({
    chat_item,
    ws,
    scroll_y,

    chat_ix,
    is_two_chat,
}) {
    //
    const {
        is_group,
        room_chat,

        texting_obj,
        message_obj,
        room_obj,
        input_obj,
        canvas_obj,
    } = chat_item;

    const { user_input, num_input } = texting_obj;

    const { room_users, count_user, room_creator, room_owner } = room_obj;

    const is_on_input = user_input ? num_input >= 2 : num_input >= 1;

    // ref
    const ref_chat_screen = useRef(null);

    //
    // useEffect(() => {
    //     shouldSendStatus();
    // }, []);

    // //
    // function handleWsMessage(e) {
    //     const data = JSON.parse(e.data);
    //     const { type } = data;

    //     if (type == 'mess') {
    //         const { new_mess_id } = data;
    //         handleGetMessage({ ...data, chat_ix: chat_ix });

    //         if (room_active) {
    //             if (!is_hide) {
    //                 sendStatusMessageWs(new_mess_id, 'seen');
    //             } else {
    //                 sendStatusMessageWs(new_mess_id, 'receive');
    //             }
    //         }
    //     }
    //     //
    //     else if (type == 'on_input') {
    //         handleOnInPut({ chat_ix: chat_ix, ...data });
    //     }
    //     //
    //     else if (type == 'status_mess') {
    //         const { mess_id } = data;
    //         mess_id > user_begin_mess &&
    //             handleStatusMessage({ ...data, chat_ix: chat_ix });
    //     }
    //     //
    //     else if (type == 'like_message') {
    //         const { mess_id } = data;
    //         mess_id > user_begin_mess &&
    //             handleLikeMessage({ ...data, chat_ix: chat_ix });
    //     }
    //     //
    //     else if (type == 'delete_message') {
    //         const { mess_id } = data;
    //         mess_id > user_begin_mess &&
    //             handleDeleteMessage({ ...data, chat_ix: chat_ix });
    //     }
    //     //
    //     else if (type == 'add_friend') {
    //         handleAddFriendToGroup({
    //             ...data,
    //             chat_ix: chat_ix,
    //             begin_mess: messages[messages.length - 1].id,
    //         });
    //     }
    //     //
    //     else if (type == 'quit') {
    //         handleQuitGroup({ chat_ix: chat_ix, ...data });
    //     }
    //     //
    //     else if (type == 'force_quit') {
    //         handleForceQuitGroup({ chat_ix: chat_ix, ...data });
    //     }
    // }

    // //
    // function shouldSendStatus() {
    //     const last_message = messages[messages.length - 1];
    //     if (last_message) {
    //         const { id } = last_message;

    //         if (room_users[room_users.length - 1].id_seen_mess < id) {
    //             sendStatusMessageWs(id, 'seen');
    //         }
    //     }
    // }

    /* ---------- WS SEND ----------*/

    // //
    // function sendStatusMessageWs(new_mess_id, status_mess) {
    //     handleSendStatusMessageWs(ws.current, new_mess_id, status_mess);
    // }

    /* -------------- */

    //
    function onFocusChatShow() {
        room_obj.room_active = true;
        // shouldSendStatus();
    }

    //
    function onBlurChatShow() {
        room_obj.room_active = false;
    }

    /* -------------- */

    //
    function openChatScreen(new_floor) {
        ref_chat_screen.current.openChatScreen(new_floor);
    }

    //
    function closeChatScreen(new_floor) {
        ref_chat_screen.current.closeChatScreen(new_floor);
    }

    // console.log(chat_item);
    //
    return (
        <ContextChat
            chat_ix={chat_ix}
            room_chat={room_chat}
            is_group={is_group}
            scroll_y={scroll_y}
            ws={ws}
            //
            openChatScreen={openChatScreen}
            closeChatScreen={closeChatScreen}
        >
            <div
                className={`ChatShow brs-5px-md box-shadow-fb ${
                    chat_ix == 0 ? '' : 'ChatShow_second'
                } ${is_two_chat ? '' : 'ChatShow_single'}`}
                onFocus={onFocusChatShow}
                onBlur={onBlurChatShow}
            >
                <div className="ChatShow_contain">
                    <div className="ChatShow_head">
                        <ChatH
                            room_users={room_users}
                            count_user={count_user}
                            room_owner={room_owner}
                        />

                        {is_group && (
                            <div className="ChatShow_group pos-abs">
                                <ChatGroup room_users={room_users} />
                            </div>
                        )}
                    </div>

                    <div className="ChatShow_body">
                        <ChatBd
                            chat_ix={chat_ix}
                            message_obj={message_obj}
                            is_on_input={is_on_input}
                            //
                            room_users={room_users}
                            room_creator={room_creator}
                        />
                    </div>

                    <div className="ChatShow_footer">
                        <ChatF canvas_obj={canvas_obj} input_obj={input_obj} />
                    </div>
                </div>

                <ChatScreen ref={ref_chat_screen} />
            </div>
        </ContextChat>
    );
}

export default ChatShow;
