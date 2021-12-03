import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_page_media_video_arr } from '../../../_default/fb_group/page_media_videos';

//
export const API_FbGroupMediaVideo_L = (params) =>
    API_FakeReal(
        default_fb_group_page_media_video_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-media-video-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
