import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomNumber } from '../_common/default_id';
import { getRandomPage } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
import { getRandomPageType } from '../_common/getRandomPageType';

//
export const default_fb_page_preview_obj = () => {
    const has_followed = getRandomBool();
    const has_liked = getRandomBool();

    // -----

    const action_case_arr = [];

    if (has_liked) {
        action_case_arr.push('like');
    } else if (has_followed) {
        action_case_arr.push('follow');
        getRandomBool() && action_case_arr.push('chat');
    } else {
        action_case_arr.push(getRandomFromArr(['like', 'chat']));
    }

    if (action_case_arr.length == 1 && getRandomBool()) {
        action_case_arr.push(getRandomFromArr(['learn_more', 'contact']));
    }

    // ------

    return {
        ...getRandomPage().page_obj,

        following_count: getRandomNumber(1, 20) * 1000,
        like_count: getRandomNumber(1, 20) * 1000,
        has_followed: has_followed,
        has_liked: has_liked,

        type: getRandomPageType(),
        description: getRandomContent().slice(0, 50),
        web_link: 'https://fbshopeetgdd.web.app',
        phone: '0123456789',

        action_case_arr: action_case_arr.map((item) => {
            return {
                action_name: item,
            };
        }),
    };
};

export const default_fb_page_preview_arr = () => {
    return getDefaultArr(default_fb_page_preview_obj, 16, 16);
};
