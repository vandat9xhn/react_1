import { API_FbNoticeAction_L } from '../../api/api_django/header/APIHeaderToken';

//
export async function handle_API_FbNoticeAction_L({ notice_id = 0 }) {
    const res = await API_FbNoticeAction_L({
        notice_model: notice_id,
    });

    return res.data;
}
