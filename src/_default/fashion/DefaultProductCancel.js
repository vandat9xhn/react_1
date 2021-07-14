import { getRandomId } from '../_common/default_id';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
// 
import { getProductVidPicArr, product_name_arr } from './FashionDefault';

//
export const default_product_cancel_obj = () => ({
    id: getRandomId(),
    product: {
        id: getRandomId(),
        vid_pics: getProductVidPicArr(1, 1),
        total_add_cart: 0,
        brand: 'Product brand 5',
        type: 'Product type 5',
        hashtag: 'Product hashtag 1',
        name: getRandomFromArr(product_name_arr),
        new_price: 460696,
        old_price: 460696,
        discount: 5,
        description:
            'Product description a dasd asd\nasd asd asd asd\nas ad ad asda sd\n asdada d',
        total: 62,
        sold: 0,
        created_time: '2021-04-13T21:25:14.131178Z',
        updated_time: '2021-04-23T02:27:05.287671Z',
        shop_model: 3,
        list_model: null,
    },
    quantity: 2,
    buy_shop_model: 1,
    product_model: 2,
});

export const default_product_cancel_arr = () =>
    getDefaultArr(default_product_cancel_obj, 2, 5);
