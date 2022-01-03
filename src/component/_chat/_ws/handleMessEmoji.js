import { initial_chat_item } from '../../../_initial/chat/ChatInitial';

//
export function handleMessEmoji({
    chat_item = initial_chat_item(),
    id,

    user_id = 1,
}) {
    const user = chat_item.room_obj.room_users.find(
        (item) => (item.id = user_id)
    );

    chat_item.message_obj.messages.unshift({
        id: id,
        type: 'mess',
        user: user,

        message: '',
        vid_pics: [],
        vid_pic_count: 0,
        emoji: chat_item.emoji,

        reacted_arr: [],
        reacted_ix_arr: [],
        reacted_count: 0,
        user_reacted_ix: -1,

        user_seen_arr: [],
        user_receive_arr: [],

        profile_model: user_id,
        room_model: chat_item.room_chat,
        created_time: new Date().toString(),
    });
}
