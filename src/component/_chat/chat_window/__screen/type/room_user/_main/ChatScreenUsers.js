import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import ChatScreenUserItem from '../item/ChatScreenUserItem';

//
export function openChatUser({ openChatScreen, ws, room_users, owner_id }) {
    openChatScreen({
        ChatFloorComponent: ChatScreenUsers,
        ws: ws,
        owner_id: owner_id,
        room_users: room_users,
    });
}

//
ChatScreenUsers.propTypes = {};

//
function ChatScreenUsers({ room_users, owner_id, ws }) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <div className="chat-screen-list">
            <div>
                {room_users.map((room_user, user_ix) => (
                    <div key={`${user_ix}`}>
                        <ChatScreenUserItem
                            is_owner={owner_id == user.id}
                            is_user={room_user.id == user.id}
                            room_user={room_user}
                            ws={ws}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatScreenUsers;
