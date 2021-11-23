import { API_Zoom_L } from '../../api/api_django/chat/APIChat';

//
export async function handle_API_Zoom_L({ c_count = 0, params = {} }) {
    const res = await API_Zoom_L({
        page: 1,
        size: 10,
        c_count: c_count,
        ...params,
    });

    return res.data;
}
