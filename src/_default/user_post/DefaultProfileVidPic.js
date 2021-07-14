import { getRandomId } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomName } from '../_common/default_name';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_album_vid_pic_obj = () => ({
    id: getRandomId(),
    name: getRandomName(),
    vid_pics: [
        {
            id: getRandomId(),
            vid_pic: getRandomVidPic(),
        },
    ],
});

export const default_album_vid_pic_arr = () =>
    getDefaultArr(default_album_vid_pic_obj, 9, 9);

//
const default_profile_vid_pic_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
});

export const default_profile_vid_pic_arr = () =>
    getDefaultArr(default_profile_vid_pic_obj, 9, 9);
