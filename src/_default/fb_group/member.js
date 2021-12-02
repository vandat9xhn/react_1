import { default_action_user_case_obj } from '../_common/action_user_case';
import { getRandomBool } from '../_common/default_bool';
import { getRandomId } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomName, getRandomPageName } from '../_common/default_name';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
export const default_fb_group_member_obj = (params = { is_friend: false }) => {
    const { is_friend } = params;

    const type_user = getRandomBool() ? 'person' : 'page';

    const common_obj = {
        id: getRandomId(),
        picture: getRandomVidPic(),
        type_user: type_user,

        badge_arr: [],
        badge_count: 0,
    };

    if (type_user == 'person') {
        return {
            ...common_obj,
            first_name: getRandomName(),
            last_name: getRandomName(),

            info_1: 'abc',
            info_2: 'efg',

            action_case: is_friend
                ? default_action_user_case_obj.chat
                : getRandomFromArr([
                      default_action_user_case_obj.chat,
                      default_action_user_case_obj.follow,
                      default_action_user_case_obj.add_friend,
                      '',
                  ]),
        };
    }

    return {
        ...common_obj,
        name: getRandomPageName(),

        info_1: 'abc',
        info_2: 'efg',

        action_name: 'like',
        has_liked: getRandomBool(),
        has_followed: false,
    };
};

export const default_fb_group_member_arr = ({ type = '' }) => {
    return getDefaultArr(
        default_fb_group_member_obj,
        type == 'new' ? 15 : 0,
        15
    );
};
