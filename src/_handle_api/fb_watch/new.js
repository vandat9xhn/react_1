import { API_WatchNew_L } from '../../api/api_django/fb_watch/new';

//
export async function handle_API_WatchNew_L({ c_count = 0, params = {} }) {
    const res = await API_WatchNew_L({
        c_count: c_count,
        size: 16,
        page: 1,
        ...params,
    });

    return res.data;
}
