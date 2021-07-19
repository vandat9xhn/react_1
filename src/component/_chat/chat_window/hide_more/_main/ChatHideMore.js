import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    CHAT_INACTIVE_NUM,
    IS_MOBILE,
} from '../../../../../_constant/Constant';
//
import ChatHideMoreRoom from '../room/ChatHideMoreRoom';
//
import './ChatHideMore.scss';
import CloseDiv from '../../../../some_div/close_div/CloseDiv';

//
ChatHideMore.propTypes = {};

//
function ChatHideMore({ chat_inactive_more_arr }) {
    //
    const f_user =
        chat_inactive_more_arr[0].chat_item.room_obj.room_users[1].user;

    const count_room = chat_inactive_more_arr.length;

    //
    const [hide_more_state, setHideMoreState] = useState({
        open_room: false,
    });

    const { open_room } = hide_more_state;

    //
    function toggleRoomHideMore() {
        IS_MOBILE &&
            setHideMoreState({
                ...hide_more_state,
                open_room: !open_room,
            });
    }

    //
    function closeRoomHideMore() {
        IS_MOBILE &&
            open_room &&
            setHideMoreState({
                ...hide_more_state,
                open_room: false,
            });
    }

    //
    return (
        <CloseDiv makeDivHidden={closeRoomHideMore}>
            <div className="padding-4px">
                <div
                    className={`ChatHideMore ${
                        IS_MOBILE ? '' : 'ChatHideMore_hv'
                    }`}
                >
                    <div className="position-rel">
                        <div
                            className="ChatHideMore_picture"
                            data-length={count_room}
                            onClick={toggleRoomHideMore}
                        >
                            <img
                                className="brs-50"
                                src={f_user.picture}
                                alt=""
                                width="45"
                                height="45"
                            />
                        </div>

                        <div
                            className={`ChatHideMore_room ${
                                open_room ? '' : 'display-none'
                            }`}
                        >
                            <div className="chat-hide-padding">
                                <div className="ChatHideMore_room-contain bg-primary box-shadow-fb brs-5px">
                                    {chat_inactive_more_arr.map((item, ix) => (
                                        <div key={`${item.room_chat}`}>
                                            <ChatHideMoreRoom
                                                {...item}
                                                chat_ix={ix + CHAT_INACTIVE_NUM}
                                                closeRoomHideMore={
                                                    closeRoomHideMore
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default ChatHideMore;
