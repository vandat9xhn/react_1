import { getFsCartGroupTotalPrice } from './getFsCartTotalPrice';

//
export function getFsCartGiftChosenCount(cart_shop_arr) {
    //
    return cart_shop_arr.reduce((a, cart_shop_obj) => {
        return (
            a +
            cart_shop_obj.group_arr.reduce(
                (a1, group_obj) =>
                    a1 +
                    (group_obj.type == 'gift' &&
                    group_obj.min_spend <=
                        getFsCartGroupTotalPrice(group_obj.item_info_arr)
                        ? group_obj.gift_chosen_count
                        : 0),
                0
            )
        );
    }, 0);
}
