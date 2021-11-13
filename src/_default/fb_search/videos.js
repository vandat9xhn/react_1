import { getRandomContent } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_fb_search_video_obj = () => {
    return {
        id: getRandomId(),
        title: 'Video title',
        img: getRandomVidPic(),
        description: getRandomContent().slice(0, 100),

        total_time_str: '5:11',
        count_view: getRandomNumber(10, 50) * 1000,

        page_name: 'Page name',
        page_link: `/watch/page_link`,

        created_time: new Date().toDateString(),
    };
};

export const default_fb_search_video_arr = () => {
    return getDefaultArr(default_fb_search_video_obj, 16, 16);
};
