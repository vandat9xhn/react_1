import axiosDjangoClient from '../../_axios/AxiosDjango';
import { API_FakeReal } from '../../../_ConstAPI';
//
import {
    default_content_more,
    default_post_history_arr,
    default_post_like_arr,
    default_post_arr,
    default_post_obj,
    default_post_share_arr,
} from '../../../../_default/post/DefaultPosts';

import {
    default_post_vid_pic_arr,
    default_post_vid_pic_id,
    default_post_vid_pic,
    default_post_vid_pic_like_arr,
    default_post_vid_pic_history_arr,
} from '../../../../_default/post/DefaultVidPic';
import { default_post_reacted_info_total_arr } from '../../../../_default/post/reacted';
import { default_profile_post_arr } from '../../../../_default/user_post/posts';

// ------

// Get
export const API_Post_L = (params) =>
    API_FakeReal(
        default_post_arr(),
        () =>
            axiosDjangoClient({
                url: '/user/l-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_ProfilePost_L = (params) =>
    API_FakeReal(
        default_profile_post_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/post-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_Post_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/c-post/',
            method: 'POST',
            data: data,
        })
    );

// Retrieve
export const API_PostMoreContent_R = (pk, params = {}) =>
    API_FakeReal(default_content_more(), () =>
        axiosDjangoClient({
            url: '/user/post-rd/' + pk + '/',
            method: 'GET',
            params: params,
        })
    );

// Retrieve Delete
export const API_Post_RD = (pk, method = '', params = {}) =>
    API_FakeReal(default_post_obj(), () =>
        axiosDjangoClient({
            url: '/user/rd-post/' + pk + '/',
            method: method,
            params: params,
        })
    );

// Update
export const API_Post_U = (pk, data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/user/u-post/' + pk + '/',
            method: 'PATCH',
            data: data,
        })
    );

// ------ VID PIC

// Get
export const API_PostPic_L = (params = {}) =>
    API_FakeReal(
        default_post_vid_pic_arr(),
        () =>
            axiosDjangoClient({
                url: '/user/l-vid-pic-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_PostVidPicID_L = (params = {}) =>
    API_FakeReal(default_post_vid_pic_id(params['vid_pic_id']), () =>
        axiosDjangoClient({
            url: '/user/post-vid-pic-id-l/',
            method: 'GET',
            params: params,
        })
    );

// Create
export const API_PostPic_C = (data = {}) =>
    axiosDjangoClient({
        url: '/user/c-vid-pic-post/',
        method: 'POST',
        data: data,
    });

//
export const API_PostPic_RUD = (pk = 1, method, params = {}, data = {}) =>
    API_FakeReal(default_post_vid_pic(), () =>
        axiosDjangoClient({
            url: '/user/rud-vid-pic-post/' + pk + '/',
            method: method,
            params: params,
            data: data,
        })
    );

//
export const API_PostPicContentMore_R = (pk = 1, params = {}) =>
    API_FakeReal(default_content_more(), () =>
        axiosDjangoClient({
            url: '/user/rud-vid-pic-post/' + pk + '/',
            method: 'GET',
            params: params,
        })
    );

//
export const API_PostPicLike_L = (params = {}) =>
    API_FakeReal(
        default_post_vid_pic_like_arr(),
        () =>
            axiosDjangoClient({
                url: '/user/l-like-vid-pic-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_PostPicHistory_L = (params = {}) =>
    API_FakeReal(
        default_post_vid_pic_history_arr(),
        () =>
            axiosDjangoClient({
                url: '/user/l-history-vid-pic-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

// ---- LIKE

// Get
export const API_PostLike_L = (params) =>
    API_FakeReal(
        default_post_like_arr(),
        () =>
            axiosDjangoClient({
                url: '/user/post-reacted-info-total/',
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_PostReactedInfo_L = (params) =>
    API_FakeReal(
        default_post_reacted_info_total_arr(),
        () =>
            axiosDjangoClient({
                url: '/user/lc-like-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_PostLike_C = (data) =>
    axiosDjangoClient({
        url: '/user/lc-like-post/',
        method: 'POST',
        data: data,
    });

// Update
export const API_PostLike_U = (data) =>
    axiosDjangoClient({
        url: '/user/u-like-post/',
        method: 'PATCH',
        data: data,
    });

// ------ SHARE

// Get
export const API_PostShare_L = (params) =>
    API_FakeReal(
        default_post_share_arr(),
        () =>
            axiosDjangoClient({
                url: '/user/lc-share-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_PostShare_C = (data) =>
    axiosDjangoClient({
        url: '/user/lc-share-post/',
        method: 'POST',
        data: data,
    });

// ---- HISTORY

// Get
export const API_PostHistory_L = (params) =>
    API_FakeReal(
        default_post_history_arr(),
        () =>
            axiosDjangoClient({
                url: '/user/lc-history-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

// Get
export const API_PostHistory_R = (params) =>
    API_FakeReal(
        default_content_more(),
        () =>
            axiosDjangoClient({
                url: '/user/r-history-post/',
                method: 'GET',
                params: params,
            }),
        params
    );
