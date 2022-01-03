import { getRandomId } from '../../../_default/_common/default_id';
//
import { initial_chat_item } from '../../../_initial/chat/ChatInitial';

//
export function handleGetMessage({
    chat_item = initial_chat_item(),
    id,
    vid_pics,
    message,
    current_canvas,

    user_id = 1,
}) {
    const user = chat_item.room_obj.room_users.find(
        (item) => (item.id = user_id)
    );
    const _vid_pics = vid_pics.map((item) => ({
        id: getRandomId(),
        vid_pic: item.vid_pic,
        mess_model: id,
    }));

    current_canvas &&
        _vid_pics.push({
            id: getRandomId(),
            vid_pic: current_canvas,
            mess_model: id,
        });

    chat_item.message_obj.messages.unshift({
        id: id,
        type: 'mess',
        user: user,

        vid_pics: _vid_pics,
        vid_pic_count: _vid_pics.length,
        message: message,
        emoji: null,

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
