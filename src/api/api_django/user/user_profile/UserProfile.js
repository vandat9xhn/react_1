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

/* ------------ ABOUT ------------ */

// overview
export const API_UserAboutOverview_R = (params) =>
    API_FakeReal(default_user_about_r, () =>
        axiosDjangoClient({
            url: '/user/about-overview-r/',
            method: 'GET',
            params: params,
        })
    );

// email
export const API_UserAboutEmail_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-email-u/',
            method: 'PATCH',
            data: data,
        })
    );

// phone
export const API_UserAboutPhone_U = (id, data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-phone-u/' + id + '/',
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAboutPhone_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-phone-c/',
            method: 'POST',
            data: data,
        })
    );

// address
export const API_UserAboutAddress_U = (id, data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-address-u/' + id + '/',
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAboutAddress_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-address-C/',
            method: 'POST',
            data: data,
        })
    );

// gender
export const API_UserAboutGender_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-gender-u/',
            method: 'PATCH',
            data: data,
        })
    );

// birth
export const API_UserAboutBirth_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-birth-u/',
            method: 'PATCH',
            data: data,
        })
    );

// lang
export const API_UserAboutLang_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-lang-u/',
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAboutLang_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-lang-c/',
            method: 'POST',
            data: data,
        })
    );

// You
export const API_UserAboutYou_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-you-u/',
            method: 'PATCH',
            data: data,
        })
    );

// Favour
export const API_UserAboutFavour_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-favour-u/',
            method: 'PATCH',
            data: data,
        })
    );

// Other name
export const API_UserAboutOtherName_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-other-name-u/',
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAboutOtherName_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-other-name-c/',
            method: 'POST',
            data: data,
        })
    );

// Life Event
export const API_UserAboutLifeEvent_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-life-event-u/',
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAboutLifeEvent_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-life-event-c/',
            method: 'POST',
            data: data,
        })
    );

// Town
export const API_UserAboutTown_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-town-u/',
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAboutTown_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-town-c/',
            method: 'POST',
            data: data,
        })
    );

// City
export const API_UserAboutCity_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-city-u/',
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAboutCity_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-city-c/',
            method: 'POST',
            data: data,
        })
    );

// relationship
export const API_UserAboutRelationship_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-relationship-c/',
            method: 'POST',
            data: data,
        })
    );

// family
export const API_UserAboutFamily_U = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-family-u/',
            method: 'PATCH',
            data: data,
        })
    );

export const API_UserAboutFamily_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/about-family-c/',
            method: 'POST',
            data: data,
        })
    );
