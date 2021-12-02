import { API_FBGroupPageMember_R } from '../../api/api_django/fb_group/page_member';

//
export async function handle_API_FBGroupPageMember_R({ group_id = 0, params = {} }) {
    const res = await API_FBGroupPageMember_R({
        group_model: group_id,
        ...params,
    });

    return res.data;
}
