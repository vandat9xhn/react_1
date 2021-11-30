import { API_FbGroupTopic_L } from '../../api/api_django/fb_group/topics';

//
export async function handle_API_FbGroupTopic_L({ c_count = 0, params = {} }) {
    const res = await API_FbGroupTopic_L({
        page: 1,
        size: 20,
        c_count: c_count,
        ...params,
    });

    //
    const new_data = res.data.data;

    if (params['size'] == 3) {
        new_data.forEach((item, ix) => {
            if (ix == 0) {
                item.pinned = true;
            } else {
                item.pinned = false;
            }
        });
    }

    // 
    return {
        ...res.data,
        data: new_data,
    };
}
