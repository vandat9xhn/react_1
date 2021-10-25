//
export function handleCreateNewPost({ data, user }) {
    const {
        main_content,
        c_vid_pics,
        bg_arr,
        bg_ix,
        permission,

        user_tag_arr,
        emoji_obj,
    } = data;

    const { picture, first_name, last_name } = user;

    const new_vid_pics = c_vid_pics.map((item) => ({
        id: 6,
        content_obj: {
            content_more: '',
            has_more_content: false,
            content: item.content,
        },

        likes: [],
        arr_unique_like: [],
        count_like: 0,
        vid_pic: item.vid_pic,
        folder_picture: 'my folder picture',
        post_model: 11,
        comments: [],
        count_comment: 0,
        histories: [],
        created_time: new Date().toString(),
        updated_time: new Date().toString(),
    }));

    return {
        id: 11,
        user: {
            id: 1,
            picture: picture,
            first_name: first_name,
            last_name: last_name,
            is_online: true,
        },

        user_tag_arr: user_tag_arr.slice(0, 2),
        user_tag_count: user_tag_arr.length,
        emoji_obj: emoji_obj,

        content_obj: {
            content_more: '',
            has_more_content: false,
            content: main_content,
        },
        vid_pics: new_vid_pics,
        bg_obj: bg_ix >= 1 ? bg_arr[bg_ix] : null,

        count_vid_pic: 1,
        likes: [],
        count_like: 0,
        user_reacted_ix: -1,
        shares: [],
        count_share: 0,
        count_unique_share: 0,
        count_user_shared: 0,
        comments: [],
        count_comment: 0,
        histories: [],
        count_history: 0,
        created_time: new Date().toString(),
        permission_post: permission,
        updated_time: new Date().toString(),
        profile_model: 1,
    };
}
