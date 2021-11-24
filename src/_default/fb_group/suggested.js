import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomGroup, getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const default_fb_group_suggested_obj = () => {
    const friend_arr = getDefaultArr(() => getRandomUser().user, 0, 2);
    const friend_count = getRandomNumber(
        friend_arr.length,
        friend_arr.length + 4
    );

    return {
        ...getRandomGroup().group_obj,

        privacy: getRandomFromArr(['Public', 'Private']),
        count_member: getRandomNumber(1, 20) * 1000,

        post_count: getRandomNumber(1, 50),
        post_unit: getRandomFromArr(['day', 'week']),

        friend_arr: friend_arr,
        friend_count: friend_count,
        has_more_friend: friend_count > friend_arr.length,
    };
};

export const default_fb_group_suggested_arr = () => {
    return getDefaultArr(default_fb_group_suggested_obj, 16, 16);
};
