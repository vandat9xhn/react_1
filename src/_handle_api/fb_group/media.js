import { FbGroupMedia_L } from '../../api/api_django/fb_group/media';

//
export async function handle_API_FbGroupMedia_L({ c_count = 0, params = {} }) {
    const res = await FbGroupMedia_L({
        page: 1,
        size: 20,
        c_count: c_count,
        ...params,
    });

    //
    return res.data;
}
