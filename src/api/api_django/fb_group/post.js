import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_post_group_arr } from '../../../_default/fb_group/post';

// 
export const API_PostGroup_L = (params) =>
    API_FakeReal(
        default_post_group_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/post-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
