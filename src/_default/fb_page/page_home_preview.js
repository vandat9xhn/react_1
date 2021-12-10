import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomNumber } from '../_common/default_id';

//
export const default_fb_page_home_preview_obj = () => {
    const info_has_link = getRandomBool();

    //
    return {
        info_obj: {
            content: getRandomContent().slice(0, 100),
            link_to: info_has_link ? 'https://fbshopeetgdd.web.app/' : '',
            link_title: info_has_link ? 'fbshopeetgdd.web.app/' : '',
        },
        like_obj: {
            count: getRandomNumber(1, 20) * 1000,
            friend_arr: [],
            friend_count: 0,
        },
        follow_obj: { count: getRandomNumber(10, 30) * 1000 },
        site_obj: {
            link_to: 'https://fbshopeetgdd.web.app/',
            link_title: 'fbshopeetgdd.web.app/',
        },
        phone_obj: { num_phone: '0123456789' },
    };
};
