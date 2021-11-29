import { API_GroupAboutPreview_R } from '../../api/api_django/fb_group/about_preview';

//
export async function handle_API_GroupAboutPreview_R({
    group_id = 0,
    params = {},
}) {
    const res = await API_GroupAboutPreview_R({
        group_model: group_id,
        ...params,
    });

    return res.data;
}
