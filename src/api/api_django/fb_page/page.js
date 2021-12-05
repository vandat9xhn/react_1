import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_page_obj } from '../../../_default/fb_page/page';

//
export const API_FbPage_R = (params) =>
    API_FakeReal(
        default_fb_page_obj(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-page-r/',
                method: 'GET',
                params: params,
            }),
        params
    );
