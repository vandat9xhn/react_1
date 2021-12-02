import { API_FbGroupAbout_R } from '../../api/api_django/fb_group/page_about';

//
export async function handle_API_FbGroupAbout_R({ group_id = 0, params = {} }) {
    const res = await API_FbGroupAbout_R({
        group_model: group_id,
        ...params,
    });

    return res.data;
}
