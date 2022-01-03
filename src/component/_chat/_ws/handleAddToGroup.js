import { getRandomId } from '../../../_default/_common/default_id';
// 
import { CHAT_MESS_TYPE } from '../../../_data/chat/mess_type';
import { initial_chat_item } from '../../../_initial/chat/ChatInitial';
import { initial_user } from '../../../_initial/user/initialUser';

//
export function handleAddToGroup({
    chat_item = initial_chat_item(),
    admin_id = 1,
    user = initial_user(),
}) {
    chat_item.room_obj.room_users.push({
        id: user.id,
        user: user,
        is_owner: false,
        is_admin: false,
        nickname: '',

        leave: false,
        is_notice: true,
        on_chat: false,
        on_input: false,

        begin_mess: 0,
        last_seen_mess: -1,
        last_receive_mess: 0,

        room_model: chat_item.room_chat,
        profile_model: user.id,
        joined_time: new Date().toString(),
    });

    chat_item.message_obj.messages.unshift({
        id: getRandomId(),
        type: CHAT_MESS_TYPE.ADD_FRIEND,
        admin: chat_item.room_obj.room_users.find(
            (item) => item.user.id == admin_id
        ).user,
        user: user,

        profile_model: admin_id,
        room_model: chat_item.room_chat,
        created_time: new Date().toString(),
    });
}
