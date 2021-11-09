import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../_some_function/GetIdSlug';
import { getRoomChatWebsocket } from '../../_func/getRoomChatWs';
//
import { initial_chat_item } from '../../../../_initial/chat/ChatInitial';
//
import { handle_API_ChatZoom_R } from '../../../../_handle_api/chat/ChatHandleAPI';
//
import { makeNewChat } from '../../_func/makeNewChat';
//
import ChatShow from '../../chat_window/show/_main/ChatShow';
import { toggleAppHiddenTemp } from '../../../../_some_function/AppHiddenTemp';
import { useScreenFetching } from '../../../../_hooks/UseScreenFetching';
//
// import './Chat.scss';

//
ChatMobile.propTypes = {};

//
function ChatMobile(props) {
    //
    const [chat_obj, setChatObj] = useState({
        room_chat: GetIdSlug(),
        chat_item: initial_chat_item(),
        ws: null,
        has_fetched: false,
    });

    const { room_chat, chat_item, ws, has_fetched } = chat_obj;

    //
    const { id } = useParams();

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        toggleAppHiddenTemp({ is_hidden: true });

        return () => {
            toggleAppHiddenTemp({ is_hidden: false });
        };
    }, []);

    //
    useEffect(() => {
        openRoomChat(room_chat);
    }, [id]);

    //
    const openRoomChat = async (new_room_chat) => {
        const data = await handleScreenFetching(() =>
            handle_API_ChatZoom_R(new_room_chat)
        );

        setChatObj({
            ...chat_obj,
            room_chat: new_room_chat,
            chat_item: makeNewChat(data),
            ws: getRoomChatWebsocket(new_room_chat),
            has_fetched: true,
        });
    };

    //
    if (!has_fetched) {
        return null;
    }

    //
    return (
        <div key={id} className="ChatMobile">
            <ChatShow
                chat_ix={0}
                is_two_chat={false}
                //
                index={0}
                ws={ws}
                scroll_y={0}
                room_chat={room_chat}
                chat_item={chat_item}
            />
        </div>
    );
}

export default ChatMobile;
