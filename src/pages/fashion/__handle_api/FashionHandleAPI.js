import { API_FashionProduct_L } from '../../../api/api_django_no_token/fashion/APIFashionNoToken';
// 
import { params_fashion_search_l } from '../_params/FashionParams';

//
export async function handle_API_FashionProduct_L(
    new_page = 1,
    value_search = '',
    areas = [],
    rate = 1,
    sort_by = ''
) {
    const res = await API_FashionProduct_L({
        ...params_fashion_search_l,
        page: new_page,
        search: value_search,
        'areas[]': areas,
        rate: rate,
        sort_by: sort_by,
    });

    return res.data;
}
