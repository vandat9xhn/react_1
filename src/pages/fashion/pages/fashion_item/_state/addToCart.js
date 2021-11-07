import React from 'react';
//
import { handle_API_FashionCart_C } from '../../../../../_handle_api/fashion/FashionCartHandleAPI';
//
import { openScreenNotice } from '../../../../../component/_screen_once/notice/ScreenNotice';
// 
import { FsCountUpCartReducer } from '../../../../../redux/slice/FsCountCartSlice';
//
import FashionCartSuccess from '../add_cart_success/FashionCartSuccess';

//
export async function addToCart({
    id = 0,
    count = 0,
    new_count = 1,
    mounted = true,
    use_notice = true,

    setStateObj = () => {},
    dispatch = () => {},

    openScreenOnce = () => {},
    closeScreenOnce = () => {},
}) {
    let total_add_cart = 0;

    setStateObj((state_obj) => {
        total_add_cart = state_obj.item_info.total_add_cart;

        return {
            ...state_obj,
            wait_add_cart: true,
        };
    });

    await handle_API_FashionCart_C({
        product_model: id,
        quantity: count,
    });

    if (!mounted) {
        return;
    }

    if (total_add_cart == 0) {
        dispatch(FsCountUpCartReducer(1));
    }

    setStateObj((state_obj) => {
        const { item_info, model_ix } = state_obj;
        const new_models = [...item_info.models];

        if (model_ix >= 0) {
            new_models[model_ix].total_add_cart += count;
        }

        return {
            ...state_obj,
            item_info: {
                ...item_info,
                total_add_cart: item_info.total_add_cart + count,
                models: new_models,
            },
            wait_add_cart: false,
            count: new_count,
        };
    });

    if (use_notice) {
        openScreenNotice({
            openScreenOnce: openScreenOnce,
            ComponentNotice: <FashionCartSuccess />,
        });

        setTimeout(() => {
            closeScreenOnce();
        }, 500);
    }
}
