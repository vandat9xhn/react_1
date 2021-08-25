import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fs_item_gift } from '../../../_default/fashion/DefaultProductItem';

//
export const API_FsItemGift_R = (params = {}) =>
    API_FakeReal(default_fs_item_gift(), () =>
        axiosClientNoToken({
            url: '/fashion/',
            method: 'GET',
            params: params,
        })
    );
