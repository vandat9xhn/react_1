import { API_FbSearchUser_L } from "../../api/api_django/fb_search/user";

//
export async function handle_API_FbSearchUser_L({ c_count = 0, search = '', params = {} }) {
    const res = await API_FbSearchUser_L({
        c_count: c_count,
        search: search,
        size: 10,
        page: 1,
        ...params,
    });

    return res.data;
}