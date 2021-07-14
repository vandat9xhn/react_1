import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { API_IsLogin_URL } from '../../_common/API_IsLogin';
import { API_FakeReal } from '../../_ConstAPI';
import { default_shop_obj } from '../../../_default/fashion/DefaultShop';
import { default_hot_image_arr } from '../../../_default/fashion/FashionDefault';
import { base_product_arr } from '../../../_default/fashion/DefaultProductList';
import { default_product_cmt_arr, default_product_obj, default_rate_arr, default_rate_content } from '../../../_default/fashion/DefaultProductItem';
import { default_content_more } from '../../../_default/post/DefaultPosts';

// list shop
export const API_FashionShop_L = (params = {}) =>
    API_FakeReal(
        Array(6).fill(),
        () =>
            axiosClientNoToken({
                url: '/fashion-api/l-shop/',
                method: 'GET',
                params: params,
            }),
        params
    );

// retrieve shop
export const API_FashionShop_R = (id) =>
    API_FakeReal(default_shop_obj(), () =>
        axiosClientNoToken({
            url: '/fashion-api/r-shop/' + id + '/',
            method: 'GET',
        })
    );

// hot image
export const API_FashionHotImage_L = (params = {}) =>
    API_FakeReal(default_hot_image_arr(), () =>
        axiosClientNoToken({
            url: '/fashion-api/l-hot-image/',
            method: 'GET',
            params: params,
        })
    );

// product
export const API_FashionProduct_L = (params = {}) =>
    API_FakeReal(
        base_product_arr(),
        () =>
            axiosClientNoToken({
                url: '/fashion-api/l-product/',
                method: 'GET',
                params: params,
            }),
        params
    );
//
export const API_FashionProduct_R = (id, params = {}) =>
    API_FakeReal(default_product_obj(), () =>
        API_IsLogin_URL(
            {
                method: 'GET',
                params: params,
            },
            '/fashion-api/r-product-token/' + id + '/',
            '/fashion-api/r-product/' + id + '/'
        )
    );

// rate
export const API_FashionRate_L = (params) =>
    API_FakeReal(
        default_rate_arr(),
        () =>
            axiosClientNoToken({
                url: '/fashion-api/l-rate/',
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_FashionUserContentRate_R = (params) =>
    API_FakeReal(
        default_rate_content(),
        () =>
            axiosClientNoToken({
                url: '/fashion-api/l-rate/',
                method: 'GET',
                params: params,
            }),
        params
    );

// comment
export const API_FashionComment_L = (params) =>
    API_FakeReal(
        default_product_cmt_arr(),
        () =>
            axiosClientNoToken({
                url: '/fashion-api/l-comment/',
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_FashionUserContentComment_R = (params) =>
    API_FakeReal(
        default_content_more(),
        () =>
            axiosClientNoToken({
                url: '/fashion-api/comment-r/',
                method: 'GET',
                params: params,
            }),
        params
    );
