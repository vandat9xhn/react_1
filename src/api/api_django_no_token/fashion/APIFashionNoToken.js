import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { API_IsLogin_URL } from '../../_common/API_IsLogin';
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_shop_obj } from '../../../_default/fashion/DefaultShop';
import { default_hot_image_arr } from '../../../_default/fashion/FashionDefault';
import { base_product_arr } from '../../../_default/fashion/DefaultProductList';
import {
    default_product_detail_arr,
    default_product_obj,
    default_rate_arr,
} from '../../../_default/fashion/DefaultProductItem';
import { default_content_more } from '../../../_default/post/DefaultPosts';

// list shop
export const API_FashionShop_L = (params = {}) =>
    API_FakeReal(
        Array(6).fill(),
        () =>
            axiosClientNoToken({
                url: 'api/shopee/product-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

// retrieve shop
export const API_FashionShop_R = (id) =>
    API_FakeReal(default_shop_obj(), () =>
        axiosClientNoToken({
            url: 'api/shopee/shop-r/' + id + '/',
            method: 'GET',
        })
    );

// hot image
export const API_FashionHotImage_L = (params = {}) =>
    API_FakeReal(default_hot_image_arr(), () =>
        axiosClientNoToken({
            url: 'api/shopee/l-hot-image/',
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
                url: 'api/shopee/product-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_FsProductDetail_L = (params = {}) =>
    API_FakeReal(
        default_product_detail_arr(),
        () =>
            axiosClientNoToken({
                url: 'api/shopee/product-detail-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_FashionProduct_R = (id, params = {}) =>
    API_FakeReal(default_product_obj(), () =>
        API_IsLogin_URL(
            {
                method: 'GET',
                params: params,
            },
            'api/shopee/product-token-r/' + id + '/',
            'api/shopee/product-r/' + id + '/'
        )
    );

// rate
export const API_FashionRate_L = (params) =>
    API_FakeReal(
        default_rate_arr(),
        () =>
            axiosClientNoToken({
                url: 'api/shopee/product-rate-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

export const API_FashionUserContentRate_R = (params) =>
    API_FakeReal(
        default_content_more(),
        () =>
            axiosClientNoToken({
                url: 'api/shopee/rate-r/',
                method: 'GET',
                params: params,
            }),
        params
    );
