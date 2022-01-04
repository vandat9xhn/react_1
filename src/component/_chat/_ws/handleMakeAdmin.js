import { getRandomBool } from '../../../_default/_common/default_bool';
// 
import { CHAT_MESS_TYPE } from '../../../_data/chat/mess_type';
import { initial_chat_item } from '../../../_initial/chat/ChatInitial';

//
export function handleMakeAdmin({
    chat_item = initial_chat_item(),
    admin_id = 1,
    user_id = 1,
}) {
    const user_ix = chat_item.room_obj.room_users.findIndex(
        (item) => item.user.id == user_id
    );
    const admin_ix = chat_item.room_obj.room_users.findIndex(
        (item) => item.user.id == admin_id
    );

    chat_item.room_obj.room_users[user_ix].is_admin = true;

    chat_item.message_obj.messages.unshift({
        id: getRandomBool(),
        type: CHAT_MESS_TYPE.MAKE_ADMIN,

        admin: chat_item.room_obj.room_users[admin_ix].user,
        user: chat_item.room_obj.room_users[user_ix].user,

        room_model: chat_item.room_chat,
        created_time: new Date().toString(),
    });
}
