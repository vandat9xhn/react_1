import { data_story_bg_arr } from '../../_data/story/text';
import { getRandomBool } from '../_common/default_bool';
import {
    getRandomContent,
    getRandomContentMore,
    getRandomContentObj,
} from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import {
    getRandomGroup,
    getRandomPage,
    getRandomUser,
} from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
import { default_post_emoji_arr } from './cu_emoji';
import { default_post_user_tag_arr } from './cu_user_tag';
import { default_post_reacted_info_obj } from './reacted';

//
export const default_content_more = () => ({
    content_obj: {
        content_more: getRandomContentMore(),
    },
});

//
const default_like_post_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    type_like: getRandomId(5),
    vid_pic_model: 6,
    profile_model: 3,
});

//
export const default_post_like_arr = () =>
    getDefaultArr(default_like_post_obj, 1, 10);

//
const default_share_post_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    post_model: 11,
    profile_model: 1,
});

export const default_post_share_arr = () =>
    getDefaultArr(default_share_post_obj, 1, 10);

//
const default_vid_pic_CD = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    content: getRandomContent(),
    his_post: 1,
});

const default_post_history_obj = () => {
    const has_created = getRandomBool();
    const has_deleted = getRandomBool();

    return {
        id: getRandomId(),

        vid_pics_create: has_created
            ? getDefaultArr(default_vid_pic_CD, 1, 4)
            : [],
        count_vid_pic_create: has_created ? 1 : 0,

        vid_pics_del: has_deleted
            ? getDefaultArr(default_vid_pic_CD, 1, 4)
            : [],
        count_vid_pic_del: has_deleted ? 1 : 0,

        ...getRandomContentObj(),
        created_time: '2021-05-10T03:27:29.438225Z',
        version: 1,
        post_model: 11,
    };
};

export const default_post_history_arr = () =>
    getDefaultArr(default_post_history_obj, 1, 10);

//
const post_vid_pic_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    content: getRandomContent(),
});

const post_vid_pic_arr = () =>
    getDefaultArr(post_vid_pic_obj, 0, getRandomBool() ? 4 : 0);

export const default_post_obj = (
    params = {
        post_where: getRandomFromArr(['user', 'group', 'page']),
    }
) => {
    // --- WHERE
    const { post_where } = params;

    const data_user = {};

    if (post_where == 'page') {
        const page_type_arr = [
            {
                name: 'sponsored',
                title_at_head: '',
                title_at_time: 'Sponsored',
                link_title_at_time: '/privacy/sponsored',
            },
            {
                name: 'suggested',
                title_at_head: 'Suggested for you',
                title_at_time: '',
                link_title_at_time: '',
            },
            {
                name: 'like',
                title_at_head: '',
                title_at_time: '',
                link_title_at_time: '',
            },
            {
                name: 'followed',
                title_at_head: '',
                title_at_time: '',
                link_title_at_time: '',
            },
        ];
        const page_type_obj = getRandomFromArr(page_type_arr);

        data_user['page_obj'] = {
            ...getRandomPage().page_obj,

            type: page_type_obj.name,
            title_at_head: page_type_obj.title_at_head,
            title_at_time: page_type_obj.title_at_time,
            link_title_at_time: page_type_obj.link_title_at_time,
        };
    } else {
        data_user['user'] = getRandomUser().user;
    }

    if (post_where == 'group') {
        data_user['group_obj'] = {
            ...getRandomGroup().group_obj,
            privacy: getRandomFromArr(['Public', 'Private']),
        };
    }

    if (post_where == 'user') {
        if (getRandomBool() && getRandomBool() && getRandomBool()) {
            data_user['to_user'] = getRandomUser().user;
            data_user['is_head_to'] = true;
        } else {
            data_user['is_head_to'] = false;
            data_user['to_user'] = null;
        }
    }

    // --- TAG
    const max_user_tag =
        post_where == 'group' && !(getRandomBool() && getRandomBool()) ? 0 : 2;
    const user_tag_arr =
        post_where == 'page' ? [] : default_post_user_tag_arr(max_user_tag);
    const user_tag_count =
        max_user_tag > user_tag_arr
            ? user_tag_arr.length
            : getRandomNumber(user_tag_arr.length, 12);

    const vid_pics = post_vid_pic_arr();
    const vid_pic_count =
        vid_pics.length == 0
            ? 0
            : vid_pics.length <= 4
            ? vid_pics.length
            : getRandomNumber(4, 10);

    //
    return {
        id: getRandomId(),
        ...data_user,
        post_where: post_where,

        ...getRandomContentObj(),
        vid_pics: vid_pics,
        vid_pic_count: vid_pic_count,

        emoji_obj:
            post_where == 'user' && getRandomBool() && getRandomBool()
                ? getRandomFromArr(default_post_emoji_arr())
                : {},
        user_tag_arr: user_tag_arr,
        user_tag_count: user_tag_count,

        bg_obj: vid_pics.length
            ? null
            : getRandomBool()
            ? {
                  is_bg_img: true,
                  bg: getRandomFromArr(data_story_bg_arr),
                  color: 'white',
              }
            : null,
        //
        ...default_post_reacted_info_obj(),
        //
        share_arr: [],
        count_share: 3,
        count_unique_share: 3,
        count_user_shared: 2,

        comments: [],
        count_comment: getRandomNumber(0, 20),
        histories: [],
        count_history: 10,

        profile_model: 1,
        permission_post: data_user['to_user']
            ? 2
            : post_where == 'user'
            ? getRandomNumber(0, 4)
            : 0,
        created_time: '2021-04-01T07:48:48.176630Z',
        updated_time: '2021-04-01T15:18:30.339347Z',
    };
};

export const default_post_arr = () => getDefaultArr(default_post_obj, 6, 10);
