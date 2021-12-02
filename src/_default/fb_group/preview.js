import { getRandomBool } from '../_common/default_bool';
import { getRandomNumber } from '../_common/default_id';
import { getRandomGroup, getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
export const default_fb_group_preview_obj = () => {
    const joined = getRandomBool();

    const friend_arr = getDefaultArr(() => getRandomUser().user, 0, 2);
    const friend_count = getRandomNumber(
        friend_arr.length,
        friend_arr.length + 4
    );

    return {
        ...getRandomGroup().group_obj,

        joined: joined,
        privacy: getRandomFromArr(['Public', 'Private']),

        member_count: getRandomNumber(1, 20) * 1000,
        friend_arr: friend_arr,
        friend_count: friend_count,
    };
};

export const default_fb_group_preview_arr = () => {
    return getDefaultArr(default_fb_group_preview_obj, 16, 16);
};
