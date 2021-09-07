//
export function FsBuy_handleApplyVoucher({
    shop_ix = 0,
    new_voucher_ix = 0,

    setStateObj = () => {},
}) {
    setStateObj((state_obj) => {
        const new_buy_shop_arr = [...state_obj.buy_shop_arr];

        new_buy_shop_arr[shop_ix].shop_info.discount_ix = new_voucher_ix;

        return {
            ...state_obj,
            buy_shop_arr: new_buy_shop_arr,
        };
    });
}
