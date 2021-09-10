import { API_FashionBuy_LC } from '../../api/api_django/fashion/APIFashionToken';

//
export async function handle_API_FsBuy_C(data = {}) {
    const res = await API_FashionBuy_LC({
        method: 'POST',
        data: data,
    });

    return res.data;
}
