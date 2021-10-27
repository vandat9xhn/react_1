import axiosDjangoClient from '../../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../../_ConstAPI';
//
import { default_fb_profile_info_r } from '../../../../_default/user_post/info';

//
export const API_ProfileInfo_R = (params) =>
    API_FakeReal(default_fb_profile_info_r(params['profile_model']), () =>
        axiosDjangoClient({
            url: 'api/facebook/profile-info-r/',
            method: 'GET',
            params: params,
        })
    );
