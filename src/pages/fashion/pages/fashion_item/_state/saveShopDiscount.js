//
export async function saveShopDiscount({ ix = -1, setStateObj = () => {} }) {
    setStateObj((state_obj) => {
        const new_shop_info = { ...state_obj.shop_info };
        new_shop_info.discount_arr[ix].status_card = 'saved';

        return {
            ...state_obj,
            shop_info: new_shop_info,
        };
    });
}
