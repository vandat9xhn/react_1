//
export const initial_posts = [
    {
        id: 0,
        user: {
            id: 0,
            picture: '',
            first_name: '',
            last_name: '',
            is_online: false,
        },

        user_tag_arr: [],
        user_tag_count: 0,
        emoji_obj: {},

        content_obj: {
            content_more: '',
            has_more_content: false,
            content: '',
        },
        vid_pics: [
            {
                id: 0,
                likes: [],
                arr_unique_like: [],
                count_like: 0,
                vid_pic: '',
                content_obj: {
                    content_more: '',
                    has_more_content: false,
                    content: '',
                },
                comments: [],
                count_comment: 0,
                histories: [],
                created_time: '2021-04-01T07:48:48.176630Z',
                updated_time: '2021-04-01T15:18:30.339347Z',
            },
        ],
        count_vid_pic: 0,
        likes: [],
        count_like: 0,
        user_type_like: -1,
        shares: [],
        count_share: 0,
        count_unique_share: 0,
        count_user_shared: 0,
        comments: [],
        count_comment: 0,
        histories: [],
        count_history: 0,
        permission_post: 0,
        created_time: '2021-04-01T07:48:48.176630Z',
        updated_time: '2021-04-01T15:18:30.339347Z',
    },
];
