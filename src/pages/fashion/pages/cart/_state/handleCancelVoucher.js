//
export function handleCancelVoucher({ shop_ix, setStateObj }) {
    console.log(shop_ix);
    setStateObj((state_obj) => {
        const new_cart_shop_arr = [...state_obj.cart_shop_arr];
        new_cart_shop_arr[shop_ix].shop_info.shop_discount_ix = -1;

        return {
            ...state_obj,
            cart_shop_arr: new_cart_shop_arr,
        };
    });
}
