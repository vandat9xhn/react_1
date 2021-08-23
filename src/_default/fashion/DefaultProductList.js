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
    const new_price_max = getRandomNumber(new_price, new_price + 200);
    const old_price = getRandomNumber(40, new_price);
    const old_price_max = getRandomNumber(old_price, old_price + 200);

    return {
        id: getRandomId(),
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

        new_price: new_price,
        old_price: old_price,
        new_price_max: new_price_max,
        old_price_max: old_price_max,

        discount: getRandomBool()
            ? getRandomBool()
                ? getRandomNumber(1, 50) + '%'
                : 'K'
            : null,
    };
};

export const base_product_arr = () => getDefaultArr(base_product_obj, 20, 30);
