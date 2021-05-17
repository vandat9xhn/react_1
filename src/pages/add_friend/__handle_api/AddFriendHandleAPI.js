import { API_Friends_LC } from '../../../api/api_django/user/user_friend/UserFriend';

import makeFormData from '../../../_some_function/makeFormData';
// 
import { params_add_friend_l } from '../__params/AddFriendParams';

//
export async function handle_API_AddFriend_L(request_title, c_count) {
    const res = await API_Friends_LC('GET', {
        ...params_add_friend_l,
        c_count: c_count,
        request_title: request_title,
    });
    const { data, count } = res.data;

    return [data, count];
}

//
export async function handle_API_FriendRequest(id, is_del = false) {
    const res = await API_Friends_LC(
        'POST',
        {},
        makeFormData({
            friend_model: id,
            is_del: is_del * 1,
        })
    );

    return res.data;
}
