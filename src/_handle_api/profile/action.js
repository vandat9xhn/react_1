import { API_ProfileActions_L } from '../../api/api_django/user/user_profile/action';

//
export async function handle_API_ProfileActions_L({ user_id = 0, type = '' }) {
    const res = await API_ProfileActions_L({
        profile_model: user_id,
        type: type,
    });

    return res.data;
}
