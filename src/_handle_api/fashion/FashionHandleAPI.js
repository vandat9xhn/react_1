import { params_fashion_search_l } from '../../_params/fashion/FashionParams';
//
import {
    API_FashionProduct_L,
    API_FashionProduct_R,
    API_FashionShop_R,
    API_FsProductDetail_L,
} from '../../api/api_django_no_token/fashion/APIFashionNoToken';

//
export async function handle_API_Product_L(
    c_count = 0,
    type_request = '',
    params = {}
) {
    const res = await API_FashionProduct_L({
        c_count: c_count,
        page: 1,
        size: 20,
        type_request: type_request,
        ...params,
    });

    return res.data;
}

//
export async function handle_API_FsSearch_L({ params = {} }) {
    return handle_API_Product_L(0, 'search', {
        ...params_fashion_search_l,
        ...params,
    });
}

//
export async function handle_API_FashionProduct_R(product_id) {
    const res = await API_FashionProduct_R(product_id);

    return res.data;
}

export async function handle_API_FsProductDetail_L({
    c_count = 0,
    type_request = '',
    params = {},
}) {
    const res = await API_FsProductDetail_L({
        c_count: c_count,
        page: 1,
        size: 20,
        type_request: type_request,
        ...params,
    });

    return res.data;
}

//
export async function handle_API_FashionShop_R(product_id) {
    const res = await API_FashionShop_R(product_id);

    return res.data;
}
