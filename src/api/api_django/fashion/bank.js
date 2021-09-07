import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fs_bank_card_arr } from '../../../_default/fashion/bank';

//
export const API_FsBankCard_L = ({ params = {} }) =>
    API_FakeReal(
        default_fs_bank_card_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/shopee/bank-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );
