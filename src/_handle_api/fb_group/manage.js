import { API_GroupManage_L } from '../../api/api_django/fb_group/manage';

//
export async function handle_API_GroupManage_L({ c_count = 0, params = {} }) {
    const res = await API_GroupManage_L({
        page: 1,
        size: 20,
        c_count: c_count,
        ...params,
    });

    return { ...res.data, count: res.data.data.length };
}
