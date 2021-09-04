import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_user_info_buy_arr } from '../../../_default/fashion/user_info';

//
export const API_FsUserInfoBuy_LC = ({ method, params = {}, data = {} }) =>
    API_FakeReal(
        params['is_active']
            ? default_user_info_buy_arr(true).slice(0, 1)
            : default_user_info_buy_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/shopee/user-info-lc/',
                method: method,
                params: params,
                data: data,
            }),
        params,
        true
    );
