import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_chat_friend_arr } from '../../../_default/chat/friends';

//
export const API_ChatFriend_L = (params = {}) =>
    API_FakeReal(
        default_chat_friend_arr({}),
        () =>
            axiosDjangoClient({
                url: 'api/chat/friend-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
