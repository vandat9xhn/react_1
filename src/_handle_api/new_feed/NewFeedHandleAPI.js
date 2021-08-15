import { API_Friend_LC } from '../../api/api_django/user/user_friend/UserFriend';
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
    const res = await API_Friend_LC('GET', {
        ...params_new_feed_contact_l,
        c_count: c_count,
    });

    const { data, ...rest_data } = res.data;
    const new_data = data.map((item) => item.friend);
    
    // console.log(params, 'c_count: ', c_count, 'user_id: ', user_id, res.data);

    return { ...rest_data, data: new_data };
}
