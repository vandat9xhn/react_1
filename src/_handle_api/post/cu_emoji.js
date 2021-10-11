import {
    API_FbEmojiType_L,
    API_FbEmoji_L,
} from '../../api/api_django/cu_post/emoji';

//
export async function handle_API_FbEmojiType_L({ c_count = 0, params = {} }) {
    const res = await API_FbEmojiType_L({
        params: {
            c_count: c_count,
            page: 1,
            size: 20,
            ...params,
        },
    });
    return res.data;
}

//
export async function handle_API_FbEmoji_L({ c_count = 0, params = {} }) {
    const res = await API_FbEmoji_L({
        params: {
            c_count: c_count,
            page: 1,
            size: 20,
            ...params,
        },
    });

    return res.data;
}
