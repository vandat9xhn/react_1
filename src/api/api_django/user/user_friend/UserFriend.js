import axiosDjangoClient from '../../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../../_ConstAPI';
//
import { default_friend_arr } from '../../../../_default/user_post/DefaultUserProfile';

// Friends

// Get
export const API_Friend_LC = (method, params = {}, data = {}) =>
    API_FakeReal(
        default_friend_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/friend/friend-lc/',
                method: method,
                params: params,
                data: data,
            }),
        params
    );

// Delete
export const API_Friend_D = (pk = 0) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: 'api/friend/friend-d/' + pk + '/',
            method: 'DELETE',
        })
    );

// Add friends

export const API_AddFriends_L = (params, search = '') =>
    API_FakeReal(
        default_friend_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/friend/add-friend-lc/',
                method: 'GET',
                params: search ? { q: search, ...params } : params,
            }),
        params
    );

export const API_AddFriends_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: 'api/friend/add-friend-lc/',
            method: 'POST',
            data: data,
        })
    );

export const API_AddFriends_D = (pk) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: 'api/friend/add-friend-d/' + pk + '/',
            method: 'DELETE',
        })
    );

export const API_FriendRemove_D = (pk) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: 'api/friend/add-friend-remove/' + pk + '/',
            method: 'DELETE',
        })
    );
