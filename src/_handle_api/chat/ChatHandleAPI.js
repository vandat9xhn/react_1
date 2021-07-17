//
import {
    API_Message_LC,
    API_Zoom_R,
    API_MessageVidPic_L,
    API_MessageLike_L,
    API_ChatTimeLine_LC,
} from '../../api/api_django/chat/APIChat';
import { API_Friends_LC } from '../../api/api_django/user/user_friend/UserFriend';
//
import makeFormData from '../../_some_function/makeFormData';
//
import {
    params_zoom_r,
    params_message_l,
    page_size,
} from '../../_params/chat/ChatParams';

//
export async function handle_API_ChatZoom_R(room_chat) {
    const res = await API_Zoom_R(room_chat, {
        ...params_zoom_r,
    });

    return res.data;
}

//
export async function handle_API_ChatMessage_L(room_chat, c_count = 0) {
    const res = await API_Message_LC(
        'GET',
        {},
        {
            zoom_model: room_chat,
            ...params_message_l,
            c_count: c_count,
        }
    );

    return res.data.data;
}

//
export async function handle_API_ChatMessage_C(
    room_chat,
    message,
    current_canvas,
    files
) {
    const formData = makeFormData({
        zoom_model: room_chat,
        message: message,
    });

    current_canvas && formData.append('canvas_draw', current_canvas);
    for (const file of files) {
        formData.append('vid_pics[]', file);
    }

    const res = await API_Message_LC('POST', formData);

    return { ...res.data, message: message, vid_pics: files };
}

//
export async function handle_API_ChatVidPic_L(mess_id, c_count = 0) {
    const res = await API_MessageVidPic_L({
        mess_model: mess_id,
        c_count: c_count,
    });

    return res.data;
}

//
export async function handle_API_ChatLike_L(mess_id, c_count = 0) {
    const res = await API_MessageLike_L({
        mess_model: mess_id,
        c_count: c_count,
        ...page_size,
    });

    return res.data;
}

//
export async function handle_API_ProfileFriend_L(exclude_ids, c_count) {
    const res = await API_Friends_LC('GET', {
        page: 1,
        size: 5,
        c_count: c_count,
        exclude_ids: exclude_ids,
    });
    const { data, count } = res.data;
    const new_data = data.map((item) => item.friend);

    return { data: new_data, count };
}

//
export async function handle_API_ChatTimeLine_L(room_chat, c_count = 0) {
    const res = await API_ChatTimeLine_LC(
        'GET',
        {},
        {
            zoom_model: room_chat,
            page: 1,
            size: 5,
            c_count: c_count,
        }
    );

    return res.data;
}
