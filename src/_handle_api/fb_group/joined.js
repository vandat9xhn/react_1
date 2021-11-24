import { API_GroupJoined_L } from '../../api/api_django/fb_group/joined';

//
export async function handle_API_GroupJoined_L({ c_count = 0, params = {} }) {
    const res = await API_GroupJoined_L({
        page: 1,
        size: 20,
        c_count: c_count,
        ...params,
    });

    return res.data;
}
