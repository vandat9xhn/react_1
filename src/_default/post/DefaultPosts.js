import { data_story_bg_arr } from '../../_data/story/text';
import { getRandomBool } from '../_common/default_bool';
import {
    getRandomContent,
    getRandomContentMore,
    getRandomContentObj,
} from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
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
    getDefaultArr(post_vid_pic_obj, 0, getRandomBool() ? 6 : 0);

export const default_post_obj = () => {
    // --- TAG
    const max_user_tag = 2;
    const user_tag_arr = default_post_user_tag_arr(max_user_tag);
    const user_tag_count =
        max_user_tag > user_tag_arr
            ? user_tag_arr.length
            : getRandomNumber(user_tag_arr.length, 12);

    const vid_pics = post_vid_pic_arr();

    // 
    return {
        id: getRandomId(),
        ...getRandomUser(),
        emoji_obj:
            getRandomBool() && getRandomBool()
                ? getRandomFromArr(default_post_emoji_arr())
                : {},
        user_tag_arr: user_tag_arr,
        user_tag_count: user_tag_count,
        ...getRandomContentObj(),
        vid_pics: vid_pics,
        bg_obj: vid_pics.length
            ? null
            : getRandomBool()
            ? {
                  is_bg_img: true,
                  bg: getRandomFromArr(data_story_bg_arr),
                  color: 'white',
              }
            : null,
        count_vid_pic: 1,
        // 
        ...default_post_reacted_info_obj(),
        // 
        share_arr: [],
        count_share: 3,
        count_unique_share: 3,
        count_user_shared: 2,
        
        comments: [],
        count_comment: 11,
        histories: [],
        count_history: 10,
        
        profile_model: 1,
        permission_post: 0,
        created_time: '2021-04-01T07:48:48.176630Z',
        updated_time: '2021-04-01T15:18:30.339347Z',
    };
};

export const default_post_arr = () => getDefaultArr(default_post_obj, 6, 10);
