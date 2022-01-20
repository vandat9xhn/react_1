import { API_WatchPost_L } from '../../api/api_django/fb_watch/posts';

//
export async function handle_API_WatchPost_L({
    page_id = 0,
    c_count = 0,
    params = {},
}) {
    const res = await API_WatchPost_L({
        page_model: page_id,
        c_count: c_count,
        page: 1,
        size: 10,
        ...params,
    });

    return res.data;
}
