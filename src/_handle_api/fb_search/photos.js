import { API_FbSearchPhoto_L } from "../../api/api_django/fb_search/photos";

//
export async function handle_API_FbSearchPhoto_L({ c_count = 0, search = '', params = {} }) {
    const res = await API_FbSearchPhoto_L({
        c_count: c_count,
        search: search,
        size: 9,
        page: 1,
        ...params,
    });

    return res.data;
}