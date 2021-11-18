import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_search_arr } from '../../../_default/fb_search/recently';

// Get Create
export const API_FbSearch_LC = ({ method, params = {}, data = {} }) =>
    API_FakeReal(
        method.toUpperCase() == 'GET'
            ? default_fb_search_arr({ filter: params['filter'] })
            : data,
        () =>
            axiosDjangoClient({
                url: `api/facebook/fb-search-recently-lc/`,
                method: method,
                params: params,
                data: data,
            }),
        params
    );

export const API_FbSearchRecently_D = ({ data }) =>
    API_FakeReal(
        {},
        () =>
            axiosDjangoClient({
                url: `api/facebook/fb-search-recently-d/`,
                method: 'delete',
                data: data,
            }),
        params
    );
