import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../api/_ConstAPI';
//
import {
    handleSendAddFriendToGroupWs,
    handleSendDeleteMessageWs,
    handleSendForceQuitGroupWs,
    handleSendLikeMessageWs,
    HandleSendMessageWs,
    handleSendOnInputWs,
    handleSendQuitGroupWs,
    handleSendStatusMessageWs,
} from '../__ws/ChatHandleWs';
import { handle_API_ChatMessage_C } from '../../__handle_api/ChatHandleAPI';
//
import './ChatWdRealtime.scss';
//
import ChatH from '../head/ChatHWs';
import ChatBd from '../body/_main/ChatBd';
import ChatF from '../footer/_main/ChatFWs';
import ActionsGroup from '../actions_message/group/ActionsGroup';
import ActionsChat from '../actions_message/_main/ActionsChat';

//
ChatWd.propTypes = {};

//
function ChatWd({
    c_user_id,
    chat,
    chat_ix,
    new_chat_ix,
    two_window,
    //
    reverseCurrentMessage,
    hideShowMessage,
    closeMessage,
    handleScroll,
    getMoreMessages,
    handleMouseLeave,
    //
    openZoomVidPics,
    handleToggleActionsGroup,
    handleToggleNotice,
    //
    openActionsMess,
    closeActionsMess,
    getMoreUserLiked,
    getMoreTimeLineGroup,
    getMoreFriendsAddToGroup,
    //
    letDrawCanvas,
    handleChooseFiles,
    moreActionsIp,
    showPreview,
    deleteAnItemPreview,
    deleteCanvasDraw,
    // SEND
    sendLikeMessage,
    sendStatusMessage,
    sendDeleteMessage,
    sendMessage,
    sendAddFriendToGroup,
    sendQuitGroup,
    sendForceQuitGroup,
    // HANDLE
    handleLikeMessage,
    handleOnInPut,
    handleStatusMessage,
    handleGetMessage,
    handleDeleteMessage,
    handleAddFriendToGroup,
    handleQuitGroup,
    handleForceQuitGroup,
}) {
    //
    const {
        chat_obj,
        message_obj,
        zoom_obj,
        group_obj,
        input_obj,
        canvas_obj,
        scroll_obj,
        actions_obj,
    } = chat;

    const { is_hide, more_input, show_preview, user_input, num_input } =
        chat_obj;

    const { is_group, show_action_group } = group_obj;

    const {
        zoom_chat,
        zoom_active,
        zoom_users,
        count_user,
        zoom_creator,
        zoom_owner,
    } = zoom_obj;

    const { messages, count_message, user_begin_mess } = message_obj;
    const { files, urls, file_reading } = input_obj;
    const { current_canvas } = canvas_obj;
    const { fetching_message } = scroll_obj;

    const should_send = urls.length > 0 || current_canvas != '';
    const is_on_input = user_input ? num_input >= 2 : num_input >= 1;

    // ref
    const ws = useRef(null);

    /* ------------------------------------------- */

    //
    useEffect(() => {
        !is_api_fake &&
            c_user_id &&
            (ws.current = new WebSocket(
                'ws://127.0.0.1:8000/ws/message/' +
                    zoom_chat +
                    '?user_id=' +
                    c_user_id
            ));
        is_api_fake &&
            (ws.current = {
                send: (data) => {
                    console.log(data);
                },
            });

        if (!is_api_fake && ws.current != null) {
            ws.current.onopen = () => {
                console.log('ok');
            };

            ws.current.onmessage = (e) => {
                handleWsMessage(e);
            };
        }

        return () => {
            if (!is_api_fake && ws.current != null) {
                ws.current.close();
            }
        };
    }, []);

    //
    useEffect(() => {
        shouldSendStatus();
    }, []);

    //
    function handleWsMessage(e) {
        const data = JSON.parse(e.data);
        const { type } = data;

        if (type == 'mess') {
            const { new_mess_id } = data;
            handleGetMessage({ ...data, chat_ix: chat_ix });

            if (zoom_active) {
                if (!is_hide) {
                    sendStatusMessageWs(new_mess_id, 'seen');
                } else {
                    sendStatusMessageWs(new_mess_id, 'receive');
                }
            }
        }
        //
        else if (type == 'on_input') {
            handleOnInPut({ chat_ix: chat_ix, ...data });
        }
        //
        else if (type == 'status_mess') {
            const { mess_id } = data;
            mess_id > user_begin_mess &&
                handleStatusMessage({ ...data, chat_ix: chat_ix });
        }
        //
        else if (type == 'like_message') {
            const { mess_id } = data;
            mess_id > user_begin_mess &&
                handleLikeMessage({ ...data, chat_ix: chat_ix });
        }
        //
        else if (type == 'delete_message') {
            const { mess_id } = data;
            mess_id > user_begin_mess &&
                handleDeleteMessage({ ...data, chat_ix: chat_ix });
        }
        //
        else if (type == 'add_friend') {
            handleAddFriendToGroup({
                ...data,
                chat_ix: chat_ix,
                begin_mess: messages[messages.length - 1].id,
            });
        }
        //
        else if (type == 'quit') {
            handleQuitGroup({ chat_ix: chat_ix, ...data });
        }
        //
        else if (type == 'force_quit') {
            handleForceQuitGroup({ chat_ix: chat_ix, ...data });
        }
    }

    //
    function shouldSendStatus() {
        const last_message = messages[messages.length - 1];
        if (last_message) {
            const { id } = last_message;

            if (zoom_users[zoom_users.length - 1].id_seen_mess < id) {
                sendStatusMessageWs(id, 'seen');
            }
        }
    }

    /* ------------------------ WS SEND ----------------------------*/

    //
    async function sendMessageWs(chat_ix, message) {
        if (current_canvas || files.length || message.trim()) {
            sendMessage(chat_ix);
            const data = await handle_API_ChatMessage_C(
                zoom_chat,
                message,
                current_canvas,
                files
            );
            const { id, message: new_message, vid_pics } = data;
            const new_vid_pics = vid_pics.map((item) => item.vid_pic);

            HandleSendMessageWs(ws.current, id, new_message, new_vid_pics);
        }
    }

    //
    function sendOnInputWs(on_input) {
        chat_obj.user_input = on_input;
        handleSendOnInputWs(ws.current, on_input);
    }

    //
    function sendStatusMessageWs(new_mess_id, status_mess) {
        handleSendStatusMessageWs(ws.current, new_mess_id, status_mess);
        sendStatusMessage(chat_ix);
    }

    //
    function sendLikeMessageWs(type_like) {
        const { mess_id } = actions_obj.like;
        handleSendLikeMessageWs(ws.current, mess_id, type_like);
        sendLikeMessage(chat_ix);
    }

    //
    function sendDeleteMessageWs() {
        const { mess_id } = actions_obj.edit;
        handleSendDeleteMessageWs(ws.current, mess_id);
        sendDeleteMessage(chat_ix);
    }

    //
    function sendAddFriendToGroupWs(friend_ix, friend_id) {
        handleSendAddFriendToGroupWs(ws.current, friend_id);
        sendAddFriendToGroup(chat_ix, friend_ix);
    }

    //
    function sendQuitGroupWs() {
        handleSendQuitGroupWs(ws.current);
        sendQuitGroup(chat_ix);
    }

    //
    function sendForceQuitGroupWs(friend_id) {
        handleSendForceQuitGroupWs(ws.current, friend_id);
        sendForceQuitGroup(chat_ix);
    }

    /* ------------------------------------------- */

    //
    function onFocusChatWd() {
        zoom_obj.zoom_active = true;
        shouldSendStatus();
    }

    //
    function onBlurChatWd() {
        zoom_obj.zoom_active = false;
    }

    //
    return (
        <div
            className={`ChatWd ${
                new_chat_ix == chat_ix ? '' : 'ChatWd_second'
            } ${two_window ? '' : 'ChatWd_single'}`}
            onFocus={onFocusChatWd}
            onBlur={onBlurChatWd}
        >
            <div
                className={`ChatWd_reverse brs-5px display-none ${
                    is_hide || !two_window ? '' : 'ChatWd_reverse-display'
                }`}
                onClick={reverseCurrentMessage}
            >
                {`< >`}
            </div>

            <div className="ChatWd_contain brs-5px box-shadow-1">
                <div className="ChatWd_head">
                    <ChatH
                        chat_ix={chat_ix}
                        is_group={is_group}
                        zoom_users={zoom_users}
                        is_hide={is_hide}
                        count_user={count_user}
                        //
                        openActionsMess={openActionsMess}
                        hideShowMessage={hideShowMessage}
                        closeMessage={closeMessage}
                    />

                    {is_group && (
                        <div className="ChatWd_group position-abs">
                            <ActionsGroup
                                chat_ix={chat_ix}
                                show_action_group={show_action_group}
                                openActionsMess={openActionsMess}
                                handleToggleActionsGroup={
                                    handleToggleActionsGroup
                                }
                                handleToggleNotice={handleToggleNotice}
                                handleQuitGroup={sendQuitGroupWs}
                            />
                        </div>
                    )}
                </div>

                <div className={is_hide ? 'display-none' : ''}>
                    <div className="ChatWd_body">
                        <ChatBd
                            zoom_chat={zoom_chat}
                            chat_ix={chat_ix}
                            messages={messages}
                            count_message={count_message}
                            fetching_message={fetching_message}
                            is_on_input={is_on_input}
                            //
                            is_group={is_group}
                            zoom_users={zoom_users}
                            zoom_creator={zoom_creator}
                            //
                            handleScroll={handleScroll}
                            handleMouseLeave={handleMouseLeave}
                            //
                            getMoreMessages={getMoreMessages}
                            openZoomVidPics={openZoomVidPics}
                            openActionsMess={openActionsMess}
                        />
                    </div>

                    <div className="ChatWd_footer">
                        <ChatF
                            chat_ix={chat_ix}
                            more_input={more_input}
                            should_send={should_send}
                            //
                            letDrawCanvas={letDrawCanvas}
                            handleChooseFiles={handleChooseFiles}
                            moreActionsIp={moreActionsIp}
                            //
                            sendOnInput={sendOnInputWs}
                            handleSend={sendMessageWs}
                            //
                            show_preview={show_preview}
                            showPreview={showPreview}
                            //
                            current_canvas={current_canvas}
                            urls={urls}
                            file_reading={file_reading}
                            deleteAnItemPreview={deleteAnItemPreview}
                            deleteCanvasDraw={deleteCanvasDraw}
                        />
                    </div>

                    {actions_obj.type && (
                        <div className="ChatWd_actions pos-abs-100">
                            <ActionsChat
                                chat_ix={chat_ix}
                                is_group={is_group}
                                actions_obj={actions_obj}
                                zoom_users={zoom_users}
                                zoom_owner={zoom_owner}
                                //
                                getMoreTimeLineGroup={getMoreTimeLineGroup}
                                getMoreFriendsAddToGroup={getMoreFriendsAddToGroup}
                                getMoreUserLiked={getMoreUserLiked}
                                closeActionsMess={closeActionsMess}
                                //
                                sendDeleteMessageWs={sendDeleteMessageWs}
                                sendLikeMessageWs={sendLikeMessageWs}
                                sendForceUserQuit={sendForceQuitGroupWs}
                                sendAddFriendToGroupWs={sendAddFriendToGroupWs}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChatWd;
