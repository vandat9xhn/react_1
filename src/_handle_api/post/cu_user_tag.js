import { API_FbUserTagDetail_L } from '../../api/api_django/cu_post/user_tag';

//
export async function handle_API_FbUserTagDetail_L({
    c_count = 0,
    params = {},
}) {
    const res = await API_FbUserTagDetail_L({
        params: {
            c_count: c_count,
            page: 1,
            size: 20,
            ...params,
        },
    });
    return res.data;
}
