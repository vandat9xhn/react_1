import { API_FakeReal } from '../../../_ConstAPI';
import axiosDjangoClient from '../../_axios/AxiosDjango';
//
import { default_friend_arr } from '../../../../pages/user_profile/__default/DefaultUserProfile';

// Friends

// Get
export const API_Friends_LC = (method, params = {}, data = {}) =>
    API_FakeReal(
        default_friend_arr,
        () =>
            axiosDjangoClient({
                url: 'user/friend-lc/',
                method: method,
                params: params,
                data: data,
            }),
        params
    );

// Delete
export const API_Friend_D = (pk = 1, method, data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: 'user/d-friend/' + pk + '/',
            method: method,
            data: data,
        })
    );

// Add friends

// Get
export const Get_UserAddFriends = (params, search = '') =>
    axiosDjangoClient({
        url: 'user/lc-add-friend/',
        method: 'GET',
        params: search ? { q: search, ...params } : params,
    });

// Create
export const Create_UserAddFriends = (data) =>
    axiosDjangoClient({
        url: 'user/lc-add-friend/',
        method: 'POST',
        data: data,
    });

// Delete
export const D_UserAddFriends = (pk) =>
    axiosDjangoClient({
        url: 'user/d-add-friend/' + pk + '/',
        method: 'DELETE',
    });
