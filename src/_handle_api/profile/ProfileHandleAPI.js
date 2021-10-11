import { API_Friend_LC } from '../../api/api_django/user/user_friend/UserFriend';
import { API_Post_L } from '../../api/api_django/user/user_post/UserPost';

import {
    API_UserAlbumVidPic_L,
    API_UserVidPic_L,
    //
    API_UserAbout_R,
    API_UserAbout_U,
    API_UserAboutMulti_U,
    API_UserAbout_C,
} from '../../api/api_django/user/user_profile/UserProfile';
//
import {
    params_profile_overview_r,
    params_profile_r,
} from '../../_params/profile/paramsProfileAbout';
import { params_profile_post_l } from '../../_params/profile/paramsProfileHome';
//
import makeFormData from '../../_some_function/makeFormData';

// posts
export async function handle_API_ProfilePost_L(c_count = 0, user_id = -1) {
    const res = await API_Post_L({
        ...params_profile_post_l,
        c_count: c_count,
        user_id: user_id,
    });
    // console.log(c_count, user_id, res.data);

    return res.data;
}

// friends
export async function handle_API_Friend_L({
    user_id = -1,
    c_count = 0,
    params = {},
}) {
    const res = await API_Friend_LC('GET', {
        profile_model: user_id,
        page: 1,
        size: 20,
        c_count: c_count,
        ...params,
    });
    
    const { data, ...rest_data } = res.data;
    const new_data = data.map((item) => item.friend);
    
    // console.log(params, 'c_count: ', c_count, 'user_id: ', user_id, res.data);

    return { ...rest_data, data: new_data };
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
export async function handle_API_ProfileUser_R({ user_id }) {
    const res = await API_UserAbout_R({
        ...params_profile_r,
        profile_model: user_id,
    });

    return res.data;
}

/* ------------------ ABOUT ----------------- */

// overview
export async function handle_API_UserOverview_r({ user_id }) {
    const res = await API_UserAbout_R({
        ...params_profile_overview_r,
        profile_model: user_id,
    });

    return res.data;
}

// email
export async function handle_API_UserEmail_U({
    email = '',
    password = '',
    permission = 0,
}) {
    const res = await API_UserAbout_U(
        'email',
        makeFormData({
            email: email,
            password: password,
            permission: permission,
        })
    );

    return res.data;
}

// phone
export async function handle_API_UserPhone_C({ phone = '', permission = 0 }) {
    const res = await API_UserAbout_C(
        'phone',
        makeFormData({
            phone: phone,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_UserPhone_U({
    id = 0,
    phone = '',
    permission = 0,
}) {
    const res = await API_UserAboutMulti_U(
        'phone',
        id,
        makeFormData({
            phone: phone,
            permission: permission,
        })
    );

    return res.data;
}

// address
export async function handle_API_UserAddress_C({ address = '', permission = 0 }) {
    const res = await API_UserAbout_C(
        'address',
        makeFormData({
            address: address,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_UserAddress_U({ address = '', permission = 0 }) {
    const res = await API_UserAbout_U(
        'address',
        makeFormData({
            address: address,
            permission: permission,
        })
    );

    return res.data;
}

// gender
export async function handle_API_Gender_U({ gender = '', permission = 0 }) {
    const res = await API_UserAbout_U(
        'gender',
        makeFormData({
            gender: gender,
            permission: permission,
        })
    );

    return res.data;
}

// birth
export async function handle_API_Birth_U({ birth = '', permission = 0 }) {
    const res = await API_UserAbout_U(
        'birth',
        makeFormData({
            birth: birth,
            permission: permission,
        })
    );

    return res.data;
}

// Lang
export async function handle_API_Lang_U({ lang = '', permission = 0 }) {
    const res = await API_UserAbout_U(
        'language',
        makeFormData({
            lang: lang,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_Lang_C({ lang = '', permission = 0 }) {
    const res = await API_UserAbout_C(
        'language',
        makeFormData({
            lang: lang,
            permission: permission,
        })
    );

    return res.data;
}

// You
export async function handle_API_You_U({ you = '', permission = 0 }) {
    const res = await API_UserAbout_U(
        'you',
        makeFormData({
            you: you,
            permission: permission,
        })
    );

    return res.data;
}

// Favour
export async function handle_API_Favour_U({ favour = '', permission = 0 }) {
    const res = await API_UserAbout_U(
        'favour',
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
    const res = await API_UserAbout_C(
        'other-name',
        makeFormData({
            other_name: other_name,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_OtherName_U({
    id = 0,
    other_name = '',
    permission = 0,
}) {
    const res = await API_UserAboutMulti_U(
        'other-name',
        id,
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
    const res = await API_UserAbout_C(
        'life-event',
        makeFormData({
            life_event: life_event,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_LifeEvent_U({
    id = 0,
    life_event = '',
    permission = 0,
}) {
    const res = await API_UserAboutMulti_U(
        'life-event',
        id,
        makeFormData({
            life_event: life_event,
            permission: permission,
        })
    );

    return res.data;
}

// Town
export async function handle_API_Town_C({ town = '', permission = 0 }) {
    const res = await API_UserAbout_C(
        'town',
        makeFormData({
            town: town,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_Town_U({ id = 0, town = '', permission = 0 }) {
    const res = await API_UserAboutMulti_U(
        'town',
        id,
        makeFormData({
            town: town,
            permission: permission,
        })
    );

    return res.data;
}

// city
export async function handle_API_UserCity_C({ city = '', permission = 0 }) {
    const res = await API_UserAbout_C(
        'city',
        makeFormData({
            city: city,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_UserCity_U({ id = 0, city = '', permission = 0 }) {
    const res = await API_UserAboutMulti_U(
        'city',
        id,
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
    const res = await API_UserAbout_U(
        'relationship',
        makeFormData({
            relationship: relationship,
            permission: permission,
        })
    );

    return res.data;
}

// family
export async function handle_API_Family_L(c_count = 0) {
    const res = await API_Friend_LC('GET', {
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
    const res = await API_UserAbout_C(
        'family',
        makeFormData({
            member: member,
            relation: relation,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_Family_U({
    id = 0,
    member = {},
    relation = '',
    permission = 0,
}) {
    const res = await API_UserAboutMulti_U(
        'family',
        id,
        makeFormData({
            member: member,
            relation: relation,
            permission: permission,
        })
    );

    return res.data;
}

// school
export async function handle_API_School_C({ school = '', permission = 0 }) {
    const res = await API_UserAbout_C(
        'school',
        makeFormData({
            school: school,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_School_U({
    id = 0,
    school = '',
    permission = 0,
}) {
    const res = await API_UserAboutMulti_U(
        'school',
        id,
        makeFormData({
            school: school,
            permission: permission,
        })
    );

    return res.data;
}

// university
export async function handle_API_University_C({
    university = '',
    permission = 0,
}) {
    const res = await API_UserAbout_C(
        'university',
        makeFormData({
            university: university,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_University_U({
    id = 0,
    university = '',
    permission = 0,
}) {
    const res = await API_UserAboutMulti_U(
        'university',
        id,
        makeFormData({
            university: university,
            permission: permission,
        })
    );

    return res.data;
}

// work
export async function handle_API_Work_C({ work = '', permission = 0 }) {
    const res = await API_UserAbout_C(
        'work',
        makeFormData({
            work: work,
            permission: permission,
        })
    );

    return res.data;
}

export async function handle_API_Work_U({ id = 0, work = '', permission = 0 }) {
    const res = await API_UserAboutMulti_U(
        'work',
        id,
        makeFormData({
            work: work,
            permission: permission,
        })
    );

    return res.data;
}
