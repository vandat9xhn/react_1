import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
// 
import { default_fs_coin_history_arr } from '../../../_default/fashion/coin';
//


//
export const API_FsCoinHistory_L = ({ params = {} }) =>
    API_FakeReal(
        default_fs_coin_history_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/shopee/coin-history-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );
