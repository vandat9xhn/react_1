import { API_FullAddress_L } from "../../api/api_django_no_token/address/full_address";

//
export async function handle_API_FullAddress_L({ type, name }) {
    const res = await API_FullAddress_L({
        type: type,
        name: name,
    });

    return res.data;
}
