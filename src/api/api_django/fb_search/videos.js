import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_search_video_arr } from '../../../_default/fb_search/videos';

//
export const API_FbSearchVideo_L = (params) =>
    API_FakeReal(
        default_fb_search_video_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/search-video-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
