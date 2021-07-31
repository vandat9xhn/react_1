const { API_FeedStory_L } = require('../../api/api_django/feed/APIStory');

//
export async function handle_API_FeedStory(c_count) {
    const res = await API_FeedStory_L({ c_count: c_count, page: 1, size: 10 });

    return res.data;
}
