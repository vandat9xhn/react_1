import { default_define_user } from '../../../_default/login/DefaultLogin';
import { getRandomId } from '../../../_default/_common/default_id';
// 
import { CHAT_MESS_TYPE } from '../../../_data/chat/mess_type';
import { initial_chat_item } from '../../../_initial/chat/ChatInitial';
import { initial_user } from '../../../_initial/user/initialUser';

//
export function handleChangeGroupName({
    chat_item = initial_chat_item(),
    group_name,

    user = initial_user(),
}) {
    chat_item.group_name = group_name;
    chat_item.message_obj.messages.unshift({
        id: getRandomId(),
        type: CHAT_MESS_TYPE.GROUP_NAME,
        user: default_define_user,

        group_name: group_name,

        profile_model: 1,
        room_model: chat_item.room_chat,
        created_time: new Date().toString(),
    })
}
