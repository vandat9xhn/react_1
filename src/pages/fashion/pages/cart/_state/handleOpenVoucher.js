//
export function handleOpenVoucher({ shop_id, setStateObj }) {
    setStateObj((state_obj) => ({
        ...state_obj,
        open_search_id: -1,
        open_model_id: -1,
        open_voucher_shop_id:
            state_obj.open_voucher_shop_id == shop_id ? -1 : shop_id,
    }));
}
