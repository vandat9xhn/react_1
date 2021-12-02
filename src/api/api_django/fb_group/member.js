import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_member_arr } from '../../../_default/fb_group/member';

//
export const FbGroupMember_L = (params) =>
    API_FakeReal(
        default_fb_group_member_arr({type: params['type']}),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-member-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
