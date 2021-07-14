import {
    API_PostPicLike_L,
    API_PostPic_RUD,
    API_PostPicHistory_L,
    API_PostVidPicID_L,
    API_PostPicContentMore_R,
} from '../../api/api_django/user/user_post/UserPost';

import makeFormData from '../../_some_function/makeFormData';
//
import {
    params_vid_pic_post_r,
    params_vid_pic_content_post_r,
    params_vid_pic_like_post_l,
    params_history_vid_pic_post_l,
    params_id_vid_pic_post_l,
} from '../../_params/post/PostParams';

//
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
    const res = await API_PostPicContentMore_R(vid_pic_id, 'GET', {
        ...params_vid_pic_content_post_r,
    });
    const { content_more } = res.data.content_obj;

    return content_more;
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
