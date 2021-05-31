import { API_Friends_LC } from '../../../api/api_django/user/user_friend/UserFriend';
import { API_Post_L } from '../../../api/api_django/user/user_post/UserPost';

import {
    API_UserAlbumVidPic_L,
    API_UserProfile_RU,
    API_UserVidPic_L,
    // 
    API_UserAboutOverview_R,

    API_UserAboutEmail_U,
    API_UserAboutPhone_U,
    API_UserAboutPhone_C,
    API_UserAboutAddress_C,
    API_UserAboutAddress_U,
    
    API_UserAboutGender_U,
    API_UserAboutLang_U,
    API_UserAboutLang_C,
} from '../../../api/api_django/user/user_profile/UserProfile';

import makeFormData from '../../../_some_function/makeFormData';
//
import { params_profile_post_l } from '../__params/ProfileParams';

// posts
export async function handle_API_ProfilePost_L(c_count) {
    const res = await API_Post_L({
        ...params_profile_post_l,
        c_count: c_count,
    });

    return res.data;
}

// friends
export async function handle_API_Friend_L(user_id, c_count = 0) {
    const res = await API_Friends_LC('GET', {
        profile_model: user_id,
        page: 1,
        size: 10,
        c_count: c_count,
    });

    return res.data;
}

// vid_pic
export async function handle_API_VidPic_L(
    user_id,
    c_count = 0,
    album_model = 0
) {
    const res = await API_UserVidPic_L({
        profile_model: user_id,
        page: 1,
        size: 10,
        c_count: c_count,
        album: album_model,
    });

    return res.data;
}

// album vid_pic
export async function handle_API_AlbumVidPic_L(user_id, c_count = 0) {
    const res = await API_UserAlbumVidPic_L({
        profile_model: user_id,
        page: 1,
        size: 10,
        c_count: c_count,
    });

    return res.data;
}

// profile
export async function handle_API_ProfileUser_R(pk) {
    const res = await API_UserProfile_RU(pk, 'GET');

    return res.data;
}

/* ------------------ ABOUT ----------------- */

// overview
export async function handle_API_UserOverview_r({ user_id }) {
    const res = await API_UserAboutOverview_R({
        profile_model: user_id,
    });

    return res.data;
}

// email
export async function handle_API_PermissionEmail_U({
    email = '',
    password = '',
    permission = 0,
}) {
    const res = await API_UserAboutEmail_U(
        makeFormData({
            email: email,
            password: password,
            permission: permission,
        })
    );

    return res.data;
}

// phone
export async function handle_API_Phone_C({ phone = '', permission = 0 }) {
    const res = await API_UserAboutPhone_C(
        makeFormData({
            phone: phone,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_Phone_U({
    id = 0,
    phone = '',
    permission = 0,
}) {
    const res = await API_UserAboutPhone_U(
        id,
        makeFormData({
            phone: phone,
            permission: permission,
        })
    );

    return res.data;
}

// address
export async function handle_API_Address_C({ address = '', permission = 0 }) {
    const res = await API_UserAboutAddress_C(
        makeFormData({
            address: address,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_Address_U({
    id = 0,
    address = '',
    permission = 0,
}) {
    const res = await API_UserAboutAddress_U(
        id,
        makeFormData({
            address: address,
            permission: permission,
        })
    );

    return res.data;
}

// gender
export async function handle_API_Gender_U({ gender = '', permission = 0 }) {
    const res = await API_UserAboutGender_U(
        makeFormData({
            gender: gender,
            permission: permission,
        })
    );

    return res.data;
}

// gender
export async function handle_API_Lang_U({ lang = '', permission = 0 }) {
    const res = await API_UserAboutLang_U(
        makeFormData({
            lang: lang,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_Lang_C({ lang = '', permission = 0 }) {
    const res = await API_UserAboutLang_C(
        makeFormData({
            lang: lang,
            permission: permission,
        })
    );

    return res.data;
}
