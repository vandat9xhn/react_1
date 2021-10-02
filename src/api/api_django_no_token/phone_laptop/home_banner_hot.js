import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_pl_home_banner_hot_obj } from '../../../_default/phone/home_banner_hot';
//

//
export const API_PLBannerHot_R = (params = {}) =>
    API_FakeReal(default_pl_home_banner_hot_obj(), () =>
        axiosClientNoToken({
            url: 'api/phone/banner-hot-r/',
            method: 'GET',
            params: params,
        })
    );
