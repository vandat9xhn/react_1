import { getDefaultArr } from '../_common/getDefaultArr';
//
import { default_post_obj } from '../post/DefaultPosts';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const default_post_group_obj = () => {
    const group_type_arr = [
        {
            name: 'suggested_public',
            title_at_head: 'Suggested for you from a public group',
        },

        {
            name: 'joined',
            title_at_head: '',
        },
    ];

    const group_type_obj = getRandomFromArr(group_type_arr);

    const data_group_obj = default_post_obj({ post_where: 'group' });

    return {
        ...data_group_obj,
        group_obj: {
            ...data_group_obj.group_obj,
            type: group_type_obj.name,
            title_at_head: group_type_obj.title_at_head,
        },
    };
};

export const default_post_group_arr = () => {
    return getDefaultArr(default_post_group_obj, 8, 10);
};
