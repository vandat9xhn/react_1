import { API_FashionCart_LC } from "../../../../../api/api_django/fashion/APIFashionToken";
// 
import makeFormData from "../../../../../_some_function/makeFormData";

// 
export async function handle_API_FashionCart_C({product_model, quantity}) {
    const res = await API_FashionCart_LC('POST', {}, makeFormData({
        product_model: product_model,
        quantity: quantity,
    }))
    
    return res
}