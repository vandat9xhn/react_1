import { API_ChatColour_L } from '../../api/api_django/chat/colour';

//
export async function handle_API_ChatColour_L() {
    const res = await API_ChatColour_L({});

    return res.data;
}
