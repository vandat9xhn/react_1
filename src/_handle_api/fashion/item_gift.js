import { API_FsItemGift_R } from "../../api/api_django_no_token/fashion/item_gift";

//
export async function handle_API_FsItemGift_R({ product_id }) {
    const res = await API_FsItemGift_R(product_id);

    return res.data;
}
