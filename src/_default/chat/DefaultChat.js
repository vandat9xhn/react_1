import { CHAT_MESS_TYPE } from '../../_data/chat/mess_type';
import { default_define_user } from '../login/DefaultLogin';
import { default_post_reacted_info_obj } from '../post/reacted';
//
import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomName, getRandomNickName } from '../_common/default_name';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
import { default_chat_list_colour_arr } from './colour';
import { default_chat_emoji_arr } from './emoji';

//
const default_room_user_obj = (is_owner = false) => ({
    id: getRandomId(),
    ...(is_owner ? { user: default_define_user } : getRandomUser()),
    is_owner: is_owner,
    is_admin: (getRandomBool() && getRandomBool()) || is_owner,
    nickname: '',

    is_notice: true,
    on_chat: false,
    on_input: false,

    begin_mess: 0,
    last_seen_mess: -1,
    last_receive_mess: 0,

    room_model: '1-2',
    profile_model: 2,
    joined_time: '2021-03-28T03:14:51.777085Z',
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
const default_message_obj = (is_group = false) => {
    const type =
        getRandomBool() && getRandomBool()
            ? getRandomFromArr(Object.values(CHAT_MESS_TYPE))
            : 'mess';

    const user_id = getRandomBool() ? 1 : getRandomId();
    const mess_common_obj = {
        id: getRandomId(),
        type: type,
        user: user_id == 1 ? default_define_user : getRandomUser().user,

        profile_model: user_id,
        room_model: '1-2',
        created_time: '2021-03-28T03:15:17.869450Z',
    };

    // -------

    if (type != 'mess') {
        const change_obj = {};

        if (
            is_group &&
            [
                CHAT_MESS_TYPE.ADD_FRIEND,
                CHAT_MESS_TYPE.REMOVE_FRIEND,
                CHAT_MESS_TYPE.MAKE_ADMIN,
                CHAT_MESS_TYPE.REMOVE_ADMIN,
            ].includes(type)
        ) {
            change_obj['friend'] = {
                ...getRandomUser().user,
                id: user_id != 1 && getRandomBool() ? 1 : getRandomId(),
            };
        } else if (type == CHAT_MESS_TYPE.COLOUR) {
            change_obj['colour_arr'] = getRandomFromArr(
                default_chat_list_colour_arr()
            ).colour_arr;
        } else if (type == CHAT_MESS_TYPE.EMOJI) {
            change_obj['emoji'] = getRandomFromArr(default_chat_emoji_arr());
        }

        if (type == CHAT_MESS_TYPE.NICKNAME) {
            change_obj['friend'] = {
                ...getRandomUser().user,
                id: user_id != 1 && getRandomBool() ? 1 : getRandomId(),
            };
            change_obj['nickname'] = getRandomNickName();
        }

        if (Object.keys(change_obj).length > 0) {
            return {
                ...mess_common_obj,
                ...change_obj,
            };
        }
    }

    // ------

    const _vid_pic_arr = default_message_vid_pic_arr(
        0,
        getRandomBool() && getRandomBool() ? getRandomNumber(0, 4) : 0
    );

    const vid_pic_count = getRandomNumber(
        _vid_pic_arr.length,
        _vid_pic_arr.length <= 4 ? _vid_pic_arr.length : _vid_pic_arr.length + 4
    );

    //
    return {
        ...mess_common_obj,
        ...default_post_reacted_info_obj(),

        vid_pics: _vid_pic_arr,
        vid_pic_count: vid_pic_count,
        message: getRandomContent().slice(0, 100),

        user_seen_arr: [],
        user_receive_arr: [],
    };
};

export const default_message_arr = (is_group, count_message) =>
    getDefaultArr(
        () => default_message_obj(is_group),
        count_message <= 20 ? count_message : 20,
        count_message <= 20 ? count_message : 20
    );

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
    const count_message = getRandomNumber(1, 50);
    const room_users = default_room_user_arr(
        is_group ? 2 : 1,
        is_group ? 6 : 1
    );

    const messages = default_message_arr(is_group, count_message);

    const last_receive_mess_ix = messages.findIndex(
        (item) => item.type == 'mess'
    );
    const last_seen_mess_ix =
        messages
            .slice(last_receive_mess_ix + 1)
            .findIndex((item) => item.type == 'mess') +
        last_receive_mess_ix +
        1;

    last_seen_mess_ix >= 0 &&
        (messages[last_seen_mess_ix].user_seen_arr = room_users
            .slice(1)
            .map((item) => item.user));

    last_receive_mess_ix >= 0 &&
        (messages[last_receive_mess_ix].user_receive_arr = room_users
            .slice(1)
            .map((item) => item.user));

    //
    return {
        room_chat: room_chat,
        room_users: room_users,
        count_user: room_users.length,
        owner: { ...default_define_user, is_online: true },
        creator: { ...default_define_user, is_online: true },

        is_group: is_group,
        group_name: '',
        colour_arr: getRandomFromArr(default_chat_list_colour_arr()).colour_arr,
        emoji: getRandomFromArr(default_chat_emoji_arr()),

        messages: messages,
        count_message: count_message,
        user_begin_mess: 0,

        group_notices: default_group_notice_arr(),
        count_group_notice: 3,

        is_active: false,
        count_new_mess: 0,
        updated_time: '2021-03-28T10:11:52Z',
    };
};
