import { API_GroupPreview_R } from '../../api/api_django/fb_group/preview';

//
export async function handle_API_GroupPreview_R({ group_id = 0, params = {} }) {
    const res = await API_GroupPreview_R({
        group_model: group_id,
        ...params,
    });

    return res.data;
}
