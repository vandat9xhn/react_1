import {
    API_CityHistory_L,
    API_City_L,
} from '../../../api/api_django_no_token/api01/API01NoToken';
import { params_history_city, params_city_l } from '../__params/CityParams';

//
export async function handle_API_City_L(search='', c_count = 0) {
    const res = await API_City_L({
        ...params_city_l,
        q: search,
        c_count: c_count,
    });

    return res.data
}

// history
export async function handle_API_CityHistory_L(city_id, c_count = 0) {
    const res = await API_CityHistory_L({
        ...params_history_city,
        city_model: city_id,
        c_count: c_count,
    });
    const { data, count } = res.data;

    return [data, count];
}
