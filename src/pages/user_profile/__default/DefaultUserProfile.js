import img from '../../../../image/my_image.png';
import phone_jpg from '../../../../image/phone_jpg.jpg';
import banner_phone from '../../../../image/banner_phone.jpg';
import naruto_x_hinata from '../../../../image/naruto_x_hinata.jpg';

import {
    permission_add_friend_obj,
    user_related_obj,
} from '../__some_obj/InfoObj';

/* ----------------------------------------- */

// friends
export const default_friend_arr = [
    {
        friend: {
            id: 3,
            first_name: 'My 1',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 2,
            first_name: 'My 2',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 4,
            first_name: 'My 3',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 5,
            first_name: 'My 4',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 6,
            first_name: 'My 5',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 7,
            first_name: 'My 7',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 8,
            first_name: 'My 23',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 9,
            first_name: 'My 33',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 10,
            first_name: 'My 44',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 11,
            first_name: 'My 55',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 10,
            first_name: 'My 66',
            last_name: 'My',
            picture: img,
        },
    },
    {
        friend: {
            id: 11,
            first_name: 'My 77',
            last_name: 'My',
            picture: img,
        },
    },
];

// user

function getRandomItemArr(arr = [], default_return) {
    if (arr.length == 0) return default_return;

    return arr[Math.floor(Math.random() * (arr.length - 1))];
}

const first_name_arr = [
    'Mon',
    'Tues',
    'Wednes',
    'Thurs',
    'Fri',
    'Satur',
    'Sun',
];
const picture_arr = [img, banner_phone, naruto_x_hinata, phone_jpg];
const cover_arr = [img, banner_phone, naruto_x_hinata, phone_jpg];
const user_related_arr = [
    'no_mutual_friend',
    'has_mutual_friend',
    'send_request',
    'received_request',
    'friend',
    'c_user',
];

export const default_user_about_r = () => ({
    id: Math.floor(Math.random() * 1000),
    first_name: getRandomItemArr(first_name_arr),
    last_name: 'Day',
    picture: getRandomItemArr(picture_arr, ''),
    cover: getRandomItemArr(cover_arr, ''),

    user_related: getRandomItemArr(user_related_arr),
    permission_add_friend: 0,
    is_block_message: 0,

    gender_obj: {
        id: 5,
        title: 'Male',
        gender: 'male',
        permission: 0,
        profile_model: 11,
    },

    birth_obj: {
        id: 5,
        title: '2000-11-10',
        birth: '2000-11-10',
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

    life_arr: [],

    mail_obj: {
        id: 8,
        title: 'monday@gmail.com',
        mail: 'monday@gmail.com',
        permission: 0,
        profile_model: 11,
    },

    phone_arr: [],
    address_arr: [],
    town_arr: [],
    city_arr: [],

    family_arr: [],

    relation_obj: {
        id: 5,
        title: '',
        relation: '',
        permission: 0,
        profile_model: 11,
    },

    work_arr: [],
    school_arr: [],
    university_arr: [],

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

    other_name_arr: [],

    is_online: true,
    created_time: '2021-06-10T01:15:38.302083Z',
});
