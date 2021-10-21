import {
    API_PostSub2_LC,
    API_PostSub2_UD,
    API_PostSub2Like_L,
    API_PostSub2History_L,
    API_PostHisSub2_R,
    API_PostSub2ContentMore_R,
} from '../../api/api_django/user/user_post/sub2';
//
import makeFormData from '../../_some_function/makeFormData';
//
import {
    params_sub_post_l,
    params_sub_post_more_content,
    params_like_sub_post_l,
    params_history_sub_post_l,
} from '../../_params/post/PostParams';

//
export async function handle_API_Sub2_L(
    cmt_id = 0,
    c_count = 0,
    is_vid_pic = false
) {
    const res = await API_PostSub2_LC(
        'GET',
        {
            ...params_sub_post_l,
            comment_model: cmt_id,
            c_count: c_count,
        },
        is_vid_pic
    );
    return res.data;
}

export async function handle_API_Sub2_C(
    cmt_id = 0,
    data = {},
    is_vid_pic = false
) {
    const res = await API_PostSub2_LC(
        'POST',
        {},
        makeFormData({
            comment_model: cmt_id,
            ...data,
        }),
        is_vid_pic
    );
    // return res.data;
    return data;
}

export async function handle_API_Sub2_U(
    sub_id = 0,
    data = {},
    is_vid_pic = false
) {
    const res = await API_PostSub2_UD(
        sub_id,
        'PATCH',
        makeFormData({
            ...data,
        }),
        is_vid_pic
    );
    return res.data;
}

// export async function handle_API_Sub2_D(sub_id=0) {
//     const res = await API_();
//     return;
// }

export async function handle_API_MoreContentSub2_R(
    sub_id = 0,
    is_vid_pic = false
) {
    const res = await API_PostSub2ContentMore_R(
        sub_id,
        {
            ...params_sub_post_more_content,
        },
        is_vid_pic
    );
    const { content_more } = res.data.content_obj;

    return content_more;
}

export async function handle_API_LikeSub2_L(
    sub_id = 0,
    c_count = 0,
    type_like = -1,
    is_vid_pic = false
) {
    const res = await API_PostSub2Like_L(
        {
            ...params_like_sub_post_l,
            sub_model: sub_id,
            c_count: c_count,
            type_like: type_like,
        },
        is_vid_pic
    );
    return res.data;
}

// export async function handle_API_LikeSub2_C(sub_id=0) {
//     const res = await API_();
//     return;
// }

export async function handle_API_HistorySub2_L(
    sub_id = 0,
    c_count = 0,
    is_vid_pic = false
) {
    const res = await API_PostSub2History_L(
        {
            sub_model: sub_id,
            c_count: c_count,
            ...params_history_sub_post_l,
        },
        is_vid_pic
    );
    return res.data;
}

export async function handle_API_MoreContentHisSub2_R(
    his_id = 0,
    is_vid_pic = false
) {
    const res = await API_PostHisSub2_R(
        his_id,
        {
            ...params_sub_post_more_content,
        },
        is_vid_pic
    );
    const { content_more } = res.data.content_obj;

    return content_more;
}
