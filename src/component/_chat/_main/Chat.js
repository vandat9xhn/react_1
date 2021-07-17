import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_ChatZoom_R } from '../../../_handle_api/chat/ChatHandleAPI';
//
import { initial_chat_item } from '../../../_initial/chat/ChatInitial';
//
import { makeNewChat } from '../_func/makeNewChat';
//
import ChatItem from '../chat_window/_main/ChatItem';
//
import './Chat.scss';

//
class Chat extends Component {
    state = {
        chat_active_arr: [] || [
            {
                room_chat: '',
                index: 0,
                scroll_y: 0,
                chat_item: initial_chat_item(),
            },
        ],
        chat_inactive_arr: [] || [
            {
                room_chat: '',
                index: 0,
                scroll_y: 0,
                chat_item: initial_chat_item(),
            },
        ],
    };

    //
    componentDidMount() {
        // const session_room_chat = sessionStorage.session_room_chat;
        // if (!session_room_chat) {
        //     return;
        // }
        // const room_chat_arr = session_room_chat.split(',');
        // setTimeout(() => {
        //     for (const room_chat of room_chat_arr) {
        //         this.openZoomChat(room_chat);
        //     }
        // }, 250);
    }

    /* ----------- */

    //
    getChatBodyScrollY = (active_ix) => {
        return document
            .getElementsByClassName('Chat_active-item')
            [active_ix].getElementsByClassName('ChatWd_body-contain')[0]
            .scrollTop;
    };

    /* ----------- */

    //
    openZoomChat = async (new_room_chat) => {
        const { chat_active_arr, chat_inactive_arr } = this.state;

        if (chat_active_arr.some((item) => item.room_chat == new_room_chat)) {
            return;
        }

        const chat_active_two_obj = chat_active_arr.splice(1, 1)[0];

        if (chat_active_two_obj) {
            chat_active_two_obj.scroll_y = this.getChatBodyScrollY(1);

            chat_inactive_arr.push(chat_active_two_obj);
        }

        const chat_inactive_ix = chat_inactive_arr.findIndex(
            (item) => item.room_chat == new_room_chat
        );

        if (chat_inactive_ix >= 0) {
            const chat_inactive_obj = chat_inactive_arr.splice(
                chat_inactive_ix,
                1
            )[0];
            chat_active_arr.unshift(chat_inactive_obj);

            // console.log(chat_inactive_obj);

            this.setState({});
        } else {
            const data = await handle_API_ChatZoom_R(new_room_chat);

            chat_active_arr.unshift({
                room_chat: new_room_chat,
                index: chat_active_arr.length + chat_inactive_arr.length,
                scroll_y: 0,
                chat_item: makeNewChat(data),
            });

            this.setState({});
        }
    };

    //
    hideZoomChat = (hide_index = 0) => {
        const { chat_active_arr, chat_inactive_arr } = this.state;

        const chat_active_splice_obj = chat_active_arr.splice(hide_index, 1)[0];
        chat_active_splice_obj.scroll_y = this.getChatBodyScrollY(hide_index);

        chat_inactive_arr.push(chat_active_splice_obj);
        this.setState({});
    };

    //
    closeZoomChat = (is_chat_open = true, close_index = 0) => {
        const { chat_active_arr, chat_inactive_arr } = this.state;

        if (is_chat_open) {
            chat_active_arr.splice(close_index, 1);
        } else {
            chat_inactive_arr.splice(close_index, 1);
        }

        this.setState({});
    };

    //
    closeAllZoomChat = () => {
        this.setState({
            chat_active_arr: [],
            chat_inactive_arr: [],
        });
    };

    //
    render() {
        //
        const { chat_active_arr, chat_inactive_arr } = this.state;

        // console.log(chat_active_arr, chat_inactive_arr);

        //
        return (
            <div>
                <div>
                    <div>
                        {chat_active_arr.map((item, ix) => (
                            <div
                                key={`${item.room_chat}`}
                                className="Chat_active-item"
                            >
                                <ChatItem
                                    chat_ix={ix}
                                    index={item.index}
                                    is_active={true}
                                    room_chat={item.room_chat}
                                    scroll_y={item.scroll_y}
                                    is_two_chat={chat_active_arr.length == 2}
                                    chat_item={item.chat_item}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="Chat_hidden">
                        <div className="Chat_hidden-contain display-flex col-reverse">
                            {chat_inactive_arr.map((item, ix) => (
                                <div
                                    key={`${item.room_chat}`}
                                    className="Chat_hidden-item"
                                >
                                    <ChatItem
                                        index={item.index}
                                        chat_ix={ix}
                                        is_active={false}
                                        room_chat={item.room_chat}
                                        scroll_y={item.scroll_y}
                                        chat_item={item.chat_item}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//
Chat.propTypes = {};

export default Chat;
