import { data_fb_group_action_joined_obj } from '../../_data/fb_group/actions';

//
export const default_fb_group_joined_action_arr = () => {
    return [
        [
            data_fb_group_action_joined_obj.notice,
            data_fb_group_action_joined_obj.unfollow,
        ],
        [data_fb_group_action_joined_obj.leave],
    ];
};
