import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_page_media_album_arr } from '../../../_default/fb_group/page_media_albums';

// 
export const API_FbGroupMediaAlbum_L = (params) =>
    API_FakeReal(
        default_fb_group_page_media_album_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-media-album-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
