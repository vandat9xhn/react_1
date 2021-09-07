import { API_FsBankCard_L } from "../../api/api_django/fashion/bank";

//
export async function handle_API_FsBankCard_L({ c_count = 0, params = {} }) {
    const res = await API_FsBankCard_L({
        params: {
            page: 1,
            size: 5,
            c_count: c_count,
            ...params,
        },
    });

    return res.data;
}
