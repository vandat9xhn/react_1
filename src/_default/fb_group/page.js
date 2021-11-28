import { getRandomBool } from '../_common/default_bool';
import { getRandomNumber } from '../_common/default_id';
import { getRandomGroup, getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
export const default_fb_group_page_obj = () => {
    const joined = getRandomBool();

    const member_arr = getDefaultArr(() => getRandomUser().user, 6, 8);

    return {
        ...getRandomGroup().group_obj,
        color_obj: {
            bg: getRandomFromArr(['var(--md-bg-fb)', '#B7CCB8']),
            bg_btn: getRandomFromArr(['var(--green)', 'var(--md-bg-ccc)']),
            color: getRandomFromArr(['var(--green)', 'var(--md-color)']),
        },

        joined: joined,
        privacy: getRandomFromArr(['Public', 'Private']),

        count_member: getRandomNumber(1, 20) * 1000,
        // friend_arr: friend_arr,
        // friend_count: friend_count,

        action_name: joined ? 'joined' : 'join',

        member_arr: member_arr,
        count_member: getRandomNumber(1, 20) * 10000,
    };
};
