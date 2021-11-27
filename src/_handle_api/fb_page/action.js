import { API_PageActions_L } from '../../api/api_django/fb_page/action';

//
export async function handle_API_PageActions_L({
    page_id = 0,
    type = '',
    params = {},
}) {
    const res = await API_PageActions_L({
        page_model: page_id,
        type: type,
        ...params,
    });

    return res.data;
}
