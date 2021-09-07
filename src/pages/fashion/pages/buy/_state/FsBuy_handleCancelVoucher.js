//
export function FsBuy_handleCancelVoucher({
    shop_ix = 0,

    setStateObj = () => {},
}) {
    setStateObj((state_obj) => {
        const new_buy_shop_arr = [...state_obj.buy_shop_arr];
        
        new_buy_shop_arr[shop_ix].shop_info.discount_ix = -1;

        return {
            ...state_obj,
            buy_shop_arr: new_buy_shop_arr,
        };
    });
}
