import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_page_about_obj } from '../../../_default/fb_group/page_about';

//
export const API_FbGroupAbout_R = (params) =>
    API_FakeReal(
        default_fb_group_page_about_obj(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-group-page-about-r/',
                method: 'GET',
                params: params,
            }),
        params
    );
