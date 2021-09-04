//
export function handleStateDelItem({
    type = '',
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
        let new_item_checked_count = state_obj.item_checked_count;
        const new_group_arr = new_cart_shop_arr[shop_ix].group_arr;
        const new_item_info_arr = new_group_arr[group_ix].item_info_arr;

        const item_info_del = new_item_info_arr[item_ix];
        let item_del_count = 1;

        if (type == 'hot_deal' && item_ix == 0) {
            item_del_count = new_group_arr.length;
            new_group_arr.splice(group_ix, 1);
        } else {
            new_item_info_arr.length > 1
                ? new_item_info_arr.splice(item_ix, 1)
                : new_group_arr.splice(group_ix, 1);
        }

        new_cart_shop_arr[shop_ix].shop_info.item_count -= item_del_count;

        if (item_info_del.checked) {
            new_cart_shop_arr[shop_ix].shop_info.item_checked_count -=
                item_del_count;
            new_item_checked_count -= item_del_count;
        }

        new_group_arr.length == 0 && new_cart_shop_arr.splice(shop_ix, 1);

        handle_API_Del({
            product_model: item_info_del.id,
            model_id: item_info_del.models[item_info_del.model_ix].id,
        });

        return {
            ...state_obj,
            cart_shop_arr: new_cart_shop_arr,
            item_count: state_obj.item_count - 1,
            item_checked_count: new_item_checked_count,
            // total_price: item_info_del.checked
            //     ? getFsCartTotalPrice(new_cart_shop_arr)
            //     : state_obj.total_price,
        };
    });
}
