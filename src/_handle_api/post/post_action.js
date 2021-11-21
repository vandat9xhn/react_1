import { API_PostAction_L } from "../../api/api_django/user/user_post/post_action";

//
export async function handle_API_PostAction_L({ params = {} }) {
    const res = await API_PostAction_L({
        params: {
            ...params,
        },
    });

    return res.data;
}
