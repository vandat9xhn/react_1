import { formatLocalDateString } from '../../_some_function/FormatDate';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomName } from '../_common/default_name';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomBool } from '../_common/default_bool';

/* ----------------------------------------- */

//
const default_friend_obj = () => ({
    id: getRandomId(),
    first_name: getRandomName(),
    last_name: getRandomName(),
    picture: getRandomVidPic(),

    is_friend: getRandomBool(),
    can_add_friend: getRandomBool(),
    sent_request: getRandomBool(),
});

export const default_friend_arr = (min = 9, max = 9) =>
    getDefaultArr(default_friend_obj, min, max);

//
const user_related_arr = [
    'no_mutual_friend',
    'has_mutual_friend',
    'send_request',
    'received_request',
    'friend',
    'c_user',
];

const gender_arr = ['Male', 'Female', 'Other'];

export const default_user_about_r = () => {
    const gender = getRandomFromArr(gender_arr);
    const birth = getRandomNumber(631152000000, 631152000000 + 631152000000);

    return {
        id: getRandomId(),
        first_name: getRandomName(),
        last_name: getRandomName(),
        picture: getRandomVidPic(),
        cover: getRandomVidPic(),

        user_related: getRandomFromArr(user_related_arr),
        permission_add_friend: 0,
        is_block_message: getRandomId(1),

        gender_obj: {
            id: 5,
            title: gender,
            gender: gender.toLowerCase(),
            permission: 0,
            profile_model: 11,
        },

        birth_obj: {
            id: 5,
            title: formatLocalDateString(birth),
            birth: birth,
            permission: 0,
            profile_model: 11,
        },

        lang_obj: {
            id: 5,
            title: '',
            lang: '',
            permission: 0,
            profile_model: 11,
        },

        life_event_arr: [],

        email_obj: {
            id: 8,
            title: 'monday@gmail.com',
            email: 'monday@gmail.com',
            permission: 0,
            profile_model: 11,
        },

        phone_arr: [],
        address_arr: [],
        town_arr: [
            {
                id: 1,
                title: 'Ha Noi',
                town: 'Ha Noi',
                permission: 0,
            },
        ],
        city_arr: [],

        family_arr: [],

        relationship_obj: {
            id: 5,
            title: '',
            relation: '',
            permission: 0,
            profile_model: 11,
        },

        work_arr: [],
        school_arr: [],
        university_arr: [
            {
                id: 1,
                title: 'Dai Hoc Buon Long Ga',
                university: 'Dai Hoc Buon Long Ga',
                permission: 0,
            },
        ],

        hobby_obj: {
            id: 5,
            title: '',
            hobby: '',
            permission: 0,
            profile_model: 11,
        },

        you_obj: {
            id: 5,
            title: '',
            you: '',
            permission: 0,
            profile_model: 11,
        },

        favour_obj: {
            id: 5,
            title: '',
            favour: '',
            permission: 0,
            profile_model: 11,
        },

        other_name_arr: [],

        is_online: true,
        created_time: '2021-06-10T01:15:38.302083Z',
    };
};
