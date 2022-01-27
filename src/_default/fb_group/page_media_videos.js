import { getRandomId } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_fb_group_page_media_video_obj = () => {
    const id = getRandomId()
    
    return {
        id: id,
    //    title,
       img: getRandomImg(),
       link_to: `/post/videos/${id}` 
    };
};

export const default_fb_group_page_media_video_arr = () => {
    return getDefaultArr(default_fb_group_page_media_video_obj, 15, 15);
};
