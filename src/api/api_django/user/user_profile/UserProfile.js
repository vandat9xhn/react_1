import { API_FakeReal } from '../../../_ConstAPI';
import axiosDjangoClient from '../../_axios/AxiosDjango';
//
import { default_user_r } from '../../../../pages/user_profile/__default/DefaultUserProfile';
import { default_post_arr } from '../../../../component/posts/__default_post/DefaultPosts';

// Retrieve Update Personal
export const API_UserProfile_RU = (pk, method, data = {}) =>
    API_FakeReal(
        default_user_r.find((item) => item.id == pk) || default_user_r[2],
        () =>
            axiosDjangoClient({
                url: '/user/ru-profile/' + pk + '/',
                method: method,
                data: data,
            })
    );

// vid_pic
export const API_UserVidPic_L = (params) =>
    API_FakeReal(
        Array(9).fill(default_post_arr[0].vid_pics[0]),
        () => axiosDjangoClient({
            url: '/user/vid-pic-l/',
            method: 'GET',
            params: params,
        }),
        params,
    );
