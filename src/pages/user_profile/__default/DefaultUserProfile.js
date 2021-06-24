import img from '../../../../image/my_image.png';
import phone_jpg from '../../../../image/phone_jpg.jpg';
import banner_phone from '../../../../image/banner_phone.jpg';
import banner_laptop_phone from '../../../../image/banner_laptop_phone.jpg';
import naruto_x_hinata from '../../../../image/naruto_x_hinata.jpg';
import contact_phone from '../../../../image/contact phone.png';
import giay_the_thao from '../../../../image/giay_the_thao.jpg';
import white_person from '../../../../image/white person.png';
// 
import { formatLocalDateString } from '../../../_some_function/FormatDate';
// 
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
const picture_arr = [
    img,
    banner_phone,
    naruto_x_hinata,
    phone_jpg,
    banner_laptop_phone,
    giay_the_thao,
    contact_phone,
    white_person,
];
const cover_arr = [
    img,
    banner_phone,
    naruto_x_hinata,
    phone_jpg,
    banner_laptop_phone,
    giay_the_thao,
    contact_phone,
    white_person,
];
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
    const gender = getRandomItemArr(gender_arr);
    const birth = Math.random() * 631152000000 + 631152000000;

    return {
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
