import { getRandomContentObj } from '../_common/default_content';
import { getRandomId } from '../_common/default_id';
import { getRandomVidPicOrNull } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
//
import { default_post_sub_arr } from './DefaultSub';
import { default_post_reacted_info_obj } from './reacted';

//
export const default_post_cmt_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    ...getRandomContentObj(),
    ...default_post_reacted_info_obj(),
    
    subs: default_post_sub_arr(0, 1),
    count_sub: 1,
    histories: [],
    count_history: 0,
    vid_pic: getRandomVidPicOrNull(),

    profile_model: 2,
    post_model: 11,
    created_time: '2021-04-02T06:42:36.443763Z',
    updated_time: '2021-04-02T06:42:36.443763Z',
});

export const default_post_cmt_arr = () =>
    getDefaultArr(default_post_cmt_obj, 0, 5);

//
const default_post_cmt_like_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    type_like: getRandomId(5),
    comment_model: 1,
    profile_model: 3,
});

export const default_post_cmt_like_arr = () =>
    getDefaultArr(default_post_cmt_like_obj, 0, 10);

//
const default_post_cmt_history_obj = () => ({
    id: getRandomId(),
    ...getRandomContentObj(),
    content: '',
    created_time: '2021-05-08T02:57:45.006797Z',
    vid_pic: getRandomVidPicOrNull(),
    version: 1,
    comment_model: 1,
});

export const default_post_cmt_history_arr = () =>
    getDefaultArr(default_post_cmt_history_obj, 1, 5);
