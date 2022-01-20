import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_watch_new_arr } from '../../../_default/fb_watch/new';

//
export const API_WatchNew_L = (params) =>
    API_FakeReal(
        default_fb_watch_new_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-watch-new-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );
