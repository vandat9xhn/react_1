import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_preview_obj } from '../../../_default/fb_group/preview';

//
export const API_GroupPreview_R = (params) =>
    API_FakeReal(
        default_fb_group_preview_obj(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-group-preview-r/',
                method: 'GET',
                params: params,
            }),
        params
    );
