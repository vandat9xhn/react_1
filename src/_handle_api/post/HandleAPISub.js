import { default_define_user } from '../../_default/login/DefaultLogin';
import { getRandomId } from '../../_default/_common/default_id';
// 
import { loadFile } from '../../_some_function/loadFile';
import makeFormData from '../../_some_function/makeFormData';
// 
import {
    API_PostSub_LC,
    API_PostSub_UD,
    API_PostSubLike_L,
    API_PostSubHistory_L,
    API_PostHisSub_R,
    API_PostSubContentMore_R,
    API_SubReactedInfo_L,
} from '../../api/api_django/user/user_post/sub';
//
import {
    params_sub_post_l,
    params_sub_post_more_content,
    params_like_sub_post_l,
    params_history_sub_post_l,
} from '../../_params/post/PostParams';

//
export async function handle_API_Sub_L({
    cmt_id = -1,
    c_count = 0,
    is_vid_pic = false,
    is_sub_2 = 0,
    sub_id = -1,
}) {
    const res = await API_PostSub_LC(
        'GET',
        {
            ...params_sub_post_l,
            comment_model: cmt_id,
            c_count: c_count,
            is_sub_2: is_sub_2,
            sub_id: sub_id,
        },
        is_vid_pic
    );
    return res.data;
}

//
export async function handle_API_Sub_C({
    cmt_id = -1,
    data = {},
    is_vid_pic = false,
    is_sub_2 = 0,
    sub_id = -1,
}) {
    const res = await API_PostSub_LC(
        'POST',
        {},
        makeFormData({
            comment_model: cmt_id,
            ...data,
            is_sub_2: is_sub_2,
            sub_id: sub_id,
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

        is_sub2: is_sub_2,
        sub_id: sub_id,

        subs_2: [],
        count_sub_2: 0,
        histories: [],
        count_history: 0,

        profile_model: default_define_user.id,
        comment_model: cmt_id,
        created_time: new Date().toString(),
        updated_time: new Date().toString(),
    };

    return fake_data;
}

//
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
    return res.data;
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

// LIKE
export async function handle_API_LikeSub_L({
    sub_id = 0,
    c_count = 0,
    type_like = -1,
    is_vid_pic = false,
}) {
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

//
export async function handle_API_SubReactedInfo_L({
    sub_id = 0,
    is_vid_pic = false,
}) {
    const res = await API_SubReactedInfo_L(
        {
            page: 1,
            size: 6,
            sub_model: sub_id,
        },
        is_vid_pic
    );
    return res.data;
}

// export async function handle_API_LikeSub_C(sub_id=0) {
//     const res = await API_();
//     return;
// }

// --- HISTORY

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
