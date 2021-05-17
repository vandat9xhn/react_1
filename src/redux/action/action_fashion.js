import { API_FashionAction_L, API_FashionAddCart_C } from "../../api/api_django/fashion/APIFashionToken";
import makeFormData from "../../_some_function/makeFormData";
import { reduxConstFashion } from "../_redux_const/ReduxConst";


/* ---------------------- CART ---------------------- */

// get
export const requestGetCart = () => async (dispatch) => {
    const res = await API_FashionAction_L({
        status: 'add_cart'
    });
    dispatch(actionGetCart(res.data));
};

const actionGetCart = (data) => ({
    type: 'GET_CART',
    payload: data,
});

// add_cart_already
export const requestAddCartAlready = (item, callback) => async (dispatch) => {
    const formData = makeFormData({
        product_model: item.id,
        quantity: item.total_add_cart,
    })
    await API_FashionAddCart_C(formData);
    // 
    dispatch(actionAddCart(item));
    callback()
};

const actionAddCart = (data) => ({
    type: reduxConstFashion.ADD_CART_ALREADY_PRODUCT,
    payload: data,
});

// delete
export const requestDeleteCart = (list) => async (dispatch) => {
    dispatch(actionDeleteCart(list));
    await deleteCart(list);
};
  
const actionDeleteCart = (list) => ({
    type: 'DELETE_CART',
    payload: list,
});
