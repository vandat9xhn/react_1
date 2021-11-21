import { API_PostGroup_L } from '../../api/api_django/fb_group/post';

//
export async function handle_API_PostGroup_L({ c_count = 0, params = {} }) {
    const res = await API_PostGroup_L({
        page: 1,
        size: 20,
        c_count: c_count,
        post_where: 'group',
        ...params,
    });

    return res.data;
}
