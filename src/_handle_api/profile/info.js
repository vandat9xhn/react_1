import {
    API_ProfileInfo_R,
    API_ProfileInfo_L,
} from '../../api/api_django/user/user_profile/info';

//
export async function handle_API_ProfileInfo_R({ user_id }) {
    const res = await API_ProfileInfo_R({
        profile_model: user_id,
    });

    return res.data;
}

//
export async function handle_API_ProfileInfo_L({ c_count = 0, type = '', params = {} }) {
    const res = await API_ProfileInfo_L({
        c_count: c_count,
        type: type,
        size: 10,
        page: 1,
        ...params,
    });

    return res.data;
}
