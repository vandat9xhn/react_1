import { default_post_obj } from '../post/DefaultPosts';
import { getRandomBool } from '../_common/default_bool';

//
export const default_fb_page_pinned_post_obj = () => {
    const post_obj = default_post_obj({ post_where: 'page' });

    if (getRandomBool()) {
        return {
            ...post_obj,
        };
    }

    return null;
};
