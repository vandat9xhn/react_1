import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
//
import { product_name_arr } from './FashionDefault';

//
const base_product_obj = () => {
    const total = getRandomNumber(2, 200);

    const new_price = getRandomNumber(50, 600);
    const old_price = getRandomNumber(new_price + 5, new_price + 50);
    const new_price_max = getRandomNumber(new_price + 100, new_price + 300);
    const old_price_max = getRandomNumber(
        new_price_max + 5,
        new_price_max + 50
    );

    return {
        id: getRandomNumber(),
        name: getRandomFromArr(product_name_arr),
        img: getRandomVidPic(),
        flash_img: null,
        total: total,
        sold: getRandomBool() ? getRandomNumber(0, total) : 0,
        rate_avg: getRandomNumber(0, 50) / 10,
        mall_like: getRandomNumber(0, 2)[('', 'mall', 'like')],

        shop_deals: [],
        shop_discount: '10%',
        address: 'Hà Nội',

        new_price: new_price * 1000,
        old_price: old_price * 1000,
        new_price_max: new_price_max * 1000,
        old_price_max: old_price_max * 1000,

        discount: getRandomBool()
            ? getRandomNumber(1, 50) + (getRandomBool() ? '%' : 'K')
            : '',
    };
};

export const base_product_arr = () => getDefaultArr(base_product_obj, 20, 30);
