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

        return {
            ...state_obj,
            tier_ix_arr: new_tier_ix_arr,
            model_ix: item_info.models.findIndex(
                (item) =>
                    item.tier_ix_arr.join(',') == new_tier_ix_arr.join(',')
            ),
        };
    });
}
