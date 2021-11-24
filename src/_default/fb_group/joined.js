import { getRandomBool } from '../_common/default_bool';
import { getRandomNumber } from '../_common/default_id';
import { getRandomGroup } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_fb_group_joined_obj = ({ pinned = false }) => {
    const new_post_count = getRandomBool() ? getRandomNumber(0, 4) : 0;

    return {
        ...getRandomGroup().group_obj,
        pinned: pinned,
        new_post_count: new_post_count,
        last_active_time: new Date().toString(),
    };
};

export const default_fb_group_joined_arr = ({ pinned }) => {
    return getDefaultArr(
        () => default_fb_group_joined_obj({ pinned: pinned }),
        12,
        12
    );
};
