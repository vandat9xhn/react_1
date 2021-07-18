import React from 'react';
import PropTypes from 'prop-types';
//
import ChatHideMoreRoom from '../room/ChatHideMoreRoom';
//
import './ChatHideMore.scss';

//
ChatHideMore.propTypes = {};

//
function ChatHideMore({ chat_inactive_more_arr }) {
    //
    const f_user =
        chat_inactive_more_arr[0].chat_item.room_obj.room_users[1].user;

    const count_room = chat_inactive_more_arr.length;

    //
    return (
        <div>
            <div className="ChatHideMore">
                <div className="position-rel">
                    <div
                        className="ChatHideMore_picture"
                        data-length={count_room}
                    >
                        <img
                            className="brs-50"
                            src={f_user.picture}
                            alt=""
                            width="45"
                            height="45"
                        />
                    </div>

                    <div className="ChatHideMore_room display-none">
                        <div className="chat-hide-padding">
                            <div className="ChatHideMore_room-contain bg-primary box-shadow-fb brs-5px">
                                {chat_inactive_more_arr.map((item, ix) => (
                                    <div key={`${item.room_chat}`}>
                                        <ChatHideMoreRoom
                                            {...item}
                                            chat_ix={ix + 4}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatHideMore;
