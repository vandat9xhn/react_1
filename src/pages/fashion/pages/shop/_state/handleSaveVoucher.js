import { FsShop_initial_state_obj } from "./handleDataState";

//
export function FsShop_handleSaveVoucher({
    voucher_ix = 0,
    setStateObj = () => {},
}) {
    setStateObj((state_obj = FsShop_initial_state_obj()) => {
        const new_shop_info = { ...state_obj.shop_info };
        new_shop_info.discount_arr[voucher_ix].status_card = 'saved'

        return {
            ...state_obj,
            shop_info: new_shop_info,
        };
    });
}
