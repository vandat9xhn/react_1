import axiosDjangoClient from '../../_axios/AxiosDjango';
import { API_FakeReal } from '../../../_ConstAPI';
//
import {
    default_post_sub_history_arr,
    default_post_sub_like_arr,
    default_post_sub_arr,
} from '../../../../_default/post/DefaultSub';
import { default_content_more } from '../../../../_default/post/DefaultPosts';
import { default_post_reacted_info_total_arr } from '../../../../_default/post/reacted';

// Get Create sub
export const API_PostSub_LC = (method, params, data, is_vid_pic = false) =>
    API_FakeReal(
        default_post_sub_arr(),
        () =>
            axiosDjangoClient({
                url: `/user/l-sub-comment${is_vid_pic ? '-vid-pic' : ''}/`,
                method: method,
                params: params,
                data: data,
            }),
        params
    );

// Retrieve
export const API_PostSub_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(default_post_sub_arr[0], () =>
        axiosDjangoClient({
            url: `/user/ud-sub-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );

export const API_PostSubContentMore_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(default_content_more(), () =>
        axiosDjangoClient({
            url: `/user/ud-sub-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );

// Update Delete sub
export const API_PostSub_UD = (pk, method, data, is_vid_pic = false) =>
    API_FakeReal(data, () =>
        axiosDjangoClient({
            url: `/user/ud-sub-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: method,
            data: data,
        })
    );

// ---- LIKE

// Get
export const API_PostSubLike_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        default_post_sub_like_arr(),
        () =>
            axiosDjangoClient({
                url: `/user/l-like-sub${is_vid_pic ? '-vid-pic' : ''}/`,
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_SubReactedInfo_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        default_post_reacted_info_total_arr(),
        () =>
            axiosDjangoClient({
                url: `/user/sub-reacted${is_vid_pic ? '-vid-pic' : ''}-l/`,
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_PostSubLike_C = (data, is_vid_pic = false) =>
    axiosDjangoClient({
        url: `/user/c-like-sub${is_vid_pic ? '-vid-pic' : ''}/`,
        method: 'POST',
        data: data,
    });

// Update
export const API_PostSubLike_U = (pk, data, is_vid_pic = false) =>
    axiosDjangoClient({
        url: `/user/u-like-sub${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
        method: 'PATCH',
        data: data,
    });

//  HISTORY

//
export const API_PostSubHistory_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        default_post_sub_history_arr(),
        () =>
            axiosDjangoClient({
                url: `/user/lc-history-sub${is_vid_pic ? '-vid-pic' : ''}/`,
                method: 'GET',
                params: params,
            }),
        params,
        true
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
