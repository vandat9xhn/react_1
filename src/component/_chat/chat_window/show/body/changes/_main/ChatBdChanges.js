import React from 'react';
import PropTypes from 'prop-types';
//
import { CHAT_MESS_TYPE } from '../../../../../../../_data/chat/mess_type';
//
import ChatBdAddFriend from '../add_friend/ChatBdAddFriend';
import ChatBdChangeColour from '../colour/ChatBdChangeColour';
import ChatBdChangeEmoji from '../emoji/ChatBdChangeEmoji';
import ChatBdChangeLeave from '../leave/ChatBdChangeLeave';
import ChatBdChangeMakeAdmin from '../make_admin/ChatBdChangeMakeAdmin';
import ChatBdChangeNickname from '../nickname/ChatBdChangeNickname';
import ChatBdChangeRemoveAdmin from '../remove_admin/ChatBdChangeRemoveAdmin';
import ChatBdChangeRemoveFriend from '../remove_friend/ChatBdChangeRemoveFriend';
import ChatBdChangeGroupName from '../group_name/ChatBdChangeGroupName';

//
const CHANGE_COMPONENT_OBJ = {
    [CHAT_MESS_TYPE.ADD_FRIEND]: ChatBdAddFriend,
    [CHAT_MESS_TYPE.LEAVE]: ChatBdChangeLeave,
    [CHAT_MESS_TYPE.REMOVE_FRIEND]: ChatBdChangeRemoveFriend,
    [CHAT_MESS_TYPE.MAKE_ADMIN]: ChatBdChangeMakeAdmin,
    [CHAT_MESS_TYPE.REMOVE_ADMIN]: ChatBdChangeRemoveAdmin,

    [CHAT_MESS_TYPE.COLOUR]: ChatBdChangeColour,
    [CHAT_MESS_TYPE.EMOJI]: ChatBdChangeEmoji,
    [CHAT_MESS_TYPE.NICKNAME]: ChatBdChangeNickname,

    [CHAT_MESS_TYPE.GROUP_NAME]: ChatBdChangeGroupName,
};

//
ChatBdChanges.propTypes = {};

//
function ChatBdChanges({ mess_item }) {
    //
    const { type } = mess_item;

    const ChangeComponent = CHANGE_COMPONENT_OBJ[type];

    // console.log(type);

    //
    return (
        <div className="bg-primary line-13px font-11px text-align-center text-secondary">
            <ChangeComponent {...mess_item} />
        </div>
    );
}

export default ChatBdChanges;
