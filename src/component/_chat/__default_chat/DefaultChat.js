import img from '../../../../image/my_image.png';

export const default_zoom_chat_obj = {
    "zoom_chat": "1-2",
    "zoom_users": [
        {
            "id": 1,
            "user": 
                {
                    "id": 1,
                    "picture": img,
                    "cover_picture": img,
                    "first_name": "My",
                    "last_name": "My",
                    "nick_name": "nkox my",
                    "birth": "2021-03-28",
                    "permission_birth": 0,
                    "permission_friends": 0,
                    "hobby": "s",
                    "story": "s",
                    "email": "abcxyz@gmail.com",
                    "permission_email": 0,
                    "phone": "0123456789",
                    "permission_phone": 0,
                    "address": "Ha Noi",
                    "permission_address": 0,
                    "work": "Dev",
                    "university": "HUBT",
                    "high_school": "Hoa Lu",
                    "is_online": false
                }
            ,
            // "is_owner": false,
            "is_notice": true,
            "on_chat": false,
            "on_input": false,
            "id_begin_mess": 0,
            "id_receive_mess": 0,
            "id_seen_mess": 0,
            "joined_time": "2021-03-28T03:14:47.608010Z",
            "zoom_model": "1-2",
            "profile_model": 1
        },
        {
            "id": 2,
            "user": 
                {
                    "id": 2,
                    "picture": img,
                    "cover_picture": img,
                    "first_name": "My",
                    "last_name": "My",
                    "nick_name": "nkox my",
                    "birth": "2021-03-28",
                    "permission_birth": 0,
                    "permission_friends": 0,
                    "hobby": "s",
                    "story": "s",
                    "email": "abcxyz@gmail.com",
                    "permission_email": 0,
                    "phone": "0123456789",
                    "permission_phone": 0,
                    "address": "Ha Noi",
                    "permission_address": 0,
                    "work": "Dev",
                    "university": "HUBT",
                    "high_school": "Hoa Lu",
                    "is_online": false
                }
            ,
            "is_owner": false,
            "is_notice": true,
            "on_chat": false,
            "on_input": false,
            "begin_mess": 0,
            "joined_time": "2021-03-28T03:14:51.777085Z",
            "zoom_model": "1-2",
            "profile_model": 2
        }
    ],
    "count_user": 2,
    "messages": [
        {
            "id": 1,
            "user": [
                {
                    "id": 1,
                    "picture": img,
                    "cover_picture": img,
                    "first_name": "My",
                    "last_name": "My",
                    "nick_name": "nkox my",
                    "birth": "2021-03-28",
                    "permission_birth": 0,
                    "permission_friends": 0,
                    "hobby": "s",
                    "story": "s",
                    "email": "abcxyz@gmail.com",
                    "permission_email": 0,
                    "phone": "0123456789",
                    "permission_phone": 0,
                    "address": "Ha Noi",
                    "permission_address": 0,
                    "work": "Dev",
                    "university": "HUBT",
                    "high_school": "Hoa Lu",
                    "is_online": false
                }
            ],
            "vid_pics": [
                {
                    "id": 1,
                    "vid_pic": img,
                    "mess_model": 1
                },
                {
                    "id": 2,
                    "vid_pic": img,
                    "mess_model": 1
                }
            ],
            "count_vid_pic": 2,
            "user_likes": [
                {
                    "id": 1,
                    "user": {
                        "id": 2,
                        "picture": img,
                        "cover_picture": img,
                        "first_name": "My",
                        "last_name": "My",
                        "nick_name": "nkox my",
                        "birth": "2021-03-28",
                        "permission_birth": 0,
                        "permission_friends": 0,
                        "hobby": "s",
                        "story": "s",
                        "email": "abcxyz@gmail.com",
                        "permission_email": 0,
                        "phone": "0123456789",
                        "permission_phone": 0,
                        "address": "Ha Noi",
                        "permission_address": 0,
                        "work": "Dev",
                        "university": "HUBT",
                        "high_school": "Hoa Lu",
                        "is_online": false
                    },
                    "type_like": 1,
                    "mess_model": 1,
                    "profile_model": 2
                }
            ],
            "user_like": -1,
            "count_like": 1,
            "str_type_likes": "1,2,3,",
            "arr_distinct_user_like": [1, 2, 3],
            // "user_statuses": [],
            "message": "ssss",
            "created_time": "2021-03-28T03:15:17.869450Z",
            "zoom_model": "1-2",
            "profile_model": 1
        }
    ],
    "count_message": 1,
    "is_group": true,
    "updated_time": "2021-03-28T10:11:52Z",
    "owner": {
        id: 1,
        first_name: 'Nguyen',
        last_name: 'Dat',
    },
    "creator": {
        id: 1,
        first_name: 'Nguyen',
        last_name: 'Dat',
    },
    "group_notices": [
        {
            profile_model: 1,
            user: {
                id: 1,
                first_name: 'Nguyen',
                last_name: 'Dat',
            },
            profile_friend: 2,
            friend: {
                id: 2,
                first_name: 'Ngoc',
                last_name: 'My',
            },
            status: 'quit',
            created_time: new Date(),
        }
    ],
    "count_group_notice": 3,
    "count_new_mess": 0,
    "is_active": false,
    "user_begin_mess": 0,
}
