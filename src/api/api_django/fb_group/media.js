import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_media_arr } from '../../../_default/fb_group/media';

//
export const FbGroupMedia_L = (params) =>
    API_FakeReal(
        default_fb_group_media_arr({ size: params['size'] }),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-media-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
