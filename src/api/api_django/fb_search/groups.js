import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_search_group_arr } from '../../../_default/fb_search/groups';

//
export const API_FbSearchGroup_L = (params) =>
    API_FakeReal(
        default_fb_search_group_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-search-group-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
