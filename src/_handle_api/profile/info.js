import { API_ProfileInfo_R } from "../../api/api_django/user/user_profile/info";

// 
export async function handle_API_ProfileInfo_R({ user_id }) {
    const res = await API_ProfileInfo_R({
        profile_model: user_id,
    });

    return res.data;
}