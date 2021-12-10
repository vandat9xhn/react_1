import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_page_home_preview_obj } from '../../../_default/fb_page/page_home_preview';

//
export const API_FbPageHomePreview_R = (params) =>
    API_FakeReal(
        default_fb_page_home_preview_obj(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-page-home-preview-r/',
                method: 'GET',
                params: params,
            }),
        params
    );
