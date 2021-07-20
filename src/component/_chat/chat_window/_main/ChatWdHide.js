import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { CHAT_INACTIVE_NUM, IS_MOBILE } from '../../../../_constant/Constant';
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
    const [state_obj, setStateObj] = useState({
        is_show_chat_hide: true,
    });

    const { is_show_chat_hide } = state_obj;

    //
    function toggleChatInactive() {
        setStateObj({
            is_show_chat_hide: !is_show_chat_hide,
        });
    }

    //
    return (
        <div className="ChatWdHidden position-rel">
            <div
                className={`ChatWdHidden_options ${
                    IS_MOBILE || !is_show_chat_hide ? '' : 'display-none'
                } ${is_show_chat_hide ? '' : 'ChatWdHidden_options-hide'}`}
            >
                <ChatOptions
                    is_show_chat_hide={is_show_chat_hide}
                    toggleChatInactive={toggleChatInactive}
                />
            </div>

            <div
                className={`ChatWdHidden_room position-rel ${
                    is_show_chat_hide
                        ? 'ChatWdHidden_room-show'
                        : 'ChatWdHidden_room-hide'
                }`}
            >
                <div className="ChatWdHidden_room-contain">
                    <div>
                        {chat_inactive_arr
                            .slice(
                                0,
                                CHAT_INACTIVE_NUM +
                                    (is_two_long_chat_inactive ? 0 : 1)
                            )
                            .map((item, ix) => (
                                <div
                                    key={`${item.room_chat}`}
                                    className="ChatWdHidden_item display-flex col-reverse"
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

                    <div>
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
