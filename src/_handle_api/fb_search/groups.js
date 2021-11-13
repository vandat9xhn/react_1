import { API_FbSearchGroup_L } from "../../api/api_django/fb_search/groups";

//
export async function handle_API_FbSearchGroup_L({ c_count = 0, params = {} }) {
    const res = await API_FbSearchGroup_L({
        c_count: c_count,
        size: 16,
        page: 1,
        ...params,
    });

    return res.data;
}