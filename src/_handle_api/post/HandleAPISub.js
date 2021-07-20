import {
    API_PostSub_LC,
    API_PostSub_UD,
    API_PostSubLike_L,
    API_PostSubHistory_L,
    API_PostSub_R,
    API_PostHisSub_R,
    API_PostSubContentMore_R,
} from '../../api/api_django/user/user_post/UserPost';
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
    return res.data;
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
    // return res.data;
    return data;
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
    return res.data;;
}

// export async function handle_API_Sub_D(sub_id=0) {
//     const res = await API_();
//     return;
// }

export async function handle_API_MoreContentSub_R(
    sub_id = 0,
    is_vid_pic = false
) {
    const res = await API_PostSubContentMore_R(
        sub_id,
        {
            ...params_sub_post_more_content,
        },
        is_vid_pic
    );
    const { content_more } = res.data.content_obj;

    return content_more;
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
    return res.data;
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
    return res.data;
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
    const { content_more } = res.data.content_obj;

    return content_more;
}
