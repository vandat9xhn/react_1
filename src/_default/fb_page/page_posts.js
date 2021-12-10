import { default_post_obj } from '../post/DefaultPosts';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_fb_page_post_obj = () => {
    const post_obj = default_post_obj({ post_where: 'page' });
    return {
        ...post_obj,
    }
};

export const default_fb_page_post_arr = () =>
    getDefaultArr(default_fb_page_post_obj, 10, 10);
