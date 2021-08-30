import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
import { default_product_obj } from './DefaultProductItem';
import { default_shop_obj } from './DefaultShop';
//
import { getProductVidPicArr, product_name_arr } from './FashionDefault';

/*
    cart_model: id, shop_id => id, cart_id, item_id, checked, model_id, type_deal, total_add_cart

    type_deal in [combo, gift, hot_deal, null]
*/

//
const default_product_cart_buy_obj = () => ({
    id: getRandomId(),
    product: {
        id: getRandomId(),
        vid_pics: getProductVidPicArr(1, 1),
        total_add_cart: 1,
        brand: 'Product brand 5',
        type: 'Product type 5',
        hashtag: 'Product hashtag 4',
        name: getRandomFromArr(product_name_arr),
        new_price: getRandomNumber(1000, 2000000),
        old_price: getRandomNumber(1000, 2000000),
        discount: 5,
        description:
            'Product description a dasd asd\nasd asd asd asd\nas ad ad asda sd\n asdada d',
        total: 91,
        created_time: '2021-04-13T21:25:14.131178Z',
        updated_time: '2021-04-13T21:25:14.131178Z',
        shop_model: 6,
        list_model: null,
    },
    quantity: getRandomNumber(1, 20),
    checked: getRandomBool(),
    created_time: '2021-04-21T09:20:46.510170Z',
    updated_time: '2021-04-21T09:20:46.510170Z',
    cart_model: 20,
    product_model: 5,
});

const default_product_cart_buy_arr = () =>
    getDefaultArr(default_product_obj(), 10, 15);

//
export const default_fashion_cart_buy_obj = () => ({
    id: getRandomId(),
    shop_info: default_shop_obj(),
    item_info_arr: default_product_cart_buy_arr(),
    count_product: 1,
    count_checked_product: 2,
    shop_model: 6,
    profile_model: 1,
});

// export const default_fashion_cart_buy_arr = () =>
//     getDefaultArr(default_fashion_cart_buy_obj, 1, 4);
export const default_fashion_cart_buy_arr = () => [];
