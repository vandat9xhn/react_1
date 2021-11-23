import { API_Notice_L } from '../../api/api_django/header/APIHeaderToken';

//
export async function handle_API_FbNotice_L({
    c_count = 0,
    type = '',
    params = {},
}) {
    const res = await API_Notice_L({
        page: 1,
        size: 10,

        type: type,
        c_count: c_count,
        ...params,
    });

    return res.data;
}
