import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getRandomPage, getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const default_fb_search_page_obj = () => {
    const action_case = getRandomFromArr(['like', 'followed']);
    const friend_arr = getDefaultArr(() => getRandomUser().user, 0, 1);

    return {
        ...getRandomPage().page_obj,

        description: getRandomContent().slice(0, 100),
        count_like: getRandomNumber(1, 20) * 1000,
        action_case: action_case,
        has_tick: getRandomBool() * getRandomBool(),

        friend_arr: friend_arr,
        friend_count:
            friend_arr.length == 0 ? 0 : getRandomNumber(friend_arr.length, 10),
    };
};

export const default_fb_search_page_arr = () => {
    return getDefaultArr(default_fb_search_page_obj, 16, 16);
};
