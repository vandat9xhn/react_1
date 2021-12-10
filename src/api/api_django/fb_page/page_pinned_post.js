import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_page_pinned_post_obj } from '../../../_default/fb_page/page_pinned_post';

//
export const API_FbPagePinnedPost_R = (params) =>
    API_FakeReal(default_fb_page_pinned_post_obj(), () =>
        axiosDjangoClient({
            url: 'api/facebook/fb-page-pinned-post-r/',
            method: 'GET',
            params: params,
        })
    );
