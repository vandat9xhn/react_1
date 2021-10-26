import axiosDjangoClient from '../_axios/AxiosDjango';
import { API_FakeReal } from '../../_ConstAPI';
//
import { getRandomNumber } from '../../../_default/_common/default_id';
//
import { default_notice_arr } from '../../../_default/header/RightHeaderDefault';
import { default_fb_notice_action_arr } from '../../../_default/header/notice';
import { default_fb_header_mess_arr } from '../../../_default/header/message';

//
export const API_FriendCountNew_R = (params = {}) =>
    API_FakeReal(getRandomNumber(0, 10), () =>
        axiosDjangoClient({
            url: 'api/friend/add-friend-count-new/',
            method: 'GET',
            params: params,
        })
    );

//
export const API_RoomCountNew_R = (params = {}) =>
    API_FakeReal(getRandomNumber(0, 10), () =>
        axiosDjangoClient({
            url: 'api/chat/room-count-new/',
            method: 'GET',
            params: params,
        })
    );

//
export const API_NoticeCountNew_R = (params = {}) =>
    API_FakeReal(getRandomNumber(0, 10), () =>
        axiosDjangoClient({
            url: 'api/notice/notice-count-new/',
            method: 'GET',
            params: params,
        })
    );

// ---------- MESSAGE

export const API_FbHeaderMessAction_L = (params = {}) =>
    API_FakeReal(default_fb_header_mess_arr(), () =>
        axiosDjangoClient({
            url: 'api/facebook/mess-action-l',
            method: 'GET',
            params: params,
        })
    );



// ---------- NOTICE

//
export const API_Notice_L = (params = {}) =>
    API_FakeReal(
        default_notice_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/notice/notice-l',
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_FbNoticeAction_L = (params = {}) =>
    API_FakeReal(default_fb_notice_action_arr(), () =>
        axiosDjangoClient({
            url: 'api/facebook/notice-action-l',
            method: 'GET',
            params: params,
        })
    );

//
export const API_Notice_U = (data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: 'api/notice/notice-u',
            method: 'PATCH',
            data: data,
        })
    );
