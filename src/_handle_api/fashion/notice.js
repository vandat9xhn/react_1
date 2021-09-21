import { API_FsNotice_L } from '../../api/api_django/fashion/notice';

//
export async function handle_API_FsNotice_L({ c_count = 0, params = {} }) {
    const res = await API_FsNotice_L({
        params: {
            page: 1,
            size: 5,
            c_count: c_count,
            ...params,
        },
    });

    return res.data;
}
