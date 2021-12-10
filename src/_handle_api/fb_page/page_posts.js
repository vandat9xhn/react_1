import { API_FbPagePost_L } from '../../api/api_django/fb_page/page_posts';

//
export async function handle_API_FbPagePost_L({
    page_id = 0,
    c_count = 0,
    params = {},
}) {
    const res = await API_FbPagePost_L({
        page_model: page_id,
        c_count: c_count,
        page: 1,
        size: 10,
        ...params,
    });

    return res.data;
}
