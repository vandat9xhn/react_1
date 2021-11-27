import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_page_preview_obj } from '../../../_default/fb_page/preview';

//
export const API_PagePreview_R = (params) =>
    API_FakeReal(
        default_fb_page_preview_obj(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-page-preview-r/',
                method: 'GET',
                params: params,
            }),
        params
    );
