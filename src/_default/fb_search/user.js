import { default_action_user_case_obj } from '../_common/action_user_case';
import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getRandomName } from '../_common/default_name';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const default_fb_search_user_obj = () => {
    const action_case = getRandomFromArr([
        default_action_user_case_obj.add_friend,
        default_action_user_case_obj.reply_request,
        default_action_user_case_obj.follow,
        default_action_user_case_obj.chat,
    ]);

    return {
        id: getRandomId(),
        first_name: getRandomName(),
        last_name: getRandomName(),
        picture: getRandomImg(),

        action_case: action_case,
        info_1: getRandomFromArr([
            'Friend',
            `${getRandomNumber(100, 200)} followers`,
            'Trường THPT Cao Bá Quát',
        ]),
        info_2_arr: getRandomFromArr([
            ['Lives in Hanoi, Vietnam', 'Hanoi University'],
            ['Lives in Nam Dinh'],
            ['Havrd University'],
        ]),
    };
};

//
export const default_fb_search_user_arr = () => {
    return getDefaultArr(
        default_fb_search_user_obj,
        getRandomBool() ? 10 : 0,
        10
    );
};
