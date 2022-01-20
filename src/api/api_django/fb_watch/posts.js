import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_watch_post_arr } from '../../../_default/fb_watch/posts';
//

//
export const API_WatchPost_L = (params = {}) =>
    API_FakeReal(
        default_fb_watch_post_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/watch-post-l',
                method: 'GET',
                params: params,
            }),
        params
    );
