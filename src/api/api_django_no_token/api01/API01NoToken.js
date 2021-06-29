import {
    default_arr_city,
    default_arr_city_histories,
} from '../../../pages/city_street/__default/DefaultCity';
import { API_IsLogin_URL } from '../../_common/API_IsLogin';
import { API_FakeReal } from '../../_ConstAPI';
import axiosClientNoToken from '../_axios/AxiosNoToken';

//
export const API_City_L = (params) =>
    API_FakeReal(
        Array(6).fill(default_arr_city[0]),
        () =>
            API_IsLogin_URL(
                {
                    method: 'GET',
                    params: params,
                },
                '/api01/l-city-token/',
                '/api01/l-city-no-token/'
            ),
        params
    );

//
export const API_City_R = (pk, params = {}) =>
    axiosClientNoToken({
        url: '/api01/r-city/' + pk + '/',
        method: 'GET',
        params: params,
    });

//
export const API_CityHistory_L = (params) =>
    API_FakeReal(
        default_arr_city_histories,
        () =>
            axiosClientNoToken({
                url: '/api01/l-city-history/',
                method: 'GET',
                params: params,
            }),
        params
    );
