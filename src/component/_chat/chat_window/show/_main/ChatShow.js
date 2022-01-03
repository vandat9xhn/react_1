import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
//
import { context_api } from '../../../../../_context/ContextAPI';
import ContextChat from '../../../../../_context/chat/ContextChat';
//
import { openChatAddFriend } from '../../__screen/type/add_friend/_main/ChatScreenAddFriend';
import { openScreenWithElm } from '../../../../_screen/type/with_elm/ScreenWithElm';
//
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
//
import {
    CHAT_ACTION_MEMBER_OBJ_1,
    CHAT_ACTION_MEMBER_OBJ_2,
} from '../../../../../_some_function/chat/action_member';
import { handleWsChat } from '../../../_ws/_main';
//
import ChatScreen from '../../__screen/_main/ChatScreen';
import ChatMemberScreen from '../../_components/member_screen/_main/ChatMemberScreen';
import ChatColorScreen from '../../_components/color/_main/ChatColorScreen';
import ChatEmojiScreen from '../../_components/emoji/_main/ChatEmojiScreen';
import ChatGroupNameScreen from '../../_components/group_name/_main/ChatGroupNameScreen';
import ChatNicknamesScreen from '../../_components/nicknames/_main/ChatNicknamesScreen';
//
import ChatHead from '../head/_main/ChatHead';
import ChatBd from '../body/_main/ChatBd';
import ChatF from '../footer/_main/ChatFoot';
//
import './ChatShow.scss';
import { WsSend } from '../../../../../_some_function/WsSend';
import { WS_CHAT_TYPE_OBJ } from '../../../_ws/_type';
import { openScreenConfirm } from '../../../../_screen/type/confirm/ScreenConfirm';

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
    const use_history = useHistory();

    //
    const {
        user,

        openScreenFloor,
        closeScreenFloor,
        openRoomChat,
        closeRoomChat,
    } = useContext(context_api);

    //
    const {
        room_chat,

        is_group,
        group_name,
        colour_arr,
        emoji,

        texting_obj,
        message_obj,
        room_obj,
        input_obj,
        canvas_obj,
    } = chat_item;

    const { user_input, num_input } = texting_obj;

    const { room_users, count_user, room_creator, room_owner } = room_obj;
    const room_users_not_leave = room_users.filter((item) => !item.leave);

    const is_on_input = user_input ? num_input >= 2 : num_input >= 1;

    //
    const ref_chat_screen = useRef(null);

    //
    const forceUpdate = useForceUpdate();

    // --------

    //
    const fake_ws = {
        send: (ws_event) => {
            handleWsChat({
                ws_event: { data: ws_event },
                chat_item: chat_item,
            });

            forceUpdate();
        },
    };

    /* -------------- */

    //
    function onFocusChatShow() {
        // room_obj.room_active = true;
        // shouldSendStatus();
        // forceUpdate();
    }

    //
    function onBlurChatShow() {
        // room_obj.room_active = false;
        // forceUpdate();
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

    // ------ ACTIONS COMMON

    //
    function openRoomWithElm({ elm }) {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: elm,
        });
    }

    //
    function updateScreenAction() {
        // forceUpdate();
        closeScreenFloor();
    }

    // ------

    //
    function changeColor(new_color_arr = []) {
        WsSend(fake_ws, {
            type: WS_CHAT_TYPE_OBJ.COLOUR,
            colour_arr: new_color_arr,
        });

        updateScreenAction();
    }

    //
    function changeEmoji(new_emoji = { name: '' }) {
        WsSend(fake_ws, {
            type: WS_CHAT_TYPE_OBJ.EMOJI,
            emoji: new_emoji,
        });

        updateScreenAction();
    }

    //
    function removeEmoji() {
        changeEmoji({ name: 'like' });
    }

    //
    function changeGroupName(new_group_name = '') {
        WsSend(fake_ws, {
            type: WS_CHAT_TYPE_OBJ.GROUP_NAME,
            group_name: new_group_name,
        });

        updateScreenAction();
    }

    //
    function changeNickName({ nickname, user_ix }) {
        WsSend(fake_ws, {
            type: WS_CHAT_TYPE_OBJ.NICKNAMES,
            nickname: nickname,
            user_id: room_users[user_ix].user.id,
        });
    }

    // ------ OPEN

    //
    function openRoomUsers() {
        openRoomWithElm({
            elm: (
                <ChatMemberScreen
                    room_users={room_users_not_leave}
                    openRoomRemoveMember={openRoomRemoveMember}
                    handleAction={handleActionGroup}
                    handleClose={closeScreenFloor}
                />
            ),
        });
    }

    //
    function openRoomColour() {
        openRoomWithElm({
            elm: (
                <ChatColorScreen
                    handleClose={closeScreenFloor}
                    changeColor={changeColor}
                />
            ),
        });
    }

    //
    function openRoomEmoji() {
        openRoomWithElm({
            elm: (
                <ChatEmojiScreen
                    emoji={emoji}
                    removeEmoji={removeEmoji}
                    changeEmoji={changeEmoji}
                    handleClose={closeScreenFloor}
                />
            ),
        });
    }

    //
    function openRoomGroupName() {
        openRoomWithElm({
            elm: (
                <ChatGroupNameScreen
                    group_name={group_name}
                    changeGroupName={changeGroupName}
                    handleClose={closeScreenFloor}
                />
            ),
        });
    }

    //
    function openRoomNicknames() {
        openRoomWithElm({
            elm: (
                <ChatNicknamesScreen
                    room_users={room_users.filter((item) => !item.leave)}
                    changeNickName={changeNickName}
                    handleClose={closeScreenFloor}
                />
            ),
        });
    }

    //
    function openRoomLeave() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Leave group chat?',
            notification:
                'You will stop receiving messages from this conversation and people will see that you left.',
            title_yes: 'Leave group',
            title_no: 'Cancel',

            handleConfirm: () => {
                WsSend(fake_ws, {
                    type: WS_CHAT_TYPE_OBJ.QUIT,
                });

                closeRoomChat(true, chat_ix);
                closeScreenFloor();
            },
        });
    }

    //
    function openRoomRemoveMember({ user_id, callback = () => {} }) {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Remove from chat?',
            notification:
                'Are you sure that you want to remove this person from the conversation? They will no longer be able to send or receive new messages.',
            title_yes: 'Remove from chat',
            title_no: 'Cancel',

            handleConfirm: () => {
                WsSend(fake_ws, {
                    type: WS_CHAT_TYPE_OBJ.QUIT,
                    admin_id: user.id,
                    user_id: user_id,
                });

                callback();
            },
        });
    }

    // ------ ACTIONS

    //
    function handleAction(action_name = '') {
        console.log(action_name);
        if (action_name == 'view_profile') {
            use_history.push(`/profile/${room_users[1].user.id}`);

            return;
        }

        if (action_name == 'add_member') {
            openChatAddFriend({
                openChatScreen: openChatScreen,
                ws: fake_ws,
                room_user_id_arr: room_users.map((item) => item.user.id),
            });

            return;
        }

        if (action_name == 'member') {
            openRoomUsers();

            return;
        }

        if (action_name == 'colour') {
            openRoomColour();

            return;
        }

        if (action_name == 'emoji') {
            openRoomEmoji();

            return;
        }

        if (action_name == 'group_name') {
            openRoomGroupName();

            return;
        }

        if (action_name == 'nicknames') {
            openRoomNicknames();

            return;
        }

        if (action_name == 'leave') {
            openRoomLeave();

            return;
        }
    }

    //
    function handleActionGroup({ action_name = '', user_id = 0 }) {
        if (action_name == CHAT_ACTION_MEMBER_OBJ_1.profile.name) {
            use_history.push(`/profile/${user_id}`);

            return;
        }

        if (action_name == CHAT_ACTION_MEMBER_OBJ_1.chat.name) {
            openRoomChat(user_id);
            closeScreenFloor();

            return;
        }

        // if (action_name == CHAT_ACTION_MEMBER_OBJ_2.remove_member.name) {
        //     openRoomRemoveMember({ user_id: user_id });

        //     return;
        // }

        if (action_name == CHAT_ACTION_MEMBER_OBJ_2.leave_group.name) {
            openRoomLeave();

            return;
        }

        console.log(action_name, user_id);
    }

    // console.log(chat_item);
    //
    return (
        <ContextChat
            chat_ix={chat_ix}
            scroll_y={scroll_y}
            ws={fake_ws}
            //
            is_group={is_group}
            group_name={group_name}
            colour_arr={colour_arr}
            emoji={emoji}
            //
            room_chat={room_chat}
            room_obj={room_obj}
            //
            openChatScreen={openChatScreen}
            closeChatScreen={closeChatScreen}
        >
            <div
                className={`ChatShow pos-fixed bottom-0 brs-5px box-shadow-fb overflow-hidden ${
                    chat_ix == 0 ? '' : 'ChatShow_second'
                } ${is_two_chat ? '' : 'ChatShow_single'}`}
                onFocus={onFocusChatShow}
                onBlur={onBlurChatShow}
            >
                <div className="ChatShow_contain display-flex flex-col pos-rel bg-primary overflow-hidden">
                    <div className="ChatShow_head">
                        <ChatHead
                            room_users={room_users}
                            room_users_not_leave={room_users_not_leave}
                            count_user={count_user}
                            room_owner={room_owner}
                            //
                            handleAction={handleAction}
                            openRoomUsers={openRoomUsers}
                        />
                    </div>

                    <div className="ChatShow_body flex-grow-1 overflow-hidden">
                        <div
                            className="pos-rel h-100per"
                            style={{
                                backgroundImage: room_obj.room_active
                                    ? `linear-gradient(to bottom, ${colour_arr.join(
                                          ', '
                                      )})`
                                    : 'none',
                                backgroundColor: room_obj.room_active
                                    ? undefined
                                    : 'var(--md-bg-ccc)',
                            }}
                        >
                            <ChatBd
                                chat_ix={chat_ix}
                                message_obj={message_obj}
                                is_on_input={is_on_input}
                                //
                                room_users={room_users}
                                room_users_not_leave={room_users_not_leave}
                                room_creator={room_creator}
                            />
                        </div>
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
