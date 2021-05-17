import axiosDjangoClient from '../_axios/AxiosDjango';
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_zoom_chat_obj } from '../../../component/_chat/__default_chat/DefaultChat';

//
export const API_Zoom_R = (zoom_chat, params = {}) =>
    API_FakeReal(
        default_zoom_chat_obj,
        () => axiosDjangoClient({
            url: 'chat/chat-friend/' + zoom_chat + '/',
            method: 'GET',
            params: params,
        })
    );

//
export const API_ChatTimeLine_LC = (method, data = {}, params = {}) =>
    API_FakeReal(
        method == 'GET'
            ? default_zoom_chat_obj.group_notices
            : { id: Math.floor(Math.random() * 100), ...data },
        () => axiosDjangoClient({
            url: 'chat/chat-time-line/',
            method: method,
            params: params,
        }),
        params
    );

//
export const API_Message_LC = (method, data = {}, params = {}) =>
    API_FakeReal(
        method == 'GET'
            ? default_zoom_chat_obj.messages
            : { id: Math.floor(Math.random() * 100), ...data },
        () => axiosDjangoClient({
            url: 'chat/lc-message/',
            method: method,
            data: data,
            params: params,
        }),
        params
    );

//
export const API_MessageVidPic_L = (params = {}) =>
    API_FakeReal(
        default_zoom_chat_obj.messages[0].vid_pics,
        () => axiosDjangoClient({
            url: 'chat/l-message-vid-pic/',
            method: 'GET',
            params: params,
        }),
        params
    );

//
export const API_MessageLike_L = (params = {}) =>
    API_FakeReal(
        default_zoom_chat_obj.messages[0].user_likes,
        () => axiosDjangoClient({
            url: 'chat/l-message-like/',
            method: 'GET',
            params: params,
        }),
        params
    );
