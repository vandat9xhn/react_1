import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_page_about_obj } from '../../../_default/fb_page/page_about';

//
export const API_FbPageAbout_R = (params) =>
    API_FakeReal(
        default_fb_page_about_obj(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-page-about-r/',
                method: 'GET',
                params: params,
            }),
        params
    );
