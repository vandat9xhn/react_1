import { handle_API_FashionProduct_R } from '../../../../../_handle_api/fashion/FashionHandleAPI';

//
export async function getItemInfo({
    product_id,
    mounted = true,

    setStateObj = () => {},
}) {
    setStateObj((state_obj) => {
        return {
            ...state_obj,
            fetched_item: false,
        };
    });

    const data = await handle_API_FashionProduct_R(product_id);

    if (!mounted) {
        return;
    }

    setStateObj((state_obj) => {
        document.title = data.name

        return {
            ...state_obj,
            item_info: data,
            fetched_item: true,

            tier_ix_arr: Array(data.tier_variations.length).fill(-1),

            c_quantity: data.quantity,
            c_total_add_cart: data.total_add_cart,
        };
    });
}
