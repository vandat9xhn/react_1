import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_page_other_action_arr } from '../../../_default/fb_page/actions_other';
//

//
export const API_PageActions_L = (params = {}) =>
    API_FakeReal(default_fb_page_other_action_arr(), () =>
        axiosDjangoClient({
            url: 'api/facebook/page-other-action-l',
            method: 'GET',
            params: params,
        })
    );
