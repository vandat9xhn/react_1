import {
    API_Post_C,
    API_Post_RD,
    API_Post_U,
    API_PostLike_L,
    API_PostShare_L,
    API_PostHistory_L,
    API_PostHistory_R,
    API_PostMoreContent_R,
    API_PostReactedInfo_L,
} from '../../api/api_django/user/user_post/UserPost';
//
import makeFormData from '../../_some_function/makeFormData';
//
import {
    params_post_update,
    params_more_content_post,
    params_like_post_l,
    params_share_post_l,
    params_history_post_l,
    params_more_content_history_post,
} from '../../_params/post/PostParams';

//
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
    const res = await API_PostMoreContent_R(post_id, params_more_content_post);
    const { content_more } = res.data.content_obj;

    return content_more;
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

    return res.data;
}

//
export async function handle_API_PostReactedInfo_L({
    post_id = 0,
    is_vid_pic = false,
}) {
    const res = await API_PostReactedInfo_L(
        {
            page: 1,
            size: 6,
            post_model: post_id,
        },
        is_vid_pic
    );
    return res.data;
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
    return res.data;
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

    return res.data;
}

export async function handle_API_ContentMoreHistory_R(his_id = 0) {
    const res = await API_PostHistory_R({
        ...params_more_content_history_post,
        his_model: his_id,
    });
    const { content_more } = res.data.content_obj;

    return content_more;
}
