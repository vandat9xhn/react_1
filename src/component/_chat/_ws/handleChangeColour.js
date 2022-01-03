import { default_define_user } from '../../../_default/login/DefaultLogin';
import { getRandomId } from '../../../_default/_common/default_id';
// 
import { CHAT_MESS_TYPE } from '../../../_data/chat/mess_type';
import { initial_chat_item } from '../../../_initial/chat/ChatInitial';
import { initial_user } from '../../../_initial/user/initialUser';

//
export function handleChangeColour({
    chat_item = initial_chat_item(),
    colour_arr,

    user = initial_user(),
}) {
    chat_item.colour_arr = colour_arr;
    chat_item.message_obj.messages.unshift({
        id: getRandomId(),
        type: CHAT_MESS_TYPE.COLOUR,
        user: default_define_user,

        colour_arr: colour_arr,

        profile_model: 1,
        room_model: chat_item.room_chat,
        created_time: new Date().toString(),
    })
}
