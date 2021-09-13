//
export function handleChooseOption({
    new_ix = 0,
    new_type_ix = 0,
    setStateObj = () => {},
}) {
    setStateObj((state_obj) => {
        const { item_info, tier_ix_arr } = state_obj;
        const new_tier_ix_arr = [...tier_ix_arr];

        if (new_tier_ix_arr[new_ix] == new_type_ix) {
            new_tier_ix_arr[new_ix] = -1;
        } else {
            new_tier_ix_arr[new_ix] = new_type_ix;
        }

        const new_model_ix = item_info.models.findIndex(
            (item) => item.tier_ix_arr.join(',') == new_tier_ix_arr.join(',')
        );

        const { total_add_cart, quantity } =
            new_model_ix == -1 ? item_info : item_info.models[new_model_ix];

        const new_count = quantity - total_add_cart > 0 ? 1 : 0;

        return {
            ...state_obj,
            tier_ix_arr: new_tier_ix_arr,
            model_ix: new_model_ix,
            count: new_count,
            error_add_cart: '',
        };
    });
}
