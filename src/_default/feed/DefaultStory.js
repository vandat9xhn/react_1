import { IS_MOBILE } from '../../_constant/Constant';
//
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_story_obj = (has_new = false) => ({
    newest_story: {
        id: getRandomId(),
        vid_pic: getRandomVidPic(),
    },
    count_new: has_new ? getRandomNumber(1, 10) : 0,
    ...getRandomUser(),
});

export const default_story_arr = () =>
    [
        ...getDefaultArr(() => default_story_obj(true), 0, 4),
        ...getDefaultArr(() => default_story_obj(false), 0, 4),
    ].slice(0, IS_MOBILE ? 6 : 4);
