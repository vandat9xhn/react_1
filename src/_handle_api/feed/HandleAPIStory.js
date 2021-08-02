import { IS_MOBILE } from '../../_constant/Constant';
//
import {
    API_FeedStoryItem_R,
    API_FeedStory_L,
} from '../../api/api_django/feed/APIStory';

//
export async function handle_API_FeedStory_L(
    c_count = 0,
    story_type = 'followed'
) {
    const res = await API_FeedStory_L({
        c_count: c_count,
        page: 1,
        size: IS_MOBILE ? 6 : 4,
        story_type: story_type,
    });

    return res.data;
}

//
export async function handle_API_FeedStory_R({
    is_next = true,
    id = 0,
    story_type = '',
}) {
    const res = await API_FeedStoryItem_R({
        id: id,
        is_next: is_next,
        story_type: story_type,
    });

    return res.data;
}
