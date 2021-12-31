import { API_FbProfilePhotoAlbum_R } from '../../api/api_django/user/user_profile/photo_an_album';

//
export async function handle_API_FbProfilePhotoAlbum_R({ album_id = 0 }) {
    const res = await API_FbProfilePhotoAlbum_R({
        album_model: album_id,
    });

    return res.data;
}
