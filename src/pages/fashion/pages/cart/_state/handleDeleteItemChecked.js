//
export function handleDeleteItemChecked({ setStateObj = () => {} }) {
    setStateObj((state_obj) => {
        const new_cart_shop_arr = state_obj.cart_shop_arr.filter(
            (cart_shop_obj) =>
                cart_shop_obj.shop_info.item_checked_count !=
                cart_shop_obj.shop_info.item_count
        );

        for (const cart_shop_obj of new_cart_shop_arr) {
            cart_shop_obj.shop_info.item_count -=
                cart_shop_obj.shop_info.item_checked_count;
            cart_shop_obj.shop_info.item_checked_count = 0;

            for (const group_obj of cart_shop_obj.group_arr) {
                group_obj.item_info_arr = group_obj.item_info_arr.filter(
                    (item_info) => !item_info.checked
                );
            }

            cart_shop_obj.group_arr = cart_shop_obj.group_arr.filter(
                (group_obj) => group_obj.item_info_arr.length > 0
            );
        }

        return {
            ...state_obj,
            cart_shop_arr: new_cart_shop_arr,
            item_checked_count: 0,
            item_count: state_obj.item_count - state_obj.item_checked_count,
        };
    });
}
