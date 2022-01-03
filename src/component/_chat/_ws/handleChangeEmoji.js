import { default_define_user } from '../../../_default/login/DefaultLogin';
import { getRandomId } from '../../../_default/_common/default_id';
// 
import { CHAT_MESS_TYPE } from '../../../_data/chat/mess_type';
import { initial_chat_item } from '../../../_initial/chat/ChatInitial';
import { initial_user } from '../../../_initial/user/initialUser';

//
export function handleChangeEmoji({
    chat_item = initial_chat_item(),
    emoji,

    user = initial_user(),
}) {
    chat_item.emoji = emoji;
    chat_item.message_obj.messages.unshift({
        id: getRandomId(),
        type: CHAT_MESS_TYPE.EMOJI,
        user: default_define_user,

        emoji: emoji,

        profile_model: 1,
        room_model: chat_item.room_chat,
        created_time: new Date().toString(),
    })
}
