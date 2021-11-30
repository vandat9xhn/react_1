import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomHashTag } from '../_common/hag_tag';

//
const default_fb_group_topic_obj = ({ visible, pinned }) => {
    return {
        id: getRandomId(),
        hash_tag: getRandomHashTag(),
        post_count: getRandomNumber(1, 200),
        is_hidden: visible ? false : getRandomBool(),
        pinned: pinned,
    };
};

export const default_fb_group_topic_arr = ({ size = 0, c_count = 0 }) => {
    return getDefaultArr(
        () =>
            default_fb_group_topic_obj({
                visible: size == 3,
                pinned: c_count == 0,
            }),
        size == 3 ? 0 : size,
        size
    );
};
