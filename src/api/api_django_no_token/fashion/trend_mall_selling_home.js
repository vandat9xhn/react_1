import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import {
    default_home_fashion_trending_arr,
    default_home_shop_mall_arr,
    default_home_shop_mall_vid_pic_arr,
    default_home_top_search_arr,
} from '../../../_default/fashion/trend_mall_selling_home';

//
export const API_FashionHomeTrend_L = (params = {}) =>
    API_FakeReal(
        default_home_fashion_trending_arr(),
        () =>
            axiosClientNoToken({
                url: 'api/shopee/trend-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_FashionHomeMall_L = (params = {}) =>
    API_FakeReal(
        default_home_shop_mall_arr(),
        () =>
            axiosClientNoToken({
                url: 'api/shopee/mall-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_FashionHomeMallVidPic_L = (params = {}) =>
    API_FakeReal(
        default_home_shop_mall_vid_pic_arr(),
        () =>
            axiosClientNoToken({
                url: 'api/shopee/mall-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_FashionHomeSearch_L = (params = {}) =>
    API_FakeReal(
        default_home_top_search_arr(),
        () =>
            axiosClientNoToken({
                url: 'api/shopee/top-search-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
