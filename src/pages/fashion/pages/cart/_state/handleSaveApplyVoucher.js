import { getFsCartShopTotalPrice } from '../../../../../_some_function/fashion/getFsCartTotalPrice';

//
export function handleSaveApplyVoucher({
    shop_ix = 0,
    new_shop_discount_ix = 0,
    setStateObj = () => {},
}) {
    setStateObj((state_obj) => {
        const new_cart_shop_arr = [...state_obj.cart_shop_arr];
        const new_shop_info = new_cart_shop_arr[shop_ix].shop_info;
        const { status_card, min_spend } =
            new_shop_info.discount_arr[new_shop_discount_ix];

        if (status_card == 'available') {
            new_shop_info.discount_arr[new_shop_discount_ix].status_card =
                'saved';
        } else {
            const shop_total_price = getFsCartShopTotalPrice(
                new_cart_shop_arr[shop_ix].group_arr
            );

            if (shop_total_price >= min_spend) {
                new_shop_info.shop_discount_ix = new_shop_discount_ix;
            }
        }

        return {
            ...state_obj,
            cart_shop_arr: new_cart_shop_arr,
        };
    });
}
