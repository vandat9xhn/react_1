import axiosDjangoClient from '../../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../../_ConstAPI';
//
import { default_fb_action_arr } from '../../../../_default/user_post/action';

//
export const API_ProfileActions_L = (params = {}) =>
    API_FakeReal(
        default_fb_action_arr({
            user_id: params['profile_model'],
            type: params['type'],
        }),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/profile-other-action-l',
                method: 'GET',
                params: params,
            })
    );
