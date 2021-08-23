import { API_FashionRate_C } from '../../api/api_django/fashion/APIFashionToken';
import {
    API_FashionRate_L,
    API_FashionUserContentRate_R,
} from '../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import makeFormData from '../../_some_function/makeFormData';
//
import { params_fashion_rate_l } from '../../_params/fashion/FashionRateParams';

// rate
export async function handle_API_FashionRate_L({
    product_model = -1,
    c_count = 0,
    params = {},
}) {
    const res = await API_FashionRate_L({
        ...params_fashion_rate_l,
        product_model: product_model,
        c_count: c_count,
        ...params,
    });

    return res.data;
}

export async function handle_API_FashionRate_C({ content, rate }) {
    const res = await API_FashionRate_C(
        makeFormData({
            content: content,
            rate: rate,
        })
    );

    return res.data;
}

export async function handle_API_FashionContentRateMore_R({ rate_model }) {
    const res = await API_FashionUserContentRate_R({
        rate_model: rate_model,
    });

    return res.data.content_obj.content_more;
}
