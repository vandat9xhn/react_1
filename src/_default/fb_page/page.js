import { getRandomBool } from '../_common/default_bool';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomPage } from '../_common/default_user';

//
export const default_fb_page_obj = () => {
    // 
    return {
        ...getRandomPage().page_obj,
        cover: getRandomVidPic(),

        has_new_story: getRandomBool(),

        action_arr: ['like', 'chat'],
        has_liked: getRandomBool(),
        has_followed: getRandomBool(),
    };
};
