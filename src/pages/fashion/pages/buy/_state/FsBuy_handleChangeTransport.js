//
export function FsBuy_handleChangeTransport({
    shop_ix = 0,
    new_trans_ix = 0,
    new_time_ix = 0,

    setStateObj = () => {},
}) {
    setStateObj((state_obj) => {
        const new_buy_shop_arr = [...state_obj.buy_shop_arr];
        
        new_buy_shop_arr[shop_ix].trans_ix = new_trans_ix;
        new_buy_shop_arr[shop_ix].delivery_time_ix = new_time_ix;

        return {
            ...state_obj,
            buy_shop_arr: new_buy_shop_arr,
        };
    });
}
