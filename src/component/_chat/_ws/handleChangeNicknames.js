import { getRandomId } from '../../../_default/_common/default_id';
// 
import { CHAT_MESS_TYPE } from '../../../_data/chat/mess_type';
import { initial_chat_item } from '../../../_initial/chat/ChatInitial';

//
export function handleChangeNicknames({
    chat_item = initial_chat_item(),
    nickname = '',
    user_id = 0,
    user_set_id = 1,
}) {
    const user = chat_item.room_obj.room_users.find(
        (item) => item.user.id == user_id
    );
    const user_set = chat_item.room_obj.room_users.find(
        (item) => item.user.id == user_set_id
    );

    user.nickname = nickname;

    chat_item.message_obj.messages.unshift({
        id: getRandomId(),
        type: CHAT_MESS_TYPE.NICKNAME,

        user_set: user_set.user,
        user: user.user,
        nickname: nickname,

        profile_model: user_set_id,
        room_model: chat_item.room_chat,
        created_time: new Date().toString(),
    });
}
