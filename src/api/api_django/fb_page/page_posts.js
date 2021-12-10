import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_page_post_arr } from '../../../_default/fb_page/page_posts';
//

//
export const API_FbPagePost_L = (params = {}) =>
    API_FakeReal(
        default_fb_page_post_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/page-post-l',
                method: 'GET',
                params: params,
            }),
        params
    );
