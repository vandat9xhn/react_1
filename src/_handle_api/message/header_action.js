import { API_FbHeaderMessAction_L } from '../../api/api_django/header/APIHeaderToken';

//
export async function handle_API_FbHeaderMessAction_L({ room_id = 0 }) {
    const res = await API_FbHeaderMessAction_L({
        room_model: room_id,
    });

    return res.data;
}
