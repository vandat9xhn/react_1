import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_page_media_photo_arr } from '../../../_default/fb_group/page_media_photos';

//
export const API_FbGroupMediaPhoto_L = (params) =>
    API_FakeReal(
        default_fb_group_page_media_photo_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-media-photo-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
