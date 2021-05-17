import axiosDjangoClient from '../../_axios/AxiosDjango';
import { API_FakeReal } from '../../../_ConstAPI';
//
import {
    default_cmt_post_arr,
    default_history_cmt_post_arr,
    default_history_post_arr,
    default_history_sub_post_arr,
    default_like_cmt_post_arr,
    default_like_post_arr,
    default_like_sub_post_arr,
    default_post_arr,
    default_share_post_arr,
    default_sub_post_arr,
} from '../../../../component/posts/__default_post/DefaultPosts';

/* --------------------------- POST ----------------------------- */

// Get
export const API_Post_L = (params) =>
    API_FakeReal(
        default_post_arr,
        () =>
            axiosDjangoClient({
                url: 'user/l-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_Post_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: 'user/c-post/',
            method: 'POST',
            data: data,
        })
    );

// Retrieve Delete
export const API_Post_RD = (pk, method = '', params = {}) =>
    API_FakeReal(default_post_arr[0], () =>
        axiosDjangoClient({
            url: 'user/rd-post/' + pk + '/',
            method: method,
            params: params,
        })
    );

// Update
export const API_Post_U = (pk, data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: 'user/u-post/' + pk + '/',
            method: 'PATCH',
            data: data,
        })
    );

/* --------------------------- PICTURE POST ----------------------------- */

