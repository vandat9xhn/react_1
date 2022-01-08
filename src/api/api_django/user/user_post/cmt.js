import axiosDjangoClient from '../../_axios/AxiosDjango';
import { API_FakeReal } from '../../../_ConstAPI';
//
import {
    default_post_cmt_arr,
    default_post_cmt_history_arr,
    default_post_cmt_like_arr,
    default_post_cmt_obj,
} from '../../../../_default/post/DefaultCmt';
import { default_content_more } from '../../../../_default/post/DefaultPosts';
import { default_post_reacted_info_total_arr } from '../../../../_default/post/reacted';

// Get Create
export const API_PostCmt_LC = (method, params, data, is_vid_pic = false) =>
    API_FakeReal(
        method == 'GET' ? default_post_cmt_arr() : data,
        () =>
            axiosDjangoClient({
                url: `/user/lc-comment${is_vid_pic ? '-vid-pic' : ''}/`,
                method: method,
                params: params,
                data: data,
            }),
        params
    );

// Retrieve
export const API_PostCmt_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(default_post_cmt_obj(), () =>
        axiosDjangoClient({
            url: `/user/ud-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );

export const API_PostCmtContentMore_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(default_content_more(), () =>
        axiosDjangoClient({
            url: `/user/ud-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );

// Update Delete
export const API_PostCmt_UD = (pk, method, data, is_vid_pic = false) =>
    API_FakeReal(data, () =>
        axiosDjangoClient({
            url: `/user/ud-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: method,
            data: data,
        })
    );

// ------ LIKE

// Get
export const API_PostCmtLike_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        default_post_cmt_like_arr(),
        () =>
            axiosDjangoClient({
                url: `/user/l-like-comment${is_vid_pic ? '-vid-pic' : ''}/`,
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_CmtReactedInfo_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        default_post_reacted_info_total_arr(),
        () =>
            axiosDjangoClient({
                url: `fb/post/comment-reacted${
                    is_vid_pic ? '-vid-pic' : ''
                }-l/`,
                method: 'GET',
                params: params,
            }),
        params
    );

// Create
export const API_PostCmtLike_C = (data, is_vid_pic = false) =>
    axiosDjangoClient({
        url: `/user/c-like-comment${is_vid_pic ? '-vid-pic' : ''}/`,
        method: 'POST',
        data: data,
    });

// Update
export const API_PostCmtLike_U = (pk, data, is_vid_pic = false) =>
    axiosDjangoClient({
        url: `/user/u-like-comment${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
        method: 'PATCH',
        data: data,
    });

// ------ HISTORY

//
export const API_PostCmtHistory_L = (params, is_vid_pic = false) =>
    API_FakeReal(
        default_post_cmt_history_arr(),
        () =>
            axiosDjangoClient({
                url: `/user/lc-history-cmt${is_vid_pic ? '-vid-pic' : ''}/`,
                method: 'GET',
                params: params,
            }),
        params,
        true
    );

//
export const API_PostHisCmt_R = (pk, params, is_vid_pic = false) =>
    API_FakeReal(default_content_more(), () =>
        axiosDjangoClient({
            url: `/user/r-history-cmt${is_vid_pic ? '-vid-pic' : ''}/${pk}/`,
            method: 'GET',
            params: params,
        })
    );
