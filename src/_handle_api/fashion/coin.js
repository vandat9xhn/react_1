import { API_FsCoinHistory_L } from '../../api/api_django/fashion/coin';

//
export async function handle_API_FsCoinHistory_L({ c_count = 0, params = {} }) {
    const res = await API_FsCoinHistory_L({
        params: {
            page: 1,
            size: 5,
            c_count: c_count,
            ...params,
        },
    });

    return res.data;
}
