import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { CHAT_INACTIVE_NUM } from '../../../../_constant/Constant';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import ChatOptions from '../options/ChatOptions';
import ChatHide from '../hide/_main/ChatHide';
import ChatHideMore from '../hide_more/_main/ChatHideMore';
//
import './ChatWdHide.scss';

//
ChatWdHide.propTypes = {};

//
function ChatWdHide({ chat_inactive_arr, is_two_long_chat_inactive }) {
    //
    const { hideAllRoomChat } = useContext(context_api);

    //
    const count_hide_item = !is_two_long_chat_inactive
        ? chat_inactive_arr.length
        : CHAT_INACTIVE_NUM + 1;

    //
    const [state_obj, setStateObj] = useState({
        is_show_chat_hide: true,
        open_options: false,
    });

    const { is_show_chat_hide, open_options } = state_obj;

    // --------

    //
    function toggleChatInactive() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                open_options: false,
                is_show_chat_hide: !state_obj.is_show_chat_hide,
            };
        });
    }

    //
    function toggleOptions() {
        setStateObj((state_obj) => {
            // console.log(!state_obj.open_options);
            const _open_options = !state_obj.open_options;
            return { ...state_obj, open_options: _open_options };
        });
    }

    //
    function closeOptions() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                open_options: false,
            };
        });
    }

    //
    function handleHideAllZoomChat() {
        hideAllRoomChat();
        closeOptions();
    }

    //
    return (
        <div className="ChatWdHidden pos-rel user-select-none">
            <div
                className={`ChatWdHidden_options ${
                    !is_show_chat_hide || open_options ? '' : 'display-none'
                } 
               
                `}
                style={{
                    bottom: `${
                        !is_show_chat_hide ? 52 : count_hide_item * 52
                    }px`,
                }}
            >
                <ChatOptions
                    is_show_chat_hide={is_show_chat_hide}
                    open_options={open_options}
                    //
                    toggleChatInactive={toggleChatInactive}
                    toggleOptions={toggleOptions}
                    closeOptions={closeOptions}
                    handleHideAllZoomChat={handleHideAllZoomChat}
                />
            </div>

            <div
                className={`ChatWdHidden_room pos-rel ${
                    is_show_chat_hide
                        ? 'ChatWdHidden_room-show'
                        : 'ChatWdHidden_room-hide'
                }`}
            >
                <div
                    className="ChatWdHidden_room_contain"
                    style={{ height: `${count_hide_item * 52}px` }}
                >
                    <div>
                        {chat_inactive_arr
                            .slice(
                                0,
                                CHAT_INACTIVE_NUM +
                                    (is_two_long_chat_inactive ? 0 : 1)
                            )
                            .map((item, ix) => (
                                <div
                                    key={item.room_chat}
                                    className="ChatWdHidden_item display-flex col-reverse"
                                    style={{
                                        transform: `translateY(-${
                                            ((is_two_long_chat_inactive
                                                ? CHAT_INACTIVE_NUM + 1
                                                : chat_inactive_arr.length) -
                                                1 -
                                                ix) *
                                            52
                                        }px)`,
                                    }}
                                >
                                    <ChatHide
                                        chat_ix={ix}
                                        ws={item.ws}
                                        index={item.index}
                                        room_chat={item.room_chat}
                                        chat_item={item.chat_item}
                                    />
                                </div>
                            ))}
                    </div>

                    <div className="ChatWdHidden_more">
                        {is_two_long_chat_inactive ? (
                            <ChatHideMore
                                chat_inactive_more_arr={chat_inactive_arr.slice(
                                    CHAT_INACTIVE_NUM
                                )}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatWdHide;
