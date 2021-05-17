import { API_Post_L } from '../../../api/api_django/user/user_post/UserPost';
//
import { params_new_feed_post_l } from '../__params/NewFeedParams';

//
export async function handle_API_NewFeedPost_L(c_count) {
    const res = await API_Post_L({
        ...params_new_feed_post_l,
        c_count: c_count,
    });
    const { data, count } = res.data;

    return [data, count];
}
