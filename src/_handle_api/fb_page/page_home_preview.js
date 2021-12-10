import { API_FbPageHomePreview_R } from '../../api/api_django/fb_page/page_home_preview';

//
export async function handle_API_FbPageHomePreview_R({
    page_id = 0,
    params = {},
}) {
    const res = await API_FbPageHomePreview_R({
        page_model: page_id,
        ...params,
    });

    return res.data;
}
