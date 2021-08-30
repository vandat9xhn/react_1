import { getFsCartTotalPrice } from '../../../../../_some_function/fashion/getFsCartTotalPrice';

//
export function handleSetStateItem({
    // type = '',
    cart_ix_obj = {
        shop_ix: 0,
        group_ix: 0,
        item_ix: 0,
    },
    new_item_info = {},

    setStateObj = () => {},
    handle_API = () => {},
}) {
    const { shop_ix, group_ix, item_ix } = cart_ix_obj;

    setStateObj((state_obj) => {
        const new_cart_shop_arr = state_obj.cart_shop_arr;

        new_cart_shop_arr[shop_ix].group_arr[group_ix].item_info_arr[item_ix] =
            new_item_info;

        return {
            ...state_obj,
            cart_shop_arr: new_cart_shop_arr,
            // total_price: getFsCartTotalPrice(new_cart_shop_arr),
            open_model_id: -1,
        };
    });

    const { id: model_id, total_add_cart } =
        new_item_info.models[new_item_info.model_ix];

    handle_API({
        product_model: new_item_info.id,
        model_id: model_id,
        total_add_cart: total_add_cart,
        checked: new_item_info.checked,
    });
}
