import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomName, getRandomPageName } from '../_common/default_name';
import { getRandomGroup, getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const GROUP_COLOR_ARR = [
    {
        bg: '',
        bg_btn: '#0091DA',
        color: '#57BCEF',
    },
    {
        bg: '#B6C8DE',
        bg_btn: '#2F9A48',
        color: '#72BF84',
    },
    {
        bg: '#B6C8DE',
        bg_btn: '#0091DA',
        color: '#57BCEF',
    },
    {
        bg: '#E1BEC0',
        bg_btn: '#EF5370',
        color: '#FD90A5',
    },
];

//
export const default_fb_group_page_obj = () => {
    const joined = getRandomBool();
    const member_arr = getDefaultArr(() => getRandomUser().user, 6, 8);
    const affiliation_to = getRandomFromArr(['user', 'page']);

    return {
        ...getRandomGroup().group_obj,

        color_obj: getRandomFromArr(GROUP_COLOR_ARR),
        affiliation_obj:
            getRandomBool() || true
                ? {
                      to: affiliation_to,
                      id: getRandomId(),
                      name:
                          affiliation_to == 'user'
                              ? getRandomName()
                              : getRandomPageName(),
                  }
                : { to: '', id: 0, name: '' },

        is_admin: getRandomBool(),
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
