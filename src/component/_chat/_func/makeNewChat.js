import { initial_chat_item } from '../../../_initial/chat/ChatInitial';

//
export function makeNewChat(data) {
    const {
        room_chat,
        room_users,
        count_user,
        messages,
        count_message,
        user_begin_mess,
        is_group,
        owner,
        creator,
        count_group_notice,
    } = data;

    //
    return {
        ...initial_chat_item(),
        is_group: is_group,
        room_chat: room_chat,

        room_obj: {
            room_active: true,
            room_users: room_users,
            count_user: count_user,
            room_owner: owner,
            room_creator: creator,
        },

        message_obj: {
            messages: messages,
            count_message: count_message,
            user_begin_mess: user_begin_mess,
        },
    };
}