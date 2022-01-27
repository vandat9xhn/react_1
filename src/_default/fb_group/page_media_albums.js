import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_fb_group_page_media_album_obj = () => {
    const id = getRandomId();

    return {
        id: id,
        title: getRandomContent().slice(0, getRandomNumber(20, 50)),
        img: getRandomImg(),
        link_to: `/post/album/${id}`,

        photo_count: getRandomNumber(1, 3),
        video_count: getRandomBool() ? getRandomNumber(0, 3) : 0,
    };
};

export const default_fb_group_page_media_album_arr = () => {
    return getDefaultArr(default_fb_group_page_media_album_obj, 15, 15);
};
