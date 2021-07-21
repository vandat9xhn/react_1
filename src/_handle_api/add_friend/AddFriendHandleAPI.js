import {
    API_AddFriends_C,
    API_AddFriends_D,
    API_AddFriends_L,
    API_FriendRemove_D,
    API_Friend_D,
    API_Friend_LC,
} from '../../api/api_django/user/user_friend/UserFriend';

import makeFormData from '../../_some_function/makeFormData';
//
import { params_add_friend_l } from '../../_params/add_friend/AddFriendParams';

//
export async function handle_API_Friend_C(id) {
    const res = await API_Friend_LC(
        'POST',
        {},
        makeFormData({
            friend_model: id,
        })
    );

    return res.data;
}

//
export async function handle_API_Friend_D(id) {
    const res = await API_Friend_D(id);

    return res.data;
}

//
export async function handle_API_AddFriend_L(request_title, c_count) {
    const res = await API_AddFriends_L({
        ...params_add_friend_l,
        c_count: c_count,
        request_title: request_title,
    });
    return res.data;
}

export async function handle_API_AddFriend_C(friend_id) {
    const res = await API_AddFriends_C(
        makeFormData({
            friend_model: friend_id,
        })
    );
    return res.data;
}

export async function handle_API_AddFriend_D(friend_id) {
    const res = await API_AddFriends_D(
        makeFormData({
            friend_model: friend_id,
        })
    );
    return res.data;
}

//
export async function handle_API_FriendRemove(id) {
    const res = await API_FriendRemove_D(
        'POST',
        {},
        makeFormData({
            friend_model: id,
        })
    );

    return res.data;
}
