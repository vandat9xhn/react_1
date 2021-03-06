//
export function handleCheckedItem({
    type = '',
    cart_ix_obj = {
        shop_ix: 0,
        group_ix: 0,
        item_ix: 0,
    },

    setStateObj = () => {},

    handleAfterChecked = () => {},
}) {
    const { shop_ix, group_ix, item_ix } = cart_ix_obj;

    setStateObj((state_obj) => {
        const new_cart_shop_arr = state_obj.cart_shop_arr;
        const { shop_info: new_shop_info, group_arr: new_group_arr } =
            new_cart_shop_arr[shop_ix];
        const new_item_info_arr = new_group_arr[group_ix].item_info_arr;
        const new_item_info = new_item_info_arr[item_ix];

        const new_checked = !new_item_info.checked;
        const change_item_checked_count =
            (new_checked ? 1 : -1) * new_item_info_arr.length;

        if (type == 'hot_deal') {
            new_item_info_arr.forEach((item_info) => {
                item_info.checked = new_checked;
            });
        } else {
            new_item_info.checked = new_checked;
        }

        new_shop_info.item_checked_count += change_item_checked_count;

        handleAfterChecked();

        return {
            ...state_obj,
            cart_shop_arr: new_cart_shop_arr,
            item_checked_count:
                state_obj.item_checked_count + change_item_checked_count,
        };
    });
}
