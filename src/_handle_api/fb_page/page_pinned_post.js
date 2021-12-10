import { API_FbPagePinnedPost_R } from '../../api/api_django/fb_page/page_pinned_post';

//
export async function handle_API_FbPagePinnedPost_R({
    page_id = 0,
    params = {},
}) {
    const res = await API_FbPagePinnedPost_R({
        page_model: page_id,
        ...params,
    });

    return res.data;
}
