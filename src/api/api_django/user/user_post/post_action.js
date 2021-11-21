import axiosDjangoClient from '../../_axios/AxiosDjango';
// 
import { API_FakeReal } from '../../../_ConstAPI';
// 
import { default_post_action_arr } from '../../../../_default/post/actions';

//
export const API_PostAction_L = ({ params = {} }) =>
    API_FakeReal(
        default_post_action_arr({ type: params['type'] }),
        () =>
            axiosDjangoClient({
                url: `api/facebook/post-action-l/`,
                params: params,
            }),
        params
    );
