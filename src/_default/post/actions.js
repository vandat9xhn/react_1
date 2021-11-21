import {
    data_fb_group_post_action_obj,
    data_fb_post_action_obj,
    data_fb_user_post_action_obj,
} from '../../_data/post/actions';
import { getRandomBool } from '../_common/default_bool';

//
export const default_post_action_arr = ({ type = '' }) => {
    if (type == 'page') {
        return default_page_post_action_list_arr();
    }

    if (type == 'group') {
        return default_group_post_action_list_arr();
    }

    if (getRandomBool()) {
        return default_user_post_action_list_arr();
    }

    return default_friend_post_action_list_arr();
};

//
const default_user_post_action_list_arr = () => {
    return [
        [data_fb_user_post_action_obj.pin, data_fb_post_action_obj.save],
        [
            data_fb_post_action_obj.history,
            data_fb_user_post_action_obj.edit,
            data_fb_user_post_action_obj.edit_audience,
            data_fb_post_action_obj.notification_off,
            data_fb_user_post_action_obj.translation_off,
        ],
        [data_fb_user_post_action_obj.remove],
    ];
};

//
const default_friend_post_action_list_arr = () => {
    return [
        [data_fb_post_action_obj.save],
        [
            data_fb_post_action_obj.history,
            data_fb_post_action_obj.notification_on,
        ],
        [
            data_fb_post_action_obj.hide_post,
            // data_fb_post_action_obj.unfollow,
            data_fb_post_action_obj.support_report,
        ],
    ];
};

//
const default_page_post_action_list_arr = () => {
    return [
        [data_fb_post_action_obj.save],
        [
            data_fb_post_action_obj.history,
            data_fb_post_action_obj.notification_on,
        ],
        [
            data_fb_post_action_obj.hide_post,
            data_fb_post_action_obj.unfollow,
            data_fb_post_action_obj.support_report,
        ],
    ];
};

//
const default_group_post_action_list_arr = () => {
    return [
        [data_fb_post_action_obj.save],
        [
            data_fb_post_action_obj.history,
            data_fb_post_action_obj.notification_on,
        ],
        [
            data_fb_group_post_action_obj.report_to_admins,
            data_fb_post_action_obj.hide_post,
            // data_fb_post_action_obj.unfollow,
            data_fb_post_action_obj.support_report,
        ],
    ];
};
