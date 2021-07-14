import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { API_IsLogin_URL } from '../../_common/API_IsLogin';
import { API_FakeReal } from '../../_ConstAPI';
//
import {
    default_city_arr,
    default_city_history_arr,
} from '../../../_default/city/DefaultCity';

//
export const API_City_L = (params) =>
    API_FakeReal(
        default_city_arr(),
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
        default_city_history_arr(),
        () =>
            axiosClientNoToken({
                url: '/api01/l-city-history/',
                method: 'GET',
                params: params,
            }),
        params
    );
