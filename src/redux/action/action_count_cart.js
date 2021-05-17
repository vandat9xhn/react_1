import { API_FashionCountCart } from "../../api/api_django/fashion/APIFashionToken"


//
export const requestFashionGetCountCart = () => async (dispatch) => {
    const res = await API_FashionCountCart()
    dispatch(actionFashionChangeCountCart(res.data))
}

export const actionFashionChangeCountCart = (count_cart) => ({
    payload: count_cart,
    type: 'COUNT_CART',
})

export const actionFashionChangeCountCartNum = (count_change) => ({
    payload: count_change,
    type: 'COUNT_CART_CHANGE',
})
