import { getRandomBool } from '../_common/default_bool';
import { getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
//
import { product_name_arr } from './FashionDefault';
//
import flash_img_large from '../../../image/flash_img_large.png';

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

    // 
    return {
        id: getRandomNumber(),
        name: getRandomFromArr(product_name_arr),
        img: getRandomImg(),
        flash_img: getRandomBool() ? flash_img_large : null,
        total: total,
        sold: getRandomBool() ? getRandomNumber(0, total) : 0,
        rate_avg: getRandomNumber(0, 50) / 10,
        is_like: getRandomBool(),
        is_plus: getRandomBool(),
        is_mall: getRandomBool(),

        shop_deals: ['ShopDacBiet', 'Mua 3 & giảm 3%'].slice(
            0,
            getRandomBool() ? 2 : 1
        ),
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
