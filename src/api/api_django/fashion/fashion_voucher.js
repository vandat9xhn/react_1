import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_voucher_arr } from '../../../_default/fashion/DefaultProductBuying';

//
export const API_FsVoucher_L = ({ method, params = {}, data = {} }) =>
    API_FakeReal(
        default_voucher_arr(),
        () =>
            axiosDjangoClient({
                url: '/transporter/fashion-voucher-lc/',
                method: method,
                params: params,
                data: data,
            }),
        params,
        true,
    );
