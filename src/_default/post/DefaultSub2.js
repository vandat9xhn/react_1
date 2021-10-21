import { getRandomContentObj } from '../_common/default_content';
import { getRandomId } from '../_common/default_id';
import { getRandomVidPicOrNull } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { default_post_reacted_info_obj } from './reacted';

//
const default_post_sub2_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    ...getRandomContentObj(),
    ...default_post_reacted_info_obj(),

    histories: [],
    count_history: 0,
    vid_pic: getRandomVidPicOrNull(),

    sub_model: 1,
    profile_model: 3,
    created_time: '2021-04-02T06:44:46.495730Z',
    updated_time: '2021-04-02T06:44:46.495730Z',
});

export const default_post_sub2_arr = (min, max = 5) =>
    getDefaultArr(default_post_sub2_obj, min, max);

//
const default_post_sub2_like_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    type_like: getRandomId(5),
    sub_model: 1,
    profile_model: 2,
});

export const default_post_sub2_like_arr = () =>
    getDefaultArr(default_post_sub2_like_obj, 1, 10);

//
const default_post_sub2_history_obj = () => ({
    id: getRandomId(),
    ...getRandomContentObj(),
    content: '',
    created_time: '2021-05-08T02:57:45.006797Z',
    vid_pic: getRandomVidPicOrNull(),
    version: 1,
    sub_model: 1,
});

//
export const default_post_sub2_history_arr = () =>
    getDefaultArr(default_post_sub2_history_obj, 1, 5);
