import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_other_action_arr } from '../../../_default/fb_group/actions_other';
import { default_fb_group_joined_action_arr } from '../../../_default/fb_group/actions_joined';
//

//
export const API_GroupActions_L = (params = {}) =>
    API_FakeReal(
        params['type'] == 'other'
            ? default_fb_group_other_action_arr()
            : params['type'] == 'joined'
            ? default_fb_group_joined_action_arr()
            : null,
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-other-action-l',
                method: 'GET',
                params: params,
            })
    );
