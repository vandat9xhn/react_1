import axiosDjangoClient from '../../_axios/AxiosDjango';
import { API_FakeReal } from '../../../_ConstAPI';
//
import {
    default_post_sub2_arr,
    default_post_sub2_history_arr,
    default_post_sub2_like_arr,
} from '../../../../_default/post/DefaultSub2';
import { default_content_more } from '../../../../_default/post/DefaultPosts';

//
export const API_PostSub2_LC = (method, params, data, is_vid_pic = false) =>
    API_FakeReal(
        default_post_sub2_arr(),
        () =>
            axiosDjangoClient({
                url: `/user/l-sub-comment${is_vid_pic ? '-vid-pic' : ''}/`,
                method: method,
                params: params,
                data: data,
            }),
        params
    );

//
export const API_PostSub_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(default_post_sub2_arr[0], () =>
        axiosDjangoClient({
            url: `/user/ud-sub-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );

export const API_PostSub2ContentMore_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(default_content_more(), () =>
        axiosDjangoClient({
            url: `/user/ud-sub-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );

//
export const API_PostSub2_UD = (pk, method, data, is_vid_pic = false) =>
    API_FakeReal(data, () =>
        axiosDjangoClient({
            url: `/user/ud-sub-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: method,
            data: data,
        })
    );

//
export const API_PostSub2Like_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        default_post_sub2_like_arr(),
        () =>
            axiosDjangoClient({
                url: `/user/l-like-sub${is_vid_pic ? '-vid-pic' : ''}/`,
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_PostSub2Like_C = (data, is_vid_pic = false) =>
    axiosDjangoClient({
        url: `/user/c-like-sub${is_vid_pic ? '-vid-pic' : ''}/`,
        method: 'POST',
        data: data,
    });

// Update
export const API_PostSub2Like_U = (pk, data, is_vid_pic = false) =>
    axiosDjangoClient({
        url: `/user/u-like-sub${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
        method: 'PATCH',
        data: data,
    });

//  HISTORY

//
export const API_PostSub2History_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        default_post_sub2_history_arr(),
        () =>
            axiosDjangoClient({
                url: `/user/lc-history-sub${is_vid_pic ? '-vid-pic' : ''}/`,
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_PostHisSub_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(default_content_more(), () =>
        axiosDjangoClient({
            url: `/user/r-history-sub${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );
