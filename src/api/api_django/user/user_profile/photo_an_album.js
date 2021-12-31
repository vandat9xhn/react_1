import axiosDjangoClient from '../../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../../_ConstAPI';
//
import { default_fb_profile_photo_an_album_r } from '../../../../_default/user_post/photo_an_album';

//
export const API_FbProfilePhotoAlbum_R = (params) =>
    API_FakeReal(default_fb_profile_photo_an_album_r(), () =>
        axiosDjangoClient({
            url: 'api/facebook/profile-photo-an-album-r/',
            method: 'GET',
            params: params,
        })
    );
