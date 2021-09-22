import { API_PhoneLaptop_L } from '../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';

//
export async function handle_API_PhoneLaptop_L({ c_count = 0, params = {} }) {
    const res = await API_PhoneLaptop_L({
        c_count: c_count,
        page: 1,
        size: 20,
        ...params,
    });

    return res.data;
}
