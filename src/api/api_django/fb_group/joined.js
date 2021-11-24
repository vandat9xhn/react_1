import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_joined_arr } from '../../../_default/fb_group/joined';

//
export const API_GroupJoined_L = (params) =>
    API_FakeReal(
        default_fb_group_joined_arr({ pinned: params['c_count'] == 0 }),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-joined-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
