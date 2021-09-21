import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fs_notice_arr } from '../../../_default/fashion/notice';

//
export const API_FsNotice_L = ({ params = {} }) =>
    API_FakeReal(
        default_fs_notice_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/shopee/bank-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );
