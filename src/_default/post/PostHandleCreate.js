import { default_login } from '../login/DefaultLogin';

//
export function handleCreateNewPost(content_post, vid_pics) {
    const { picture, first_name, last_name } = default_login;

    const new_vid_pics = vid_pics.map((item) => ({
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
        content_obj: {
            content_more: '',
            has_more_content: false,
            content: content_post,
        },
        vid_pics: new_vid_pics,
        count_vid_pic: 1,
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
        created_time: new Date().toString(),
        permission_post: 0,
        updated_time: new Date().toString(),
        profile_model: 1,
    };
}
