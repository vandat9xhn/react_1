import { getRandomContentObj } from "../_common/default_content";
import { getRandomId } from "../_common/default_id";
import { getRandomVidPicOrNull } from "../_common/default_image";
import { getRandomUser } from "../_common/default_user";
import { getDefaultArr } from "../_common/getDefaultArr";

//
const default_post_vid_pic_sub_obj = () => ({
    id: getRandomId(),
    ...getRandomContentObj(),
    ...getRandomUser(),
    likes: [],
    count_like: 1,
    user_type_like: getRandomId(6) - 1,
    histories: [],
    count_history: 0,
    created_time: '2021-04-02T06:44:46.495730Z',
    updated_time: '2021-04-02T06:44:46.495730Z',
    vid_pic: getRandomVidPicOrNull(),
    comment_model: 8,
    profile_model: 3,
});

export const default_post_vid_pic_sub_arr = (min, max) =>
    getDefaultArr(default_post_vid_pic_sub_obj, min, max);
