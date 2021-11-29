import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_about_preview_obj } from '../../../_default/fb_group/about_preview';


//
export const API_GroupAboutPreview_R = (params = {}) =>
    API_FakeReal(
        default_fb_group_about_preview_obj(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-about-preview-r',
                method: 'GET',
                params: params,
            })
    );
