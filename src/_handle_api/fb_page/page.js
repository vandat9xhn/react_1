import { API_FbPage_R } from '../../api/api_django/fb_page/page';

//
export async function handle_API_FbPage_R({ page_id = 0, params = {} }) {
    const res = await API_FbPage_R({
        page_model: page_id,
        ...params,
    });

    return res.data;
}
