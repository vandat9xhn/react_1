import { default_post_obj } from '../post/DefaultPosts';
import { getRandomId } from '../_common/default_id';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomBool } from '../_common/default_bool';
// 
import video from '../../../_video/mov_bbb.mp4';

//
const default_fb_watch_post_obj = () => {
    const post_obj = default_post_obj({ post_where: 'page' });
    return {
        ...post_obj,
        is_live: getRandomBool(),
        vid_pic_count: 1,
        vid_pics: [
            {
                id: getRandomId(),
                vid_pic: video,
                content: '',
            },
        ],
        
        bg_obj: null,
    };
};

export const default_fb_watch_post_arr = () =>
    getDefaultArr(default_fb_watch_post_obj, 10, 10);
