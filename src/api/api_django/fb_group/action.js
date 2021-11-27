import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
// 
import { default_fb_group_other_action_arr } from '../../../_default/fb_group/actions_other';
//

//
export const API_GroupActions_L = (params = {}) =>
    API_FakeReal(default_fb_group_other_action_arr(), () =>
        axiosDjangoClient({
            url: 'api/facebook/group-other-action-l',
            method: 'GET',
            params: params,
        })
    );
