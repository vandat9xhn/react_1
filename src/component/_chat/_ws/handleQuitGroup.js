import { CHAT_MESS_TYPE } from '../../../_data/chat/mess_type';
import { getRandomBool } from '../../../_default/_common/default_bool';
import { initial_chat_item } from '../../../_initial/chat/ChatInitial';

//
export function handleQuitGroup({
    chat_item = initial_chat_item(),
    admin_id = 1,
    user_id = 0,
}) {
    const user_ix = chat_item.room_obj.room_users.findIndex(
        (item) => item.user.id == user_id
    );
    const admin_ix = chat_item.room_obj.room_users.findIndex(
        (item) => item.user.id == admin_id
    );

    console.log(user_ix);
    chat_item.room_obj.room_users[user_ix].leave = true;

    chat_item.message_obj.messages.unshift({
        id: getRandomBool(),
        type:
            admin_id > 0 ? CHAT_MESS_TYPE.REMOVE_FRIEND : CHAT_MESS_TYPE.LEAVE,
        admin: admin_id <= 0 ? null : chat_item.room_obj.room_users[admin_ix].user,
        user: chat_item.room_obj.room_users[user_ix].user,

        profile_model: user_id,
        room_model: chat_item.room_chat,
        created_time: new Date().toString(),
    });
}
