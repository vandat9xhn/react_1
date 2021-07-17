import { default_define_user } from '../login/DefaultLogin';
//
import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomName } from '../_common/default_name';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_room_user_obj = (is_owner = false) => ({
    id: getRandomId(),
    ...(is_owner ? { user: default_define_user } : getRandomUser()),
    is_owner: false,
    is_notice: true,
    on_chat: false,
    on_input: false,
    begin_mess: 0,
    joined_time: '2021-03-28T03:14:51.777085Z',
    room_model: '1-2',
    profile_model: 2,
});

const default_room_user_arr = (min, max) => [
    default_room_user_obj(true),
    ...getDefaultArr(default_room_user_obj, min, max),
];

//
const default_message_vid_pic_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    mess_model: 1,
});

export const default_message_vid_pic_arr = (min = 0, max = 6) =>
    getDefaultArr(default_message_vid_pic_obj, min, max);

//
const default_message_user_like_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    type_like: getRandomId(5),
    mess_model: 1,
    profile_model: 2,
});

export const default_message_user_like_arr = () =>
    getDefaultArr(default_message_user_like_obj, 0, 6);

//
const default_message_obj = () => {
    const _vid_pic_arr = default_message_vid_pic_arr(
        0,
        getRandomBool() ? 6 : 0
    );

    //
    return {
        id: getRandomId(),
        ...getRandomUser(),
        vid_pics: _vid_pic_arr,
        count_vid_pic: _vid_pic_arr.length,
        // user_likes: default_message_user_like_arr(),
        user_like: getRandomNumber(-1, 5),
        count_like: 1,
        str_type_likes: '1,2,3',
        arr_distinct_user_like: [1, 2, 3],
        // "user_statuses": [],
        message: getRandomContent(),
        created_time: '2021-03-28T03:15:17.869450Z',
        room_model: '1-2',
        profile_model: 1,
    };
};

export const default_message_arr = () =>
    getDefaultArr(default_message_obj, 5, 10);

//
const default_group_notice_obj = () => ({
    profile_model: 1,
    ...getRandomUser(),
    profile_friend: 2,
    friend: getRandomUser().user,
    status: 'quit',
    created_time: new Date(),
});

export const default_group_notice_arr = () =>
    getDefaultArr(default_group_notice_obj, 2, 6);

/* -------------- */
export const default_room_chat_obj = (room_chat) => {
    const is_group = getRandomBool();

    //
    return {
        room_chat: room_chat,
        room_users: default_room_user_arr(2, is_group ? 6 : 2),
        count_user: 2,
        messages: default_message_arr(),
        count_message: 100,
        is_group: is_group,
        updated_time: '2021-03-28T10:11:52Z',
        owner: { ...default_define_user, is_online: true },
        creator: { ...default_define_user, is_online: true },
        group_notices: default_group_notice_arr(),
        count_group_notice: 3,
        count_new_mess: 0,
        is_active: false,
        user_begin_mess: 0,
    };
};
