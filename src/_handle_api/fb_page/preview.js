import { API_PagePreview_R } from '../../api/api_django/fb_page/preview';

//
export async function handle_API_PagePreview_R({ page_id = 0, params = {} }) {
    const res = await API_PagePreview_R({
        page_model: page_id,
        ...params,
    });

    return res.data;
}
