import { default_define_user } from '../login/DefaultLogin';
import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomName } from '../_common/default_name';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const default_action_case_obj = {
    edit_profile: 'edit_profile',
    add_story: 'add_story',

    friend: 'friend',
    chat: 'chat',

    add_friend: 'add_friend',
    reply_request: 'reply_request',
    follow: 'follow',
};

//
const default_action_case_arr = [
    [
        { name: default_action_case_obj.add_story },
        { name: default_action_case_obj.edit_profile },
    ],

    [
        { name: default_action_case_obj.friend },
        { name: default_action_case_obj.chat },
    ],
    [
        { name: default_action_case_obj.add_friend },
        { name: default_action_case_obj.chat },
    ],

    [
        { name: default_action_case_obj.reply_request },
        { name: default_action_case_obj.chat },
    ],
    [{ name: default_action_case_obj.chat }],
    [{ name: default_action_case_obj.follow }],
];

//
export const default_fb_profile_info_r = (user_id, max_friend_arr = 8) => {
    const mutual_friend_count = getRandomBool() ? getRandomNumber(0, 50) : 0;
    const friend_count = getRandomBool()
        ? getRandomNumber(mutual_friend_count, mutual_friend_count + 200)
        : 0;

    const mutual_friend_arr = mutual_friend_count
        ? getDefaultArr(
              () => getRandomUser().user,
              mutual_friend_count >= max_friend_arr
                  ? max_friend_arr
                  : mutual_friend_count,
              mutual_friend_count >= max_friend_arr
                  ? max_friend_arr
                  : mutual_friend_count
          )
        : [];
    const friend_arr = !mutual_friend_count
        ? getDefaultArr(
              () => getRandomUser().user,
              friend_count >= max_friend_arr ? max_friend_arr : friend_count,
              friend_count >= max_friend_arr ? max_friend_arr : friend_count
          )
        : [];

    const action_case_arr =
        user_id == default_define_user.id
            ? default_action_case_arr[0]
            : getRandomFromArr(default_action_case_arr.slice(1));

    const sent_request =
        action_case_arr[0].name == default_action_case_obj.reply_request;

    return {
        id: getRandomId(),
        first_name: getRandomName(),
        last_name: getRandomName(),
        picture: getRandomVidPic(),
        cover: getRandomVidPic(),

        sent_request: sent_request,
        has_new_story: getRandomBool(),

        nick_name: getRandomBool() ? '' : getRandomName(),
        bio: getRandomBool() ? '' : getRandomContent().slice(0, 100),

        friend_arr: friend_arr,
        friend_count: friend_count,
        mutual_friend_arr: mutual_friend_arr,
        mutual_friend_count: mutual_friend_count,
        has_more_friend:
            mutual_friend_count > 8 ||
            (mutual_friend_count == 0 && friend_count > 8),

        action_case_arr: action_case_arr,

        //
        time_to_birth: getRandomNumber(-10, 10),
        town: 'Ha Noi',
        university: 'Dai Hoc Buon Long Ga',

        is_online: true,
        created_time: '2021-06-10T01:15:38.302083Z',
    };
};

export const default_fb_profile_info_arr = ({ type }) => {
    const is_suggest = ['suggest', 'friend'].includes(type);

    return getRandomBool() && !is_suggest
        ? []
        : getDefaultArr(
              () => default_fb_profile_info_r(-1, 2),
              is_suggest ? 10 : 0,
              10
          );
};
