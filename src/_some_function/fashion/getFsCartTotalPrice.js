//
export function getMoreCountCombo(group_obj) {
    return (
        group_obj.min_count -
        group_obj.item_info_arr.reduce(
            (a, item_info) => a + item_info.checked,
            0
        )
    );
}

//
export function getFsCartGroupTotalPrice(item_info_arr, is_new_price = true) {
    return item_info_arr.reduce(
        (a, item_info) =>
            a +
            item_info.checked *
                item_info.models[item_info.model_ix][
                    is_new_price ? 'new_price' : 'old_price'
                ] *
                item_info.models[item_info.model_ix].total_add_cart,
        0
    );
}

export function getFsFsCartShopTotalPrice(group_arr, is_new_price = true) {
    return group_arr.reduce(
        (a1, group_obj) =>
            a1 -
            (is_new_price &&
            group_obj.type == 'combo' &&
            getMoreCountCombo(group_obj) <= 0
                ? group_obj.discount
                : 0) +
            getFsCartGroupTotalPrice(group_obj.item_info_arr, is_new_price),
        0
    );
}

//
export function getFsCartTotalPrice(cart_shop_arr = []) {
    //
    return cart_shop_arr.reduce((a, cart_shop_obj) => {
        const shop_price = cart_shop_obj.shop_info.item_checked_count
            ? getFsFsCartShopTotalPrice(cart_shop_obj.group_arr)
            : 0;
        const { shop_info } = cart_shop_obj;

        return (
            a +
            shop_price -
            (shop_info.shop_discount_ix >= 0 &&
            shop_price >
                shop_info.discount_arr[shop_info.shop_discount_ix].min_spend
                ? shop_info.discount_arr[shop_info.shop_discount_ix]
                      .discount_value
                : 0)
        );
    }, 0);
}

//
export function getFsCartTotalOldPrice(cart_shop_arr = []) {
    //
    return cart_shop_arr.reduce((a, cart_shop_obj) => {
        return (
            a +
            (cart_shop_obj.shop_info.item_checked_count
                ? getFsFsCartShopTotalPrice(cart_shop_obj.group_arr, false)
                : 0)
        );
    }, 0);
}
