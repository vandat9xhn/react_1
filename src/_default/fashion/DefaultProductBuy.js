import { getRandomId } from '../_common/default_id';
import { getDefaultArr } from '../_common/getDefaultArr';
//
import { getProductVidPicArr } from './FashionDefault';

//
const product_obj = () => ({
    id: getRandomId(),
    product: {
        id: getRandomId(),
        vid_pics: getProductVidPicArr(1, 1),
        total_add_cart: 0,
        brand: 'Product brand 5',
        type: 'Product type 5',
        hashtag: 'Product hashtag 1',
        name: 'Product name 1',
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

const product_arr = () => getDefaultArr(product_obj, 1, 5)

export const default_fashion_buy_obj = () => ({
    id: getRandomId(),
    products: product_arr(),
    shop: {
        id: getRandomId(),
        picture: '',
        name: 'Shop 1',
        address: 'Product address 2',
        info: 'Product info 2',
    },
    payment: 'COD',
    status: 'BUYING',
    created_time: '2021-04-23T09:31:11.551079Z',
    updated_time: '2021-04-23T09:31:11.551079Z',
    profile_model: 1,
    shop_model: 3,
    transport_price_model: 1,
    voucher_model: 1,
});

export const default_fashion_buy_arr = () =>
    getDefaultArr(default_fashion_buy_obj, 2, 6);