// Get
export const API_PostPic_L = (params = {}) =>
    API_FakeReal(
        Array(6).fill(default_post_arr[0].vid_pics),
        () =>
            axiosDjangoClient({
                url: 'user/l-vid-pic-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_PostPic_C = (data = {}) =>
    axiosDjangoClient({
        url: 'user/c-vid-pic-post/',
        method: 'POST',
        data: data,
    });

/* --------------- VID PIC -------------- */

//
export const API_PostPic_RUD = (pk = 1, method, params = {}, data = {}) =>
    API_FakeReal(default_post_arr[0].vid_pics[0], () =>
        axiosDjangoClient({
            url: 'user/rud-vid-pic-post/' + pk + '/',
            method: method,
            params: params,
            data: data,
        })
    );

//
export const API_PostPicLike_L = (params = {}) =>
    API_FakeReal(
        default_post_arr[0].vid_pics[0].likes,
        () =>
            axiosDjangoClient({
                url: 'user/l-like-vid-pic-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_PostPicHistory_L = (params = {}) =>
    API_FakeReal(
        default_post_arr[0].vid_pics[0].histories,
        () =>
            axiosDjangoClient({
                url: 'user/l-history-vid-pic-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

/* --------------------------- LIKE POST ------------------------------ */

// Get
export const API_PostLike_L = (params) =>
    API_FakeReal(
        default_like_post_arr,
        () =>
            axiosDjangoClient({
                url: 'user/lc-like-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_PostLike_C = (data) =>
    axiosDjangoClient({
        url: 'user/lc-like-post/',
        method: 'POST',
        data: data,
    });

// Update
export const API_PostLike_U = (data) =>
    axiosDjangoClient({
        url: 'user/u-like-post/',
        method: 'PATCH',
        data: data,
    });

/* --------------------------------- SHARE POST -------------------------------- */

// Get
export const API_PostShare_L = (params) =>
    API_FakeReal(
        default_share_post_arr,
        () =>
            axiosDjangoClient({
                url: 'user/lc-share-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_PostShare_C = (data) =>
    axiosDjangoClient({
        url: 'user/lc-share-post/',
        method: 'POST',
        data: data,
    });

/* --------------------------------- HISTORY POST -------------------------------- */

// Get
export const API_PostHistory_L = (params) =>
    API_FakeReal(
        default_history_post_arr,
        () =>
            axiosDjangoClient({
                url: 'user/lc-history-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

// Get
export const API_PostHistory_R = (params) =>
    API_FakeReal(
        default_history_post_arr[0],
        () =>
            axiosDjangoClient({
                url: 'user/r-history-post/',
                method: 'GET',
                params: params,
            }),
        params
    );

/* ------------------------- COMMENT ---------------------------- */

// Get Create comment
export const API_PostCmt_LC = (method, params, data, is_vid_pic = false) =>
    API_FakeReal(
        method == 'GET' ? (is_vid_pic ? [] : default_cmt_post_arr) : data,
        () =>
            axiosDjangoClient({
                url: `user/lc-comment${is_vid_pic ? '-vid-pic' : ''}/`,
                method: method,
                params: params,
                data: data,
            }),
        params
    );

// Retrieve comment
export const API_PostCmt_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(is_vid_pic ? [] : default_cmt_post_arr[0], () =>
        axiosDjangoClient({
            url: `user/ud-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );

// Update Delete comment
export const API_PostCmt_UD = (pk, method, data, is_vid_pic = false) =>
    API_FakeReal(data, () =>
        axiosDjangoClient({
            url: `user/ud-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: method,
            data: data,
        })
    );

// Get
export const API_PostCmtLike_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        is_vid_pic ? [] : default_like_cmt_post_arr,
        () =>
            axiosDjangoClient({
                url: `user/l-like-comment${is_vid_pic ? '-vid-pic' : ''}/`,
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_PostCmtLike_C = (data, is_vid_pic = false) =>
    axiosDjangoClient({
        url: `user/c-like-comment${is_vid_pic ? '-vid-pic' : ''}/`,
        method: 'POST',
        data: data,
    });

// Update
export const API_PostCmtLike_U = (pk, data, is_vid_pic = false) =>
    axiosDjangoClient({
        url: `user/u-like-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
        method: 'PATCH',
        data: data,
    });

// HISTORY

//
export const API_PostCmtHistory_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        is_vid_pic ? [] : default_history_cmt_post_arr,
        () =>
            axiosDjangoClient({
                url: `user/lc-history-cmt${is_vid_pic ? '-vid-pic' : ''}/`,
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_PostHisCmt_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(is_vid_pic ? [] : default_history_cmt_post_arr[0], () =>
        axiosDjangoClient({
            url: `user/r-history-cmt${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );

/* ---------------------------- SUB ----------------------------------------- */

// Get Create sub
export const API_PostSub_LC = (method, params, data, is_vid_pic = false) =>
    API_FakeReal(
        is_vid_pic ? [] : default_sub_post_arr,
        () =>
            axiosDjangoClient({
                url: `user/l-sub-comment${is_vid_pic ? '-vid-pic' : ''}/`,
                method: method,
                params: params,
                data: data,
            }),
        params
    );

// Retrieve
export const API_PostSub_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(is_vid_pic ? [] : default_sub_post_arr[0], () =>
        axiosDjangoClient({
            url: `user/ud-sub-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );

// Update Delete sub
export const API_PostSub_UD = (pk, method, data, is_vid_pic = false) =>
    API_FakeReal(data, () =>
        axiosDjangoClient({
            url: `user/ud-sub-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: method,
            data: data,
        })
    );

// Get
export const API_PostSubLike_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        default_like_sub_post_arr,
        () =>
            axiosDjangoClient({
                url: `user/l-like-sub${is_vid_pic ? '-vid-pic' : ''}/`,
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_PostSubLike_C = (data, is_vid_pic = false) =>
    axiosDjangoClient({
        url: `user/c-like-sub${is_vid_pic ? '-vid-pic' : ''}/`,
        method: 'POST',
        data: data,
    });

// Update
export const API_PostSubLike_U = (pk, data, is_vid_pic = false) =>
    axiosDjangoClient({
        url: `user/u-like-sub${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
        method: 'PATCH',
        data: data,
    });

//  HISTORY

//
export const API_PostSubHistory_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        is_vid_pic ? [] : default_history_sub_post_arr,
        () =>
            axiosDjangoClient({
                url: `user/lc-history-sub${is_vid_pic ? '-vid-pic' : ''}/`,
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_PostHisSub_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(is_vid_pic ? [] : default_history_sub_post_arr[0], () =>
        axiosDjangoClient({
            url: `user/r-history-sub${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );
