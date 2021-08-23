import React from 'react';
//
import { handle_API_FashionCart_C } from '../../../../../_handle_api/fashion/FashionCartHandleAPi';
//
import { actionFashionChangeCountCartNum } from '../../../../../redux/action/action_count_cart';
//
import { openScreenNotice } from '../../../../../component/_screen_once/notice/ScreenNotice';
//
import FashionCartSuccess from '../add_cart_success/FashionCartSuccess';

//
export async function addToCart({
    id = 0,
    more_add_cart = 0,
    mounted = true,

    setStateObj = () => {},
    dispatch = () => {},

    openScreenOnce = () => {},
    closeScreenOnce = () => {},
}) {
    setStateObj((state_obj) => ({
        ...state_obj,
        wait_add_cart: true,
    }));

    await handle_API_FashionCart_C({
        product_model: id,
        quantity: more_add_cart,
    });

    if (!mounted) {
        return;
    }

    setStateObj((state_obj) => {
        const { item_info, model_ix } = state_obj;

        item_info.total_add_cart == 0 &&
            dispatch(actionFashionChangeCountCartNum(1));

        const new_models = [...item_info.models];

        if (model_ix >= 0) {
            new_models[model_ix].total_add_cart += more_add_cart;
        }

        return {
            ...state_obj,
            item_info: {
                ...item_info,
                total_add_cart: item_info.total_add_cart + more_add_cart,
                models: new_models,
            },
            wait_add_cart: false,
        };
    });

    openScreenNotice({
        openScreenOnce: openScreenOnce,
        ComponentNotice: <FashionCartSuccess />,
    });

    setTimeout(() => {
        closeScreenOnce();
    }, 500);
}
