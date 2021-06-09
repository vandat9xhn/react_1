import axiosDjangoClient from '../_axios/AxiosDjango';
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_notice_arr } from '../../../component/_header/header_right/__default/RightHeaderDefault';

//
export const API_FriendCountNew_R = (params = {}) =>
    API_FakeReal(5, () =>
        axiosDjangoClient({
            url: 'api/header/friend-count-new',
            method: 'GET',
            params: params,
        })
    );

//
export const API_ZoomCountNew_R = (params = {}) =>
    API_FakeReal(2, () =>
        axiosDjangoClient({
            url: 'api/header/zoom-count-new',
            method: 'GET',
            params: params,
        })
    );

//
export const API_NoticeCountNew_R = (params = {}) =>
    API_FakeReal(3, () =>
        axiosDjangoClient({
            url: 'api/header/notice-count-new',
            method: 'GET',
            params: params,
        })
    );

//
export const API_Notice_L = (params = {}) =>
    API_FakeReal(default_notice_arr, () =>
        axiosDjangoClient({
            url: 'api/header/notice-l',
            method: 'GET',
            params: params,
        }),
        params
    );

//
export const API_Notice_U = (data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: 'api/header/notice-l',
            method: 'PATCH',
            data: data,
        })
    );
