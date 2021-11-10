import { API_FbSearch_LC } from '../../api/api_django/fb_search/recently';

export async function handle_API_FbSearch_L({
    c_count = 0,
    params = {},
}) {
    const res = await API_FbSearch_LC({
        method: 'get',
        params: {
            page: 1,
            size: 8,
            c_count: c_count,
            ...params,
        },
    });

    return res.data;
}
