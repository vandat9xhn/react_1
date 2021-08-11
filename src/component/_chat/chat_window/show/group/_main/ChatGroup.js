import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_chat } from '../../../../../../_context/chat/ContextChat';
import { context_api } from '../../../../../../_context/ContextAPI';
// 
import { WsSend } from '../../../../../../_some_function/WsSend';
// 
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import YesNoDiv from '../../../../../some_div/yes_no_div/YesNoDiv';
//
import { openChatTimeLine } from '../../../__screen/type/time_line/ChatScreenTimeLine';
import { openChatAddFriend } from '../../../__screen/type/add_friend/_main/ChatScreenAddFriend';
// 
import './ChatGroup.scss';

//
ChatGroup.propTypes = {};

//
function ChatGroup({ room_users }) {
    //
    const { closeRoomChat } = useContext(context_api);

    const { openChatScreen, ws, room_chat, chat_ix } = useContext(context_chat);

    //
    const [group_state, setGroupState] = useState({
        open_quit: false,
        show_action_group: false,
    });

    const { open_quit, show_action_group } = group_state;

    //
    function openQuitGroup() {
        setGroupState({
            ...group_state,
            open_quit: true,
        });
    }

    //
    function closeQuitGroup() {
        setGroupState({
            ...group_state,
            open_quit: false,
        });
    }

    /*---------------------------*/

    //
    function toggleChatGroup() {
        setGroupState({
            ...group_state,
            open_quit: false,
            show_action_group: !show_action_group,
        });
    }

    //
    function handleToggleNotice() {
        console.log('toggle notice');
    }

    //
    function openTimeLine() {
        openChatTimeLine({
            openChatScreen: openChatScreen,
            time_line_arr: [],
            room_chat: room_chat,
        });
    }

    //
    function openAddFriendToGroup() {
        openChatAddFriend({
            openChatScreen: openChatScreen,
            ws: ws,
            room_user_id_arr: room_users.map((item) => item.user.id),
        });
    }

    //
    function handleQuitGroup() {
        closeRoomChat(true, chat_ix);

        WsSend(ws, {
            type: 'quit',
        });
    }

    //
    return (
        <div className="ChatGroup position-rel">
            <div className="ChatGroup_row-icon display-flex">
                <div
                    className={`ChatGroup_icon brs-50 close-icon-small hv-opacity cursor-pointer ${
                        show_action_group
                            ? 'ChatGroup_icon-show'
                            : 'ChatGroup_icon-close'
                    }`}
                    onClick={toggleChatGroup}
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            </div>

            <div
                className={`ChatGroup_contain box-shadow-1 ${
                    !show_action_group || open_quit
                        ? 'ChatGroup_close'
                        : 'ChatGroup_show scroll-width-0'
                }`}
            >
                {[
                    { title: 'Time line', handleClick: openTimeLine },
                    {
                        title: 'Add friend',
                        handleClick: openAddFriendToGroup,
                    },
                    { title: 'Toggle notice', handleClick: handleToggleNotice },
                    { title: 'Quit group', handleClick: openQuitGroup },
                ].map((item, ix) => (
                    <div
                        key={`${ix}`}
                        className="ChatGroup__choice"
                        onClick={item.handleClick}
                    >
                        {item.title}
                    </div>
                ))}
            </div>

            <div
                className={`ChatGroup__quit-confirm brs-5px box-shadow-1 ${
                    open_quit
                        ? 'ChatGroup__quit-confirm-open'
                        : 'ChatGroup__quit-confirm-close'
                }`}
            >
                <div>Do you want to quit this group?</div>

                <YesNoDiv
                    handleYes={handleQuitGroup}
                    handleNo={closeQuitGroup}
                />
            </div>
        </div>
    );
}

export default ChatGroup;
