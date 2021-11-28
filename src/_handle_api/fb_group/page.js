import { API_GroupPage_R } from '../../api/api_django/fb_group/page';

//
export async function handle_API_GroupPage_R({ group_id = 0, params = {} }) {
    const res = await API_GroupPage_R({
        group_model: group_id,
        ...params,
    });

    return res.data;
}
