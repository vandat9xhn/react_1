import { getRandomId } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_fb_group_media_obj = () => {
    return {
        id: getRandomId(),
        img: getRandomImg(),
    };
};

export const default_fb_group_media_arr = ({ size = 0 }) => {
    return getDefaultArr(
        default_fb_group_media_obj,
        size == 4 ? 4 : size,
        size
    );
};
