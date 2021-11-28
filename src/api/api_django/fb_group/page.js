import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_page_obj } from '../../../_default/fb_group/page';

//
export const API_GroupPage_R = (params) =>
    API_FakeReal(
        default_fb_group_page_obj(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-group-page-r/',
                method: 'GET',
                params: params,
            }),
        params
    );
