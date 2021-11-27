import { API_GroupActions_L } from '../../api/api_django/fb_group/action';

//
export async function handle_API_GroupActions_L({
    group_id = 0,
    type = '',
    params = {},
}) {
    const res = await API_GroupActions_L({
        group_model: group_id,
        type: type,
        ...params,
    });

    return res.data;
}
