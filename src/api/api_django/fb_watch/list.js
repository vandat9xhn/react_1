import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_watchlist_arr } from '../../../_default/fb_watch/list';

//
export const API_WatchList_L = (params) =>
    API_FakeReal(
        default_fb_watchlist_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-watchlist-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );
