//
export function handleStateDelGift({
    cart_ix_obj = {
        shop_ix: 0,
        group_ix: 0,
        item_ix: 0,
    },

    setStateObj = () => {},
    handle_API_Del = () => {},
}) {
    const { shop_ix, group_ix, item_ix } = cart_ix_obj;

    setStateObj((state_obj) => {
        const new_cart_shop_arr = [...state_obj.cart_shop_arr];
        const new_gift_obj = new_cart_shop_arr[shop_ix].group_arr[group_ix];

        const item_info_del = new_gift_obj.gift_items[item_ix];

        new_gift_obj.gift_items.splice(item_ix, 1);
        new_gift_obj.gift_chosen_count -= 1;

        handle_API_Del({
            product_model: item_info_del.id,
            model_id: item_info_del.models[item_info_del.model_ix].id,
        });

        return {
            ...state_obj,
            cart_shop_arr: new_cart_shop_arr,
            item_gift_count: state_obj.item_gift_count - 1,
        };
    });
}
