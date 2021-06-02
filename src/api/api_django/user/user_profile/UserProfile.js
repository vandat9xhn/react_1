import { API_FakeReal } from '../../../_ConstAPI';
import axiosDjangoClient from '../../_axios/AxiosDjango';
//
import {
    default_user_about_r,
    default_user_r,
} from '../../../../pages/user_profile/__default/DefaultUserProfile';

import {
    default_album_vid_pic_arr,
    default_post_arr,
} from '../../../../component/posts/__default_post/DefaultPosts';

// Retrieve Update Personal
export const API_UserProfile_RU = (pk, method, data = {}) =>
    API_FakeReal(
        default_user_r.find((item) => item.id == pk) || default_user_r[2],
        () =>
            axiosDjangoClient({
                url: '/user/ru-profile/' + pk + '/',
                method: method,
                data: data,
            })
    );

// vid_pic
export const API_UserVidPic_L = (params) =>
    API_FakeReal(
        Array(9).fill(default_post_arr[0].vid_pics[0]),
        () =>
            axiosDjangoClient({
                url: '/user/vid-pic-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

// vid_pic album
export const API_UserAlbumVidPic_L = (params) =>
    API_FakeReal(
        Array(4).fill(default_album_vid_pic_arr[0]),
        () =>
            axiosDjangoClient({
                url: '/user/album-vid-pic-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

/* ------------ COMMON ABOUT ------------ */

export const API_UserAbout_R = (params) =>
    API_FakeReal(default_user_about_r, () =>
        axiosDjangoClient({
            url: '/user/about-r/',
            method: 'GET',
            params: params,
        })
    );

export const API_UserAboutMulti_U = (about = '', id = 0, data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: `/user/about-${about}-u/${id}/`,
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAbout_U = (about = '', data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: `/user/about-${about}-u/`,
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAbout_C = (about = '', data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: `/user/about-${about}-c/`,
            method: 'POST',
            data: data,
        })
    );
