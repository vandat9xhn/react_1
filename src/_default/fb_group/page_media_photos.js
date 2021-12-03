import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomId } from '../_common/default_id';

//
const default_fb_group_page_media_photo_obj = () => {
    const id = getRandomId()
    
    return {
        id: id,
    //    title,
       img: getRandomVidPic(),
       link_to: `/post/photos/${id}` 
    };
};

export const default_fb_group_page_media_photo_arr = () => {
    return getDefaultArr(default_fb_group_page_media_photo_obj, 15, 15);
};
