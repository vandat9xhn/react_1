import { API_ChatEmoji_L } from '../../api/api_django/chat/emoji';

//
export async function handle_API_ChatEmoji_L({ c_count = 0 }) {
    const res = await API_ChatEmoji_L({
        page: 1,
        size: 4,
        c_count: c_count,
    });

    return res.data;
}
