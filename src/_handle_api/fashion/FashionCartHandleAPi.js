import makeFormData from '../../_some_function/makeFormData';
//
import {
    API_FashionCart_LC,
    API_FashionCart_UD,
} from '../../api/api_django/fashion/APIFashionToken';

//
export async function handle_API_FashionCart_L() {
    const res = await API_FashionCart_LC('GET', {});

    return res;
}

//
export async function handle_API_FashionCart_C({
    product_model = 0,
    model_id = 0,
    quantity = 0,
}) {
    const res = await API_FashionCart_LC(
        'POST',
        {},
        makeFormData({
            product_model: product_model,
            model_model: model_id,
            quantity: quantity,
        })
    );

    return res;
}

//
export async function handle_API_FashionCart_D({
    product_model = 0,
    model_id = 0,
}) {
    const res = await API_FashionCart_UD(
        'DELETE',
        makeFormData({
            product_model: product_model,
            model_model: model_id,
        })
    );

    return res;
}
