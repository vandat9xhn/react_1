import { getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getRandomName } from '../_common/default_name';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_fb_search_photo_obj = () => {
    return {
        title: 'By ' + getRandomName(),
        link_to: `/photos/${getRandomNumber()}`,
        img: getRandomImg(),
    };
};

export const default_fb_search_photo_arr = () => {
    return getDefaultArr(default_fb_search_photo_obj, 16, 16);
};
