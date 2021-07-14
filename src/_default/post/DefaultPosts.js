import { getRandomBool } from '../_common/default_bool';
import {
    getRandomContent,
    getRandomContentMore,
    getRandomContentObj,
} from '../_common/default_content';
import { getRandomId } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';

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
const default_vid_pic_cd = () => ({
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
            ? getDefaultArr(default_vid_pic_cd, 1, 4)
            : [],
        count_vid_pic_create: has_created ? 1 : 0,

        vid_pics_del: has_deleted
            ? getDefaultArr(default_vid_pic_cd, 1, 4)
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
export const default_post_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    ...getRandomContentObj(),
    vid_pics: [
        {
            id: getRandomId(),
            vid_pic: getRandomVidPic(),
        },
    ],
    count_vid_pic: 1,
    likes: [],
    count_like: 2,
    user_type_like: -2,
    shares: [],
    count_share: 3,
    count_unique_share: 3,
    count_user_shared: 2,
    comments: [],
    count_comment: 11,
    histories: [],
    count_history: 10,
    created_time: '2021-04-01T07:48:48.176630Z',
    permission_post: 0,
    updated_time: '2021-04-01T15:18:30.339347Z',
    profile_model: 1,
});

export const default_post_arr = () => getDefaultArr(default_post_obj, 4, 4);
