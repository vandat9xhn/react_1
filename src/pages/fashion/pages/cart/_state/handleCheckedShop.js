import { getFsCartTotalPrice } from '../../../../../_some_function/fashion/getFsCartTotalPrice';

//
export function handleCheckedShop({
    shop_ix = 0,

    setStateObj = () => {},
}) {
    setStateObj((state_obj) => {
        const new_cart_shop_arr = state_obj.cart_shop_arr;
        const { shop_info: new_shop_info, group_arr: new_group_arr } =
            new_cart_shop_arr[shop_ix];
        const { item_checked_count: old_item_checked_count, item_count } =
            new_shop_info;
        const new_checked = !(old_item_checked_count == item_count);

        new_shop_info.item_checked_count = new_checked ? item_count : 0;

        new_group_arr.forEach((group_obj) => {
            group_obj.item_info_arr.forEach((item_info) => {
                item_info.checked = new_checked;
            });
        });

        return {
            ...state_obj,
            cart_shop_arr: new_cart_shop_arr,
            item_checked_count:
                state_obj.item_checked_count +
                (new_checked
                    ? item_count - old_item_checked_count
                    : -old_item_checked_count),
            // total_price: getFsCartTotalPrice(new_cart_shop_arr),
        };
    });
}
