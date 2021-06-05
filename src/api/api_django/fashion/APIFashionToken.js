import { API_FakeReal } from '../../_ConstAPI';
import axiosDjangoClient from '../_axios/AxiosDjango';

import {
    DefaultFashionCartBuy,
    default_arr_payment,
    default_arr_transporter,
    default_arr_voucher,
    default_arr_buy,
    default_arr_cancel,
} from '../../../pages/fashion/_default/FashionDefault';

// get create cart
export const API_FashionCart_LC = (method, params = {}, data = {}) =>
    API_FakeReal(DefaultFashionCartBuy, () =>
        axiosDjangoClient({
            url: '/fashion-api/lc-cart/',
            method: method,
            params: params,
            data: data,
        })
    );

// get count cart
export const API_FashionCountCart = () =>
    API_FakeReal(2, () =>
        axiosDjangoClient({
            url: '/fashion-api/count-cart/',
            method: 'GET',
        })
    );

// Update delete cart
export const API_FashionCart_UD = (method, data = {}) =>
    API_FakeReal(
        {},
        () => axiosDjangoClient({
            url: '/fashion-api/ud-cart/',
            method: method,
            data: data,
        })
    );

// get create buy
export const API_FashionBuy_LC = (method, params = {}, data = {}) =>
    API_FakeReal(
        default_arr_buy.filter(
            (item) => item.status.toLocaleLowerCase() == params.status
        ),
        () =>
            axiosDjangoClient({
                url: '/fashion-api/lc-buy/',
                method: method,
                params: params,
                data: data,
            }),
        params
    );

// delete buy product
export const API_FashionBuyProduct_D = (buy_product_id) =>
    axiosDjangoClient({
        url: '/fashion-api/d-buy-product/' + buy_product_id + '/',
        method: 'DELETE',
    });

// cancel buy product
export const API_FashionCancelProduct_L = (params = {}) =>
    API_FakeReal(
        default_arr_cancel,
        () =>
            axiosDjangoClient({
                url: '/fashion-api/l-cancel/',
                method: 'GET',
                params: params,
            }),
        params
    );

// create rate
export const API_FashionRate_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/fashion-api/rate-c/',
            method: 'POST',
            data: data,
        })
    );

// create comment
export const API_FashionComment_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/fashion-api/comment-c/',
            method: 'POST',
            data: data,
        })
    );

// transport
export const API_FashionTransport_L = (params) =>
    API_FakeReal(
        default_arr_transporter,
        () =>
            axiosDjangoClient({
                url: '/transporter/l-transport/',
                method: 'GET',
                params: params,
            }),
        params
    );

// voucher
export const API_FashionVoucher_L = (params) =>
    API_FakeReal(
        default_arr_voucher,
        () =>
            axiosDjangoClient({
                url: '/transporter/l-voucher/',
                method: 'GET',
                params: params,
            }),
        params
    );

// create user voucher
export const API_FashionUserVoucher_LC = (method, params = {}, data = {}) =>
    API_FakeReal(
        default_arr_voucher,
        () =>
            axiosDjangoClient({
                url: '/transporter/lc-user-voucher/',
                method: method,
                params: params,
                data: data,
            }),
        params
    );

// create user voucher
export const API_FashionPayment_L = (params = {}) =>
    API_FakeReal(default_arr_payment, () =>
        axiosDjangoClient({
            url: '/transporter/l-payment/',
            method: 'GET',
            params: params,
        })
    );
