import {
    default_arr_cmt,
    default_arr_hot_image,
    default_arr_product,
    default_arr_shop,
} from '../../../pages/fashion/_default/FashionDefault';
import { API_IsLogin_URL } from '../../_common/API_IsLogin';
import { API_FakeReal } from '../../_ConstAPI';
import axiosClientNoToken from '../_axios/AxiosNoToken';

// list shop
export const API_FashionShop_L = (params = {}) =>
    API_FakeReal(
        Array(6).fill(default_arr_shop[0]),
        axiosClientNoToken({
            url: 'fashion-api/l-shop/',
            method: 'GET',
            params: params,
        }),
        params
    );
// retrieve shop
export const API_FashionShop_R = (id) =>
    API_FakeReal(
        default_arr_shop[0],
        axiosClientNoToken({
            url: 'fashion-api/r-shop/' + id + '/',
            method: 'GET',
        })
    );

// hot image
export const API_FashionHotImage_L = (params = {}) =>
    API_FakeReal(
        default_arr_hot_image,
        axiosClientNoToken({
            url: 'fashion-api/l-hot-image/',
            method: 'GET',
            params: params,
        })
    );

// product
export const API_FashionProduct_L = (params = {}) =>
    API_FakeReal(
        Array(10).fill(default_arr_product[0]),
        axiosClientNoToken({
            url: 'fashion-api/l-product/',
            method: 'GET',
            params: params,
        }),
        params
    );
//
export const API_FashionProduct_R = (id, params = {}) =>
    API_FakeReal(
        default_arr_product[0],
        API_IsLogin_URL(
            {
                method: 'GET',
                params: params,
            },
            'fashion-api/r-product-token/' + id + '/',
            'fashion-api/r-product/' + id + '/'
        )
    );

// rate
export const API_FashionRate_L = (params) =>
    axiosClientNoToken({
        url: '/fashion-api/l-rate/',
        method: 'GET',
        params: params,
    });

// comment
export const API_FashionComment_L = (params) =>
    API_FakeReal(
        default_arr_cmt,
        axiosClientNoToken({
            url: '/fashion-api/l-comment/',
            method: 'GET',
            params: params,
        }),
        params
    );
