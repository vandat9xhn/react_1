import { API_FbSearchVideo_L } from "../../api/api_django/fb_search/videos";

//
export async function handle_API_FbSearchVideo_L({ c_count = 0, params = {} }) {
    const res = await API_FbSearchVideo_L({
        c_count: c_count,
        size: 16,
        page: 1,
        ...params,
    });

    return res.data;
}