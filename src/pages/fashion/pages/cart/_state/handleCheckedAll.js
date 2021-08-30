import { getFsCartTotalPrice } from '../../../../../_some_function/fashion/getFsCartTotalPrice';

//
export function handleCheckedAll({ setStateObj = () => {} }) {
    setStateObj((state_obj) => {
        const new_cart_shop_arr = state_obj.cart_shop_arr;
        const new_all_checked = !(
            state_obj.item_checked_count == state_obj.item_count
        );

        new_cart_shop_arr.forEach((cart_shop_obj) => {
            cart_shop_obj.group_arr.forEach((group_obj) => {
                group_obj.item_info_arr.forEach((item_info) => {
                    item_info.checked = new_all_checked;
                });
            });

            cart_shop_obj.shop_info.item_checked_count = new_all_checked
                ? cart_shop_obj.shop_info.item_count
                : 0;
        });

        return {
            ...state_obj,
            cart_shop_arr: new_cart_shop_arr,
            item_checked_count: new_all_checked ? state_obj.item_count : 0,
            // total_price: getFsCartTotalPrice(new_cart_shop_arr),
        };
    });
}
