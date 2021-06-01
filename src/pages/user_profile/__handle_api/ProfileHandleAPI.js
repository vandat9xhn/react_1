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
    //
    API_UserAboutGender_U,
    API_UserAboutLang_U,
    API_UserAboutLang_C,
    API_UserAboutBirth_U,
    //
    API_UserAboutYou_U,
    API_UserAboutFavour_U,
    API_UserAboutOtherName_C,
    API_UserAboutOtherName_U,
    //
    API_UserAboutLifeEvent_C,
    API_UserAboutLifeEvent_U,
    //
    API_UserAboutTown_C,
    API_UserAboutTown_U,
    API_UserAboutCity_C,
    API_UserAboutCity_U,
    //
    API_UserAboutRelationship_U,
    API_UserAboutFamily_C,
    API_UserAboutFamily_U,
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

// birth
export async function handle_API_Birth_U({ birth = '', permission = 0 }) {
    const res = await API_UserAboutBirth_U(
        makeFormData({
            birth: birth,
            permission: permission,
        })
    );

    return res.data;
}

// Lang
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

// You
export async function handle_API_You_U({ you = '', permission = 0 }) {
    const res = await API_UserAboutYou_U(
        makeFormData({
            you: you,
            permission: permission,
        })
    );

    return res.data;
}

// Favour
export async function handle_API_Favour_U({ favour = '', permission = 0 }) {
    const res = await API_UserAboutFavour_U(
        makeFormData({
            favour: favour,
            permission: permission,
        })
    );

    return res.data;
}

// Other name
export async function handle_API_OtherName_C({
    other_name = '',
    permission = 0,
}) {
    const res = await API_UserAboutOtherName_C(
        makeFormData({
            other_name: other_name,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_OtherName_U({
    other_name = '',
    permission = 0,
}) {
    const res = await API_UserAboutOtherName_U(
        makeFormData({
            other_name: other_name,
            permission: permission,
        })
    );

    return res.data;
}

// Life event
export async function handle_API_LifeEvent_C({
    life_event = '',
    permission = 0,
}) {
    const res = await API_UserAboutLifeEvent_C(
        makeFormData({
            life_event: life_event,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_LifeEvent_U({
    life_event = '',
    permission = 0,
}) {
    const res = await API_UserAboutLifeEvent_U(
        makeFormData({
            life_event: life_event,
            permission: permission,
        })
    );

    return res.data;
}

// Town
export async function handle_API_Town_C({ town = '', permission = 0 }) {
    const res = await API_UserAboutTown_C(
        makeFormData({
            town: town,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_Town_U({ town = '', permission = 0 }) {
    const res = await API_UserAboutTown_U(
        makeFormData({
            town: town,
            permission: permission,
        })
    );

    return res.data;
}

// city
export async function handle_API_City_C({ city = '', permission = 0 }) {
    const res = await API_UserAboutCity_C(
        makeFormData({
            city: city,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_City_U({ city = '', permission = 0 }) {
    const res = await API_UserAboutCity_U(
        makeFormData({
            city: city,
            permission: permission,
        })
    );

    return res.data;
}

// relationship
export async function handle_API_Relationship_U({
    relationship = '',
    permission = 0,
}) {
    const res = await API_UserAboutRelationship_U(
        makeFormData({
            relationship: relationship,
            permission: permission,
        })
    );

    return res.data;
}

// family
export async function handle_API_Family_L(c_count = 0) {
    const res = await API_Friends_LC('GET', {
        page: 1,
        size: 10,
        c_count: c_count,
    });

    return res.data;
}

export async function handle_API_Family_C({
    member = {},
    relation = '',
    permission = 0,
}) {
    const res = await API_UserAboutFamily_C(
        makeFormData({
            member: member,
            relation: relation,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_Family_U({
    member = {},
    relation = '',
    permission = 0,
}) {
    const res = await API_UserAboutFamily_U(
        makeFormData({
            member: member,
            relation: relation,
            permission: permission,
        })
    );

    return res.data;
}
