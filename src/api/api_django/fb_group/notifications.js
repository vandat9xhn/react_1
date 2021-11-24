import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_notice_arr } from '../../../_default/fb_group/notifications';

// 
export const API_GroupNotice_L = (params) =>
    API_FakeReal(
        default_fb_group_notice_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-notice-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );
