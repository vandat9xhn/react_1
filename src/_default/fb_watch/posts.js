import { default_post_obj } from '../post/DefaultPosts';
import { default_video_arr } from '../_common/default_image';
//
import { getRandomId } from '../_common/default_id';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomBool } from '../_common/default_bool';
import { getRandomFromArr } from '../_common/getRandomFromArr';
//

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
                vid_pic: getRandomFromArr(default_video_arr),
                content: '',
            },
        ],

        bg_obj: null,
    };
};

export const default_fb_watch_post_arr = () =>
    getDefaultArr(default_fb_watch_post_obj, 10, 10);
