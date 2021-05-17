import { default_phone_arr } from '../../../pages/phone_laptop/__default/DefaultPhone';
import { API_FakeReal } from '../../_ConstAPI';
import axiosClientNoToken from '../_axios/AxiosNoToken';

// list
export const API_PhoneLaptop_L = (params) =>
    API_FakeReal(
        Array(12).fill(default_phone_arr[0]),
        axiosClientNoToken({
            url: 'phone/list/',
            params: params,
        }),
        params
    );

// list filter
export const API_FilterPhoneLaptop_L = (params) =>
    API_FakeReal(
        Array(12).fill(default_phone_arr[0]),
        axiosClientNoToken({
            url: 'phone/list-filter/',
            params: params,
        }),
        params
    );

// retrieve
export const API_PhoneLaptop_R = (id) =>
    API_FakeReal(
        default_phone_arr[0],
        axiosClientNoToken({
            url: 'phone/' + id + '/',
        })
    );

// create - just for testing, it will not create anything
export const CreateFilterAllProducts = (data) =>
    axiosClientNoToken({
        method: 'POST',
        url: 'phone/create/',
        data: data,
    });

// order
export const API_PhoneOrder_C = (data) =>
    axiosClientNoToken({
        url: 'phone/order-c/',
        method: 'POST',
        data: data,
    });
