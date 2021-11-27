import { default_post_obj } from '../post/DefaultPosts';
import { getDefaultArr } from '../_common/getDefaultArr';

//
export const default_profile_post_arr = () => {
    return getDefaultArr(
        () => default_post_obj({ post_where: 'user' }),
        12,
        12
    );
};
