import { API_Friends_LC } from "../../../api/api_django/user/user_friend/UserFriend";
import { API_Post_L } from "../../../api/api_django/user/user_post/UserPost";
import { API_UserProfile_RU } from "../../../api/api_django/user/user_profile/UserProfile";
// 
import { params_profile_post_l } from "../__params/ProfileParams";


// 
export async function handle_API_ProfilePost_L(c_count) {
    const res = await API_Post_L({
        ...params_profile_post_l,
        c_count: c_count,
    });
    const {data, count} = res.data

    return [data, count]
}

// 
export async function handle_API_Friend_L(user_id, c_count=0) {
    const res = await API_Friends_LC('GET', {
        profile_user: user_id,
        page: 1,
        size: 10,
        c_count: c_count,
    });
    const {data, count} = res.data

    return [data, count]
}

// 
export async function handle_API_ProfileUser_R(pk) {
    const res = await API_UserProfile_RU(pk, 'GET');

    return res.data
}
