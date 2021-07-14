import { getRandomContentObj } from "../_common/default_content";
import { getRandomId } from "../_common/default_id";
import { getRandomVidPicOrNull } from "../_common/default_image";
import { getRandomUser } from "../_common/default_user";
import { getDefaultArr } from "../_common/getDefaultArr";
// 
import { default_post_vid_pic_sub_arr } from "./DefaultVidPicSub";

//
const default_post_vid_pic_cmt_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    ...getRandomContentObj(),
    likes: [],
    count_like: 1,
    user_type_like: getRandomId(6) - 1,
    subs: default_post_vid_pic_sub_arr(0),
    count_sub: 1,
    histories: [],
    count_history: 0,
    created_time: '2021-04-02T06:42:36.443763Z',
    updated_time: '2021-04-02T06:42:36.443763Z',
    vid_pic: getRandomVidPicOrNull(),
    vid_pic_model: 6,
    profile_model: 2,
});

//
export const default_post_vid_pic_cmt_arr = (min, max) =>
    getDefaultArr(default_post_vid_pic_cmt_obj, min, max);
