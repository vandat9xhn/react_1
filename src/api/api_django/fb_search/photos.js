import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_search_photo_arr } from '../../../_default/fb_search/photos';

//
export const API_FbSearchPhoto_L = (params) =>
    API_FakeReal(
        default_fb_search_photo_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-search-photo-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
