import { IS_MOBILE } from '../../_constant/Constant';
import { data_story_text_color_arr } from '../../_data/story/text';
//
import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
export const default_story_item_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    created_time: new Date().toString(),

    text: getRandomBool() ? `Text ${getRandomNumber(0, 10000)}` : '',
    top_text: getRandomNumber(30, 60) + '%',
    left_text: getRandomNumber(30, 60) + '%',
    color_text_ix: getRandomId(data_story_text_color_arr.length - 1),
    scale_text: Math.floor(Math.random() * 10 + 10) / 10,
});

//
const default_story_obj = (has_new = false) => {
    const count_new = has_new ? getRandomNumber(1, 10) : 0;
    const count_min = count_new == 0 ? 1 : count_new;

    return {
        ...getRandomUser(),
        list: [default_story_item_obj()],
        count_new: count_new,
        count: getRandomNumber(
            count_min,
            count_min + (getRandomBool() ? 5 : 0)
        ),
    };
};

export const default_story_arr = () =>
    [
        ...getDefaultArr(() => default_story_obj(true), 0, 4),
        ...getDefaultArr(() => default_story_obj(false), 0, 4),
    ].slice(0, IS_MOBILE ? 6 : 4);
