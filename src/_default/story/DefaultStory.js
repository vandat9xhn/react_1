import { IS_MOBILE } from '../../_constant/Constant';
import { data_story_text_color_arr } from '../../_data/story/text';
//
import { default_define_user } from '../login/DefaultLogin';
//
import { getRandomBool } from '../_common/default_bool';
import {
    getRandomId,
    getRandomNumber,
    getRandomNumberArr,
} from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const default_story_viewer_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    has_reply: getRandomBool(),
    type_like_arr: getRandomNumberArr({ min: 0, max: 5 }),
});

export const default_story_viewer_arr = () =>
    getDefaultArr(default_story_viewer_obj, 0, 10);

//
const default_story_viewer_first_obj = () => {
    const count_viewer = getRandomBool() ? getRandomNumber(0, 30) : 0;
    const count_friend_viewer = getRandomNumber(0, count_viewer);

    return {
        viewer_arr: [],
        count_viewer: count_viewer,
        count_friend_viewer: count_friend_viewer,
    };
};

//
const default_story_item_obj = () => ({
    id: getRandomId(),
    story_link: getRandomBool() ? null : '/posts/' + getRandomId(),
    created_time: new Date().toString(),

    vid_pic: getRandomVidPic(),
    top_pic: getRandomNumber(30, 60) + '%',
    left_pic: getRandomNumber(30, 60) + '%',
    scale_pic: Math.floor(Math.random() * 10 + 10) / 10,
    rotate_pic: getRandomFromArr([-90, 90, 180]),

    text: getRandomBool() ? `Text ${getRandomNumber(0, 10000)}` : '',
    top_text: getRandomNumber(30, 60) + '%',
    left_text: getRandomNumber(30, 60) + '%',
    color_text_ix: getRandomId(data_story_text_color_arr.length - 1),
    scale_text: Math.floor(Math.random() * 10 + 10) / 10,
});

export const default_story_item_viewer_obj = () => {
    return {
        ...default_story_item_obj(),
        ...default_story_viewer_first_obj(),
    };
};

//
const default_story_obj = (has_new = false) => {
    const count_new = has_new ? getRandomNumber(1, 10) : 0;
    const count_min = count_new == 0 ? 1 : count_new;

    return {
        ...getRandomUser(),
        list: [default_story_item_viewer_obj()],
        count_new: count_new,
        count: getRandomNumber(
            count_min,
            count_min + (getRandomBool() ? 5 : 0)
        ),
    };
};

export const default_story_arr = (story_type = '', c_count = 0) => {
    const story_yours_arr = getRandomBool()
        ? [{ ...default_story_obj(getRandomBool()), user: default_define_user }]
        : [];

    if (story_type == 'yours') {
        return story_yours_arr;
    }

    const story_followed_arr = [
        ...getDefaultArr(() => default_story_obj(true), 0, 4),
        ...getDefaultArr(() => default_story_obj(false), 0, 4),
    ].slice(0, IS_MOBILE ? 6 : 4);

    if (story_type == 'followed' || 'suggested' || 'friends') {
        return story_followed_arr;
    }

    return [...(c_count ? [] : story_yours_arr), ...story_followed_arr];
};
