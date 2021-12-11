import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

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

        pic_arr: getDefaultArr(
            () => {
                return {
                    id: getRandomId(),
                    img: getRandomVidPic(),
                };
            },
            4,
            9
        ),
        video_obj: {
            id: getRandomNumber(),
            content: getRandomContent().slice(0, 100),
            thumbnail: getRandomVidPic(),
            video_time: '4:22',

            view_count: getRandomNumber(1, 20) * 10000,
            created_time_str: 'a day ago',

            reacted_ix_arr: [0, 1, 2],
            reacted_count: getRandomNumber(1, 20) * 1000,
            user_reacted_ix: 1,
            reacted_count_arr: [
                { reacted_ix: 0, count: 500 },
                { reacted_ix: 1, count: 1500 },
                { reacted_ix: 2, count: 300 },
            ],
        },
    };
};
