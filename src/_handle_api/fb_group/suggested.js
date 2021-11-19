import { API_FbGroupSuggested_L } from '../../api/api_django/fb_group/suggested';

//
export async function handle_API_FbGroupSuggested_L({
    c_count = 0,
    params = {},
}) {
    const res = await API_FbGroupSuggested_L({
        c_count: c_count,
        size: 10,
        page: 1,
        type: 'suggested',
        ...params,
    });

    return res.data;
}
