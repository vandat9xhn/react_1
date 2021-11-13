import { API_FbSearchPostAction_L } from '../../api/api_django/fb_search/posts';

//
export async function handle_API_FbSearchPostAction_L({
    post_id = 0,
    params = {},
}) {
    const res = await API_FbSearchPostAction_L({
        post_model: post_id,
        ...params,
    });

    return res.data;
}
