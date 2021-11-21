import { getDefaultArr } from '../_common/getDefaultArr';
// 
import { default_post_obj } from '../post/DefaultPosts';

//
export const default_post_group_arr = () => {
    return getDefaultArr(
        () => default_post_obj({ post_where: 'group' }),
        8,
        10
    );
};
