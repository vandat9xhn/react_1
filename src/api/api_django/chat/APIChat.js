import axiosDjangoClient from '../_axios/AxiosDjango';
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_group_notice_arr, default_message_arr, default_message_user_like_arr, default_message_vid_pic_arr, default_room_chat_obj } from '../../../_default/chat/DefaultChat';
import { default_room_arr } from '../../../_default/header/RightHeaderDefault';
import { default_post_reacted_info_total_arr } from '../../../_default/post/reacted';

//
export const API_Zoom_L = (params = {}) =>
    API_FakeReal(
        default_room_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/chat/room-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_Zoom_R = (room_chat, params = {}) =>
    API_FakeReal(default_room_chat_obj(room_chat), () =>
        axiosDjangoClient({
            url: 'api/chat/room-r/' + room_chat + '/',
            method: 'GET',
            params: params,
        })
    );

//
export const API_Zoom_U = (room_chat, data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: 'api/chat/room-u/' + room_chat + '/',
            method: 'PATCH',
            data: data,
        })
    );

//
export const API_ChatTimeLine_LC = (method, data = {}, params = {}) =>
    API_FakeReal(
        method == 'GET'
            ? default_group_notice_arr()
            : { id: Math.floor(Math.random() * 100), ...data },
        () =>
            axiosDjangoClient({
                url: 'api/chat/time-line-lc/',
                method: method,
                params: params,
            }),
        params
    );

//
export const API_Message_LC = (method, data = {}, params = {}) =>
    API_FakeReal(
        method == 'GET'
            ? default_message_arr()
            : { id: Math.floor(Math.random() * 100), ...data },
        () =>
            axiosDjangoClient({
                url: 'api/chat/message-lc/',
                method: method,
                data: data,
                params: params,
            }),
        params
    );

//
export const API_MessageVidPic_L = (params = {}) =>
    API_FakeReal(
        default_message_vid_pic_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/chat/message-vid-pic-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_MessageLike_L = (params = {}) =>
    API_FakeReal(
        default_message_user_like_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/chat/message-like-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_MessageReactedInfo_L = (params = {}) =>
    API_FakeReal(
        default_post_reacted_info_total_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/chat/message-reacted-info-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
