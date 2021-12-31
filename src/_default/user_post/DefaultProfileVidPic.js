import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomAlbumName } from '../_common/default_name';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_album_vid_pic_obj = () => ({
    id: getRandomId(),
    name: getRandomAlbumName(),
    vid_pic: getRandomVidPic(),
    count: getRandomNumber(1, 10),
});

export const default_album_vid_pic_arr = () =>
    getRandomBool() ? [] : getDefaultArr(default_album_vid_pic_obj, 0, 9);

//
const default_profile_vid_pic_obj = () => ({
    id: getRandomId(),
    img: getRandomVidPic(),
});

export const default_profile_vid_pic_arr = () =>
    getRandomBool() ? [] : getDefaultArr(default_profile_vid_pic_obj, 0, 9);
