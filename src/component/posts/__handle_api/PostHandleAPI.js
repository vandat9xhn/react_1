import {
    API_Post_C,
    API_Post_RD,
    API_Post_U,
    API_PostLike_L,
    API_PostShare_L,
    API_PostHistory_L,
    //
    API_PostPicLike_L,
    API_PostPic_RUD,
    API_PostPicHistory_L,
    //
    API_PostCmt_LC,
    API_PostCmt_UD,
    API_PostCmt_R,
    API_PostCmtLike_L,
    API_PostCmtHistory_L,
    API_PostHisCmt_R,
    //
    API_PostSub_LC,
    API_PostSub_UD,
    API_PostSubLike_L,
    API_PostSubHistory_L,
    API_PostSub_R,
    API_PostHisSub_R,
    API_PostHistory_R,
    API_PostVidPicID_L,
} from '../../../api/api_django/user/user_post/UserPost';

import makeFormData from '../../../_some_function/makeFormData';
//
import {
    params_post_update,
    params_more_content_post,
    params_like_post_l,
    params_share_post_l,
    params_history_post_l,
    //
    params_cmt_post_l,
    params_cmt_post_more_content,
    params_like_cmt_post_l,
    params_history_cmt_post_l,
    //
    params_sub_post_l,
    params_sub_post_more_content,
    params_like_sub_post_l,
    params_history_sub_post_l,
    //
    params_vid_pic_post_r,
    params_vid_pic_content_post_r,
    params_vid_pic_like_post_l,
    params_history_vid_pic_post_l,
    params_id_vid_pic_post_l,
    params_more_content_history_post,
} from '../__params/PostParams';

/* ------------ POST ----------- */

export async function handle_API_PostUpdate_R(post_id = 0) {
    const res = await API_Post_RD(post_id, 'GET', params_post_update);

    return res.data;
}

export function handle_API_Post_D(post_id = 0) {
    return API_Post_RD(post_id, 'DELETE');
}

export async function handle_API_Post_C(data) {
    const res = await API_Post_C(makeFormData(data));

    return res.data;
}

export async function handle_API_MoreContent_R(post_id = 0) {
    const res = await API_Post_RD(post_id, 'GET', params_more_content_post);
    const { content } = res.data.content_obj;

    return content;
}

export function handle_API_Permission_U(post_id = 0, permission_post = 0) {
    return API_Post_U(
        post_id,
        makeFormData({
            permission_post: permission_post,
        })
    );
}

export async function handle_API_Post_U(post_id = 0, data) {
    const res = await API_Post_U(post_id, makeFormData(data));

    return res.data;
}

export async function handle_API_Like_L(post_id = 0, c_count = 0, type_like) {
    const res = await API_PostLike_L({
        ...params_like_post_l,
        post_model: post_id,
        c_count: c_count,
        type_like: type_like,
    });
    const { data, count } = res.data;

    return [data, count];
}

// export async function handle_API_Like_C(post_id=0) {
//     const res = await API_();
//     return;
// }

export async function handle_API_Share_L(post_id = 0, c_count = 0) {
    const res = await API_PostShare_L({
        ...params_share_post_l,
        post_model: post_id,
        c_count: c_count,
    });
    const { data, count } = res.data;

    return [data, count];
}

// export async function handle_API_Share_C(post_id=0) {
//     const res = await API_();
//     return;
// }

export async function handle_API_History_L(post_id = 0, c_count = 0) {
    const res = await API_PostHistory_L({
        ...params_history_post_l,
        post_model: post_id,
        c_count: c_count,
    });
    const { data, count } = res.data;

    return [data, count];
}

export async function handle_API_ContentMoreHistory_R(his_id = 0) {
    const res = await API_PostHistory_R({
        ...params_more_content_history_post,
        his_model: his_id,
    });
    const { content } = res.data.content_obj;

    return content;
}

/* ------------ COMMENT ----------- */

export async function handle_API_Cmt_L(
    post_id = 0,
    c_count = 0,
    is_vid_pic = false
) {
    const res = await API_PostCmt_LC(
        'GET',
        {
            ...params_cmt_post_l,
            post_model: post_id,
            c_count: c_count,
        },
        is_vid_pic
    );
    const { data, count } = res.data;

    return [data, count];
}

