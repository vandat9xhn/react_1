import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_search_user_arr } from '../../../_default/fb_search/user';

//
export const API_FbSearchUser_L = (params) =>
    API_FakeReal(
        default_fb_search_user_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/search-user-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );
