import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_search_page_arr } from '../../../_default/fb_search/pages';

//
export const API_FbSearchPage_L = (params) =>
    API_FakeReal(
        default_fb_search_page_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-search-page-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
