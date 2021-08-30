//
export function toggleOpenType({
    new_open_model_id = 0,

    setStateObj = () => {},
}) {
    setStateObj((state_obj) => {
        return {
            ...state_obj,
            open_search_id: -1,
            open_voucher_shop_id: -1,
            open_model_id:
                new_open_model_id == state_obj.open_model_id
                    ? -1
                    : new_open_model_id,
        };
    });
}
