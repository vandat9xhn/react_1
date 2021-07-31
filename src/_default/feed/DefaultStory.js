import { getRandomId } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_story_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    ...getRandomUser(),
});

export const default_story_arr = () => getDefaultArr(default_story_obj, 0, 12);
