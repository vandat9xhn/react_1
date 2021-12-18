import { API_ChatFriend_L } from '../../api/api_django/chat/friends';
import { API_Post_L } from '../../api/api_django/user/user_post/UserPost';
//
import {
    params_new_feed_post_l,
    params_new_feed_contact_l,
} from '../../_params/new_feed/NewFeedParams';

//
export async function handle_API_NewFeedPost_L({ c_count = 0, params = {} }) {
    const res = await API_Post_L({
        ...params_new_feed_post_l,
        c_count: c_count,
        ...params,
    });

    return res.data;
}

//
export async function handle_API_NewFeedContact_L({ c_count = 0 }) {
    const res = await API_ChatFriend_L({
        ...params_new_feed_contact_l,
        c_count: c_count,
        type: 'recent',
    });

    return res.data;
}
