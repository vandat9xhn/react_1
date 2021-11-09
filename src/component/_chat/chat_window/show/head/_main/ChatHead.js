import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import { context_chat } from '../../../../../../_context/chat/ContextChat';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ChatHeadGroupPic from '../group_pic/ChatHeadGroupPic';
import ChatHeadUserPic from '../user_pic/ChatHeadUserPic';
import ChatHeadName from '../name/ChatHeadName';
import ChatHeadRight from '../right/ChatHeadRight';
//
import './ChatHead.scss';

//
ChatHead.propTypes = {};

ChatHead.defaultProps = {};

//
function ChatHead({
    room_users,
    room_owner,
    count_user,

    handleAction,
    openRoomUsers,
}) {
    //
    const { hideRoomChat, closeRoomChat } = useContext(context_api);

    const {
        ws,
        chat_ix,

        is_group,
        group_name,
        room_obj,
        colour_arr,
    } = useContext(context_chat);

    const head_name = is_group
        ? group_name ||
          `${room_users
              .slice(1)
              .map((item) => item.nickname || item.user.last_name)
              .join(', ')} and ${
              room_users[0].nickname || room_users[0].user.last_name
          }`
        : room_users[1].nickname ||
          `${room_users[1].user.first_name} ${room_users[1].user.last_name}`;

    // ---------

    //
    function handleHideRoomChat() {
        hideRoomChat(chat_ix);
    }

    //
    function handleCloseRoomChat() {
        closeRoomChat(true, chat_ix);
    }

    //
    return (
        <div className="ChatHead pos-rel padding-4px border-bottom-blur box-shadow-1 user-select-none">
            <div className="ChatHead_row flex-between-center h-100per">
                <div className="display-flex align-items-center pos-rel padding-4px">
                    <div className="pos-rel z-index-1 padding-right-8px">
                        {is_group ? (
                            <ChatHeadGroupPic
                                room_users={room_users}
                                openRoomUsers={openRoomUsers}
                            />
                        ) : (
                            <ChatHeadUserPic
                                id={room_users[1].user.id}
                                picture={room_users[1].user.picture}
                            />
                        )}
                    </div>

                    <div className="ChatHead_name pos-rel z-index-1 cursor-pointer">
                        <ChatHeadName
                            is_group={is_group}
                            title_action={
                                <div className="ChatHead_name_btn display-flex-center font-500">
                                    <div className="ChatHead_name_text margin-right-8px text-nowrap">
                                        {head_name}
                                    </div>

                                    <div className="display-flex-center rotate-90 text-third">
                                        <IconsArrow x={200} size_icon="12px" />
                                    </div>
                                </div>
                            }
                            handleAction={handleAction}
                        />
                    </div>

                    <div className="ChatHead_name_bg pos-abs-100 display-none brs-6px bg-ccc pointer-events-none"></div>
                </div>

                <div
                    className="ChatHead_right padding-4px"
                    style={{
                        color: room_obj.room_active
                            ? colour_arr[0]
                            : 'var(--md-color-third)',
                    }}
                >
                    <ChatHeadRight
                        handleHideRoomChat={handleHideRoomChat}
                        handleCloseRoomChat={handleCloseRoomChat}
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatHead;
