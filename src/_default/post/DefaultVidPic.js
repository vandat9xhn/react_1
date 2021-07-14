import { getRandomVidPic } from '../_common/default_image';
import { getRandomContentObj } from '../_common/default_content';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomId } from '../_common/default_id';
import { getRandomUser } from '../_common/default_user';
import { getDefaultUniqueLikeArr } from '../_common/default_unique_like';
// 
import { default_post_vid_pic_cmt_arr } from './DefaultVidPicCmt';

//
const default_post_vid_pic_id_obj = () => ({ id: getRandomId() });

export const default_post_vid_pic_id = () =>
    getDefaultArr(default_post_vid_pic_id_obj, 1, 10);

//
const default_post_vid_pic_like_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    type_like: getRandomId(5),
    vid_pic_model: 6,
    profile_model: 3,
});

export const default_post_vid_pic_like_arr = () =>
    getDefaultArr(default_post_vid_pic_like_obj, 1, 10);

//
const default_post_vid_pic_history_obj = () => ({
    ...getRandomContentObj(),
    created_time: '2021-04-01T07:48:48.176630Z',
});

export const default_post_vid_pic_history_arr = () =>
    getDefaultArr(default_post_vid_pic_history_obj, 1, 6);

//
export const default_post_vid_pic = () => ({
    id: getRandomId(),
    ...getRandomContentObj(),
    likes: [],
    arr_unique_like: getDefaultUniqueLikeArr(),
    count_like: 1,
    vid_pic: getRandomVidPic(),
    content: '',
    folder_picture: 'my folder picture',
    post_model: 11,
    ...getRandomUser(),
    comments: default_post_vid_pic_cmt_arr(0),
    count_comment: 1,
    histories: [],
    count_history: 2,
    created_time: '2021-04-01T07:48:48.176630Z',
    updated_time: '2021-04-01T15:18:30.339347Z',
});

export const default_post_vid_pic_arr = () =>
    getDefaultArr(default_post_vid_pic, 1, 10);
