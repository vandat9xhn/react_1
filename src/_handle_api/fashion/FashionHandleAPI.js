import { params_fashion_search_l } from '../../_params/fashion/FashionParams';
// 
import { API_FashionProduct_L } from '../../api/api_django_no_token/fashion/APIFashionNoToken';


// 
export async function handle_API_Product_L(c_count, type_request) {
    const res = await API_FashionProduct_L({
        c_count: c_count,
        page: 1,
        size: 20,
        type_request: type_request,
    });

    return res.data;
}

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
