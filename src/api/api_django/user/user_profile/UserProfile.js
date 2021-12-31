import { API_FakeReal } from '../../../_ConstAPI';
import axiosDjangoClient from '../../_axios/AxiosDjango';
//
import { default_user_about_r } from '../../../../_default/user_post/DefaultUserProfile';
import {
    default_album_vid_pic_arr,
    default_profile_vid_pic_arr,
} from '../../../../_default/user_post/DefaultProfileVidPic';

// vid_pic
export const API_UserVidPic_L = (params) =>
    API_FakeReal(
        default_profile_vid_pic_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/profile/vid-pic-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );

// vid_pic album
export const API_UserAlbumVidPic_L = (params) =>
    API_FakeReal(
        default_album_vid_pic_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/profile/album-vid-pic-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );

/* ------------ COMMON ABOUT ------------ */

export const API_UserAbout_R = (params) =>
    API_FakeReal(default_user_about_r(), () =>
        axiosDjangoClient({
            url: 'api/profile/profile-r/',
            method: 'GET',
            params: params,
        })
    );

export const API_UserAboutMulti_U = (about = '', id = 0, data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: `api/profile/about/${about}-u/${id}/`,
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAbout_U = (about = '', data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: `api/profile/about/${about}-u/`,
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAbout_C = (about = '', data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: `api/profile/about/${about}-c/`,
            method: 'POST',
            data: data,
        })
    );
