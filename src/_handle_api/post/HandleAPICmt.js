import {
    API_PostCmt_LC,
    API_PostCmt_UD,
    API_PostCmt_R,
    API_PostCmtLike_L,
    API_PostCmtHistory_L,
    API_PostHisCmt_R,
} from '../../api/api_django/user/user_post/UserPost';
// 
import makeFormData from '../../_some_function/makeFormData';
//
import {
    params_cmt_post_l,
    params_cmt_post_more_content,
    params_like_cmt_post_l,
    params_history_cmt_post_l,
} from '../../_params/post/PostParams';

// 
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
    const { content_more } = res.data.content_obj;

    return content_more;
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
    const { content_more } = res.data.content_obj;

    return content_more;
}
