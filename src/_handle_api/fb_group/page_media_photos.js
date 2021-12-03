import { API_FbGroupMediaPhoto_L } from '../../api/api_django/fb_group/page_media_photos';

//
export async function handle_API_FbGroupMediaPhoto_L({ c_count = 0, group_id = 0, params = {} }) {
    const res = await API_FbGroupMediaPhoto_L({
        page: 1,
        size: 20,

        c_count: c_count,
        group_model: group_id,
        ...params,
    });

    return res.data;
}
