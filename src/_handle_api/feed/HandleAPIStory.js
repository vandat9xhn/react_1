import { IS_MOBILE } from '../../_constant/Constant';
//
import {
    API_FeedStoryItemViewer,
    API_FeedStoryItemViewer_L,
    API_FeedStoryItem_R,
    API_FeedStory_L,
} from '../../api/api_django/feed/APIStory';
import { changeDataStory } from '../../_some_function/story/changeDataStory';

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

    const { data } = res.data;
    changeDataStory(data);

    return { ...res.data, data: data };
}

//
export async function handle_API_FeedStoryItemViewer_L({
    story_id = 0,
    c_count = 0,
}) {
    const res = await API_FeedStoryItemViewer_L({
        story_model: story_id,
        c_count: c_count,
        page: 1,
        size: 10,
    });

    return res.data;
}

//
export async function handle_API_FeedStory_R({
    is_next = true,
    story_id = 0,
    story_type = '',
}) {
    const res = await API_FeedStoryItem_R({
        story_model: story_id,
        is_next: is_next,
        story_type: story_type,
    });

    return res.data;
}
