import { API_GroupNotice_L } from '../../api/api_django/fb_group/notifications';

//
export async function handle_API_GroupNotice_L({ c_count = 0, params = {} }) {
    const res = await API_GroupNotice_L({
        page: 1,
        size: 20,
        c_count: c_count,
        ...params,
    });

    return res.data;
}
