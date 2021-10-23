import { getRandomContentObj } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPicOrNull } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { default_post_reacted_info_obj } from './reacted';

//
const default_post_sub_common_obj = ({ is_sub2 = false, sub_id = -1 }) => {
    //
    return {
        id: getRandomId(),
        ...getRandomUser(),
        ...getRandomContentObj(),
        ...default_post_reacted_info_obj(),

        is_sub2: is_sub2,
        sub_id: sub_id,

        histories: [],
        count_history: 0,
        vid_pic: getRandomVidPicOrNull(),

        comment_model: 1,
        profile_model: 3,
        created_time: '2021-04-02T06:44:46.495730Z',
        updated_time: '2021-04-02T06:44:46.495730Z',
    };
};

//
const default_post_sub_obj = () => {
    //
    const sub_obj = default_post_sub_common_obj({});
    const subs_2 = getDefaultArr(
        () =>
            default_post_sub_common_obj({ is_sub2: true, sub_id: sub_obj.id }),
        0,
        1
    );

    //
    return {
        ...sub_obj,
        subs_2: subs_2,
        count_sub_2: subs_2.length ? getRandomNumber(2, 5) : 0,
    };
};

export const default_post_sub_arr = (min, max = 5) =>
    getDefaultArr(default_post_sub_obj, min, max);

//
const default_post_sub_like_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    type_like: getRandomId(5),

    sub_model: 1,
    profile_model: 2,
});

export const default_post_sub_like_arr = () =>
    getDefaultArr(default_post_sub_like_obj, 1, 10);

//
const default_post_sub_history_obj = () => ({
    id: getRandomId(),
    ...getRandomContentObj(),
    content: '',
    vid_pic: getRandomVidPicOrNull(),

    version: 1,
    sub_model: 1,
    created_time: '2021-05-08T02:57:45.006797Z',
});

//
export const default_post_sub_history_arr = () =>
    getDefaultArr(default_post_sub_history_obj, 1, 5);
