import { API_FbPageAbout_R } from '../../api/api_django/fb_page/page_about';

//
export async function handle_API_FbPageAbout_R({
    page_id = 0,
    params = {},
}) {
    const res = await API_FbPageAbout_R({
        page_model: page_id,
        ...params,
    });

    return res.data;
}
