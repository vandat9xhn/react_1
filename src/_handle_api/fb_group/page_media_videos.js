import { API_FbGroupMediaVideo_L } from '../../api/api_django/fb_group/page_media_videos';

//
export async function handle_API_FbGroupMediaVideo_L({ c_count = 0, group_id = 0, params = {} }) {
    const res = await API_FbGroupMediaVideo_L({
        page: 1,
        size: 20,
        
        c_count: c_count,
        group_model: group_id,
        ...params,
    });

    return res.data;
}
