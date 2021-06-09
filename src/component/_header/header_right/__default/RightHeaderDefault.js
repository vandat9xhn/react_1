import white_person  from '../../../../../image/white_person.svg';


// const
export const default_message_arr = [
    {
        id: 2,
        name: 'Nguyen Nguyen',
        last_message:
            '2222222222222 asd ad ad ad asd ad ad ad asd asd ad ad ad ',
    },
    {
        id: 3,
        name: 'Ngoc My',
        last_message: '3333333333333',
    },
    {
        id: 4,
        name: 'Nguyen My',
        last_message: '44444444444444',
    },
    {
        id: 5,
        name: 'Nguyen Dat',
        last_message: '55555555555555',
    },
    {
        id: 6,
        name: 'My My',
        last_message: '6666666666666666',
    },
];

export const default_zoom_arr = [
    {
        zoom_chat: '1-2',
        messages: [{
            user: {
                first_name: 'My',
                last_name: 'My',
                picture: white_person,
            },
            message: 'abc def asd a dsa asd  asd a'
        }],
        count_new_mess: 1,
        updated_time: new Date()
    },
    {
        zoom_chat: '1-2',
        messages: [{
            user: {
                first_name: 'My 2',
                last_name: 'My',
                picture: white_person,
            },
            message: 'abc def asd a dsa asd  asd a'
        }],
        count_new_mess: 3,
        updated_time: new Date()
    },
    {
        zoom_chat: '1-2',
        messages: [{
            user: {
                first_name: 'My 3',
                last_name: 'My',
                picture: white_person,
            },
            message: 'abc def asd a dsa asd  asd a'
        }],
        count_new_mess: 0,
        updated_time: new Date()
    },
]

export const default_notice_arr = [
    {
        id: 1,
        link_id: 2,
        user: {
            first_name: 'My',
            last_name: 'My',
            picture: white_person,
        },
        content: 'My My liked your post',
        status_seen: 0,
        updated_time: new Date()
    },
    {
        id: 2,
        link_id: 4,
        user: {
            first_name: 'My',
            last_name: 'My',
            picture: white_person,
        },
        content: 'My My commented your post',
        status_seen: 2,
        updated_time: new Date()
    },
]
