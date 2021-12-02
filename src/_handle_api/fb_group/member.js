import { FbGroupMember_L } from '../../api/api_django/fb_group/member';

//
export async function handle_API_FbGroupMember_L({
    c_count = 0,
    group_id = 0,
    type = '',
    params = {},
}) {
    const res = await FbGroupMember_L({
        page: 1,
        size: 20,
        c_count: c_count,

        group_model: group_id,
        type: type,
        ...params,
    });

    //
    return res.data;
}
