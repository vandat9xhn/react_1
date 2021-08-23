import { handle_API_FashionShop_R } from '../../../../../_handle_api/fashion/FashionHandleAPI';

//
export async function getShopInfo({
    product_id,
    mounted = true,

    setStateObj = () => {},
}) {
    setStateObj((state_obj) => {
        return {
            ...state_obj,
            fetched_shop: false,
        };
    });

    const data = await handle_API_FashionShop_R(product_id);

    if (!mounted) {
        return;
    }

    setStateObj((state_obj) => {
        return {
            ...state_obj,
            fetched_shop: true,
            shop_info: data,
        };
    });
}
