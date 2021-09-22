import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import {
    default_phone_arr,
    default_phone_obj,
} from '../../../_default/phone/DefaultPhone';

// list
export const API_PhoneLaptop_L = (params = {}) =>
    API_FakeReal(
        default_phone_arr(),
        () =>
            axiosClientNoToken({
                url: 'api/phone/phone-lap-l/',
                params: params,
            }),
        params
    );

// retrieve
export const API_PhoneLaptop_R = (id = 0) =>
    API_FakeReal(default_phone_obj(), () =>
        axiosClientNoToken({
            url: 'api/phone/phone-lap-r/' + id + '/',
        })
    );

// order
export const API_PhoneOrder_C = (data) =>
    API_FakeReal({}, () =>
        axiosClientNoToken({
            url: 'api/phone/order-c/',
            method: 'POST',
            data: data,
        })
    );
