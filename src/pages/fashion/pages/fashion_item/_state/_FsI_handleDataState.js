import {
    initial_fashion_item_obj,
    initial_fashion_shop,
} from '../../../../../_initial/fashion/FashionInitial';

//
export const FsI_initial_state_obj = () => {
    return {
        item_info: initial_fashion_item_obj(),
        shop_info: initial_fashion_shop(),

        fetched_item: false,
        fetched_shop: false,

        tier_ix_arr: [-1],
        model_ix: -1,
        count: 1,

        vid_pic_ix: 0,
        wait_add_cart: false,
        error_add_cart: '',
    };
};
