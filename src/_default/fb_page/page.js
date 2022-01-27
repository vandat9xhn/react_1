import { getRandomBool } from '../_common/default_bool';
import { getRandomImg } from '../_common/default_image';
import { getRandomPage } from '../_common/default_user';
import { getRandomPageType } from '../_common/getRandomPageType';

//
export const default_fb_page_obj = () => {
    const { page_obj } = getRandomPage();

    //
    return {
        ...page_obj,
        cover: getRandomImg(),
        has_new_story: getRandomBool(),

        info_extra_1: {
            title: `@${page_obj.name.toLowerCase().replace(' ', '')}`,
            has_link: false,
            link_to: '',
        },
        info_extra_2: {
            title: getRandomPageType(),
            has_link: false,
            link_to: '',
        },

        action_main_arr: ['learn_more'],
        action_arr: ['like', 'chat'],
        has_liked: getRandomBool(),
        has_followed: getRandomBool(),
    };
};