export async function handle_API_Cmt_C(
    post_id = 0,
    data = {},
    is_vid_pic = false
) {
    const res = await API_PostCmt_LC(
        'POST',
        {},
        makeFormData({
            post_model: post_id,
            ...data,
        }),
        is_vid_pic
    );
    // const { content, vid_pic } = res.data;
    const { content, vid_pic } = data;

    return [content, vid_pic];
}

export async function handle_API_Cmt_U(
    cmt_id = 0,
    data = {},
    is_vid_pic = false
) {
    const res = await API_PostCmt_UD(
        cmt_id,
        'PATCH',
        makeFormData({
            ...data,
        }),
        is_vid_pic
    );
    const { content, vid_pic } = res.data;

    return [content, vid_pic];
}

// export async function handle_API_Cmt_D(cmt_id=0) {
//     const res = await API_();
//     return;
// }

export async function handle_API_MoreContentCmt_R(
    cmt_id = 0,
    is_vid_pic = false
) {
    const res = await API_PostCmt_R(
        cmt_id,
        {
            ...params_cmt_post_more_content,
        },
        is_vid_pic
    );
    const { content } = res.data.content_obj;

    return content;
}

export async function handle_API_LikeCmt_L(
    cmt_id = 0,
    c_count = 0,
    type_like = -1,
    is_vid_pic = false
) {
    const res = await API_PostCmtLike_L(
        {
            ...params_like_cmt_post_l,
            comment_model: cmt_id,
            c_count: c_count,
            type_like: type_like,
        },
        is_vid_pic
    );
    const { data, count } = res.data;

    return [data, count];
}

// export async function handle_API_LikeCmt_C(cmt_id=0) {
//     const res = await API_();
//     return;
// }

export async function handle_API_HistoryCmt_L(
    cmt_id = 0,
    c_count = 0,
    is_vid_pic = false
) {
    const res = await API_PostCmtHistory_L(
        {
            comment_model: cmt_id,
            c_count: c_count,
            ...params_history_cmt_post_l,
        },
        is_vid_pic
    );
    const { data, count } = res.data;

    return [data, count];
}

export async function handle_API_MoreContentHisCmt_R(
    his_id = 0,
    is_vid_pic = false
) {
    const res = await API_PostHisCmt_R(
        his_id,
        {
            ...params_cmt_post_more_content,
        },
        is_vid_pic
    );
    const { content } = res.data.content_obj;

    return content;
}

/* ------------ Sub ----------- */

export async function handle_API_Sub_L(
    cmt_id = 0,
    c_count = 0,
    is_vid_pic = false
) {
    const res = await API_PostSub_LC(
        'GET',
        {
            ...params_sub_post_l,
            comment_model: cmt_id,
            c_count: c_count,
        },
        is_vid_pic
    );
    const { data, count } = res.data;

    return [data, count];
}

export async function handle_API_Sub_C(
    cmt_id = 0,
    data = {},
    is_vid_pic = false
) {
    const res = await API_PostSub_LC(
        'POST',
        {},
        makeFormData({
            comment_model: cmt_id,
            ...data,
        }),
        is_vid_pic
    );
    // const { content, vid_pic } = res.data;
    const { content, vid_pic } = data;

    return [content, vid_pic];
}

export async function handle_API_Sub_U(
    sub_id = 0,
    data = {},
    is_vid_pic = false
) {
    const res = await API_PostSub_UD(
        sub_id,
        'PATCH',
        makeFormData({
            ...data,
        }),
        is_vid_pic
    );
    const { content, vid_pic } = res.data;

    return [content, vid_pic];
}

// export async function handle_API_Sub_D(sub_id=0) {
//     const res = await API_();
//     return;
// }

export async function handle_API_MoreContentSub_R(
    sub_id = 0,
    is_vid_pic = false
) {
    const res = await API_PostSub_R(
        sub_id,
        {
            ...params_sub_post_more_content,
        },
        is_vid_pic
    );
    const { content } = res.data.content_obj;

    return content;
}

export async function handle_API_LikeSub_L(
    sub_id = 0,
    c_count = 0,
    type_like = -1,
    is_vid_pic = false
) {
    const res = await API_PostSubLike_L(
        {
            ...params_like_sub_post_l,
            sub_model: sub_id,
            c_count: c_count,
            type_like: type_like,
        },
        is_vid_pic
    );
    const { data, count } = res.data;

    return [data, count];
}

// export async function handle_API_LikeSub_C(sub_id=0) {
//     const res = await API_();
//     return;
// }

export async function handle_API_HistorySub_L(
    sub_id = 0,
    c_count = 0,
    is_vid_pic = false
) {
    const res = await API_PostSubHistory_L(
        {
            sub_model: sub_id,
            c_count: c_count,
            ...params_history_sub_post_l,
        },
        is_vid_pic
    );
    const { data, count } = res.data;

    return [data, count];
}

export async function handle_API_MoreContentHisSub_R(
    his_id = 0,
    is_vid_pic = false
) {
    const res = await API_PostHisSub_R(
        his_id,
        {
            ...params_sub_post_more_content,
        },
        is_vid_pic
    );
    const { content } = res.data.content_obj;

    return content;
}

/* ------------ VID PIC POST ----------- */

export async function handle_API_PostVidPicID_L(post_id = 0) {
    const res = await API_PostVidPicID_L({
        post_model: post_id,
        ...params_id_vid_pic_post_l,
    });

    return res.data;
}

export async function handle_API_PostVidPic_R(vid_pic_id = 0) {
    const res = await API_PostPic_RUD(vid_pic_id, 'GET', {
        ...params_vid_pic_post_r,
    });

    return res.data;
}

export async function handle_API_PostVidPic_U(vid_pic_id = 0, content) {
    const res = await API_PostPic_RUD(
        vid_pic_id,
        'PATCH',
        {},
        { content: content }
    );

    return res.data;
}

export async function handle_API_PostVidPicContent_R(vid_pic_id = 0) {
    const res = await API_PostPic_RUD(vid_pic_id, 'GET', {
        ...params_vid_pic_content_post_r,
    });
    const { content } = res.data.content_obj;

    return content;
}

export async function handle_API_PostVidPicLike_L(vid_pic_id = 0, c_count = 0) {
    const res = await API_PostPicLike_L({
        ...params_vid_pic_like_post_l,
        vid_pic_model: vid_pic_id,
        c_count: c_count,
    });
    const { data, count } = res.data;

    return [data, count];
}

export async function handle_API_PostVidPicHistory_L(
    vid_pic_id = 0,
    c_count = 0
) {
    const res = await API_PostPicHistory_L({
        ...params_history_vid_pic_post_l,
        vid_pic_model: vid_pic_id,
        c_count: c_count,
    });
    const { data, count } = res.data;

    return [data, count];
}

// cmt
export function handle_API_VidPicMoreContentCmt_R(cmt_id) {
    return handle_API_MoreContentCmt_R(cmt_id, true);
}

export function handle_API_VidPicCmt_L(post_id, c_count) {
    return handle_API_Cmt_L(post_id, c_count, true);
}

export function handle_API_VidPicCmt_C(post_id, data) {
    return handle_API_Cmt_C(post_id, data, true);
}

export function handle_API_VidPicCmt_U(cmt_id, data) {
    return handle_API_Cmt_U(cmt_id, data, true);
}

export function handle_API_VidPicLikeCmt_L(cmt_id, c_count, type_like) {
    return handle_API_LikeCmt_L(cmt_id, c_count, type_like, true);
}

export function handle_API_VidPicHistoryCmt_L(cmt_id, c_count) {
    return handle_API_HistoryCmt_L(cmt_id, c_count, true);
}

export function handle_API_MoreContentHisVidPicCmt_R(cmt_id) {
    return handle_API_MoreContentHisCmt_R(cmt_id, true);
}

// sub
export function handle_API_VidPicMoreContentSub_R(sub_id) {
    return handle_API_MoreContentSub_R(sub_id, true);
}

export function handle_API_VidPicSub_L(cmt_id, c_count) {
    return handle_API_Sub_L(cmt_id, c_count, true);
}

export function handle_API_VidPicSub_C(cmt_id, data) {
    return handle_API_Sub_C(cmt_id, data, true);
}

export function handle_API_VidPicSub_U(sub_id, data) {
    return handle_API_Sub_U(sub_id, data, true);
}

export function handle_API_VidPicLikeSub_L(sub_id, c_count, type_like) {
    return handle_API_LikeSub_L(sub_id, c_count, type_like, true);
}

export function handle_API_VidPicHistorySub_L(sub_id, c_count) {
    return handle_API_HistorySub_L(sub_id, c_count, true);
}

export function handle_API_VidPicMoreContentHisSub_R(his_id, c_count) {
    return handle_API_MoreContentHisSub_R(his_id, c_count, true);
}
