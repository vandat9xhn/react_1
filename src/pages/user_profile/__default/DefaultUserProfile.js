import img from '../../../../image/my_image.png';

import { permission_add_friend_obj, user_related_obj } from '../__some_obj/InfoObj';

/* ----------------------------------------- */

//
export const default_user_r = [
    {
        id: 1,
        picture: img,
        cover_picture: img,
        first_name: 'Nguyen',
        last_name: 'Dat',
        nick_name: 'nothing',
        story: 'Ha Ha',
        university: 'USSH',
        hobby: 'Play game',
        from: 'Vinh Phuc',
        live_now: 'Vinh Phuc',

        permission_add_friend: permission_add_friend_obj.has_mutual_friend,
        user_related: user_related_obj.c_user,
        is_block_message: 0,
    },
    {
        id: 2,
        picture: img,
        cover_picture: img,
        first_name: 'My',
        last_name: 'My',
        nick_name: 'my my',
        story: 'Game',
        university: 'FPT',
        hobby: 'CODE',
        from: 'Nam Dinh',
        live_now: 'Hai Hau',

        permission_add_friend: permission_add_friend_obj.no_mutual_friend,
        user_related: user_related_obj.has_mutual_friend,
        is_block_message: 0,
    },
    {
        id: 3,
        picture: img,
        cover_picture: img,
        first_name: 'Ngoc',
        last_name: 'My',
        nick_name: '<3',
        story: '',
        university: 'Havard',
        hobby: 'Sleep',
        from: 'Vinh Phuc',
        live_now: 'Vinh Phuc',

        permission_add_friend: permission_add_friend_obj.follow,
        user_related: user_related_obj.send_request,
        is_block_message: 1,
    },
];

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

export const default_user_about_r = {
    work_arr: [{
        name: 'IT at Ha Noi',
        permission: 0,
    }],
    university_arr: [{
        name: 'Dai hoc Buon long ga ban long vit',
        permission: 0,
    }],
    school_arr: [{
        name: 'Le Quy Don',
        permission: 0,
    }],
    
}