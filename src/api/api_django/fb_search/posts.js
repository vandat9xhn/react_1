import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_search_post_action_arr } from '../../../_default/fb_search/post';

//
export const API_FbSearchPostAction_L = (params) =>
    API_FakeReal(
        default_fb_search_post_action_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/search-post-action-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
