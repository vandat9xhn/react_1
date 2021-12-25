import { getRandomContent } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { default_fb_page_about_obj } from './page_about';

//
export const default_fb_page_home_preview_obj = () => {
    //
    return {
        ...default_fb_page_about_obj(),

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
