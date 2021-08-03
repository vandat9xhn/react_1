import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import { CHAT_INACTIVE_NUM } from '../../../_constant/Constant';
//
import { is_api_fake } from '../../../api/_ConstAPI';
//
import { handle_API_ChatZoom_R } from '../../../_handle_api/chat/ChatHandleAPI';
//
import { initial_chat_item } from '../../../_initial/chat/ChatInitial';
//
import { makeNewChat } from '../_func/makeNewChat';
//
import ChatShow from '../chat_window/show/_main/ChatShow';
import ChatWdHide from '../chat_window/_main/ChatWdHide';
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
                ws: null,
            },
        ],
        chat_inactive_arr: [] || [
            {
                room_chat: '',
                index: 0,
                scroll_y: 0,
                chat_item: initial_chat_item(),
                ws: null,
            },
        ],
    };

    //
    componentDidMount() {
        const session_room_chat = sessionStorage.session_room_chat;
        if (!session_room_chat) {
            return;
        }
        const room_chat_arr = session_room_chat.split(',').reverse();
        setTimeout(() => {
            for (const room_chat of room_chat_arr) {
                this.openRoomChat(room_chat);
            }
        }, 250);
    }

    /* ----------- */

    //
    getZoomChatWebsocket = (new_room_chat) => {
        const ws = !is_api_fake
            ? new WebSocket('ws://127.0.0.1:8000/ws/message/' + new_room_chat)
            : {
                  send: (data) => {
                      console.log(data);
                  },
              };

        return ws;
    };

    //
    saveRoomChatToSession = () => {
        sessionStorage.session_room_chat = this.state.chat_active_arr
            .map((item) => item.room_chat)
            .join(',');
    };

    //
    removeRoomChatFromSession = (remove_room_chat = '') => {
        sessionStorage.session_room_chat = sessionStorage.session_room_chat
            .replace(remove_room_chat, '')
            .replace(',', '');
    };

    //
    getChatBodyScrollY = (active_ix) => {
        return document
            .getElementsByClassName('Chat_active-item')
            [active_ix].getElementsByClassName('ChatWd_body-contain')[0]
            .scrollTop;
    };

    //
    handleHideZoomChat = (active_index = 0) => {
        const { chat_active_arr, chat_inactive_arr } = this.state;

        const chat_active_splice_obj = chat_active_arr.splice(
            active_index,
            1
        )[0];
        chat_active_splice_obj.scroll_y = this.getChatBodyScrollY(active_index);

        chat_inactive_arr.push(chat_active_splice_obj);
        this.removeRoomChatFromSession(chat_active_splice_obj.room_chat);
    };

    /* ----------- */

    //
    openRoomChat = async (new_room_chat) => {
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
        } else {
            const data = await handle_API_ChatZoom_R(new_room_chat);

            chat_active_arr.unshift({
                room_chat: new_room_chat,
                index: chat_active_arr.length + chat_inactive_arr.length,
                scroll_y: 0,
                chat_item: makeNewChat(data),
                ws: this.getZoomChatWebsocket(new_room_chat),
            });
        }

        this.setState({});
        this.saveRoomChatToSession();
    };

    //
    hideRoomChat = (active_index = 0) => {
        this.handleHideZoomChat(active_index);
        this.setState({});
    };

    //
    hideAllRoomChat = () => {
        const { chat_active_arr, chat_inactive_arr } = this.state;

        this.setState({
            chat_active_arr: [],
            chat_inactive_arr: [...chat_inactive_arr, ...chat_active_arr],
        });

        sessionStorage.session_room_chat = '';
    };

    //
    closeRoomChat = (is_chat_open = true, close_index = 0) => {
        const { chat_active_arr, chat_inactive_arr } = this.state;

        if (is_chat_open) {
            const remove_room_chat = chat_active_arr.splice(close_index, 1)[0]
                .room_chat;

            this.removeRoomChatFromSession(remove_room_chat);
        } else {
            chat_inactive_arr.splice(close_index, 1);
        }

        this.setState({});
    };

    //
    closeAllRoomChat = () => {
        this.setState({
            chat_active_arr: [],
            chat_inactive_arr: [],
        });

        sessionStorage.session_room_chat = '';
    };

    //
    render() {
        //
        const { chat_active_arr, chat_inactive_arr } = this.state;

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
                                <ChatShow
                                    chat_ix={ix}
                                    is_two_chat={chat_active_arr.length == 2}
                                    //
                                    index={item.index}
                                    ws={item.ws}
                                    scroll_y={item.scroll_y}
                                    room_chat={item.room_chat}
                                    chat_item={item.chat_item}
                                />
                            </div>
                        ))}
                    </div>

                    {chat_inactive_arr.length ? (
                        <div className="Chat_hidden">
                            <ChatWdHide
                                chat_inactive_arr={chat_inactive_arr}
                                is_two_long_chat_inactive={
                                    chat_inactive_arr.length >=
                                    CHAT_INACTIVE_NUM + 2
                                }
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

//
Chat.propTypes = {};

export default Chat;
