import { getRandomId } from '../../_default/_common/default_id';
import { default_define_user } from '../../_default/login/DefaultLogin';
// 
import { loadFile } from '../../_some_function/loadFile';
import makeFormData from '../../_some_function/makeFormData';
// 
import {
    API_PostCmt_LC,
    API_PostCmt_UD,
    API_PostCmtLike_L,
    API_PostCmtHistory_L,
    API_PostHisCmt_R,
    API_PostCmtContentMore_R,
    API_CmtReactedInfo_L,
} from '../../api/api_django/user/user_post/cmt';
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
    return res.data;
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
    // return res.data;

    const { vid_pics } = data.vid_pic
        ? await loadFile([data.vid_pic])
        : { vid_pics: [{ vid_pic: '' }] };
    const fake_data = {
        id: getRandomId(),
        user: {
            ...default_define_user,
            sex: 'male',
            time_online: 0,
            has_new_story: false,
            has_seen_story: false,
        },
        content_obj: {
            content_more: '',
            has_more_content: false,
            content: data.content,
        },
        vid_pic: vid_pics[0].vid_pic,
        is_edited: false,

        reacted_arr: [],
        reacted_ix_arr: [],
        reacted_count: 0,
        user_reacted_ix: 0,

        subs: [],
        count_sub: 0,
        histories: [],
        count_history: 0,

        profile_model: default_define_user.id,
        [is_vid_pic ? 'vid_pic_model' : 'post_model']: post_id,
        created_time: new Date().toString(),
        updated_time: new Date().toString(),
    };

    return fake_data;
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
    // return res.data;

    return data;
}

// export async function handle_API_Cmt_D(cmt_id=0) {
//     const res = await API_();
//     return;
// }

export async function handle_API_MoreContentCmt_R(
    cmt_id = 0,
    is_vid_pic = false
) {
    const res = await API_PostCmtContentMore_R(
        cmt_id,
        {
            ...params_cmt_post_more_content,
        },
        is_vid_pic
    );
    const { content_more } = res.data.content_obj;

    return content_more;
}

export async function handle_API_LikeCmt_L({
    cmt_id = 0,
    c_count = 0,
    type_like = -1,
    is_vid_pic = false,
}) {
    const res = await API_PostCmtLike_L(
        {
            ...params_like_cmt_post_l,
            comment_model: cmt_id,
            c_count: c_count,
            type_like: type_like,
        },
        is_vid_pic
    );

    return res.data;
}

export async function handle_API_CmtReactedInfo_L({
    cmt_id = 0,
    is_vid_pic = false,
}) {
    const res = await API_CmtReactedInfo_L(
        {
            page: 1,
            size: 6,
            comment_model: cmt_id,
        },
        is_vid_pic
    );

    return res.data;
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
    return res.data;
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
