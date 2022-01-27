import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
export const default_phone_obj = (id = 0) => {
    const new_price = getRandomNumber(10, 300);

    const rating_count = getRandomBool() ? getRandomNumber(10, 200) : 0;
    const rating_avg = rating_count ? getRandomNumber(20, 50) / 10 : 0;

    return {
        id: id || getRandomId(),
        name: 'Samsung Galaxy Z Fold3 5G 256GB',

        cpu: '500',
        os: 'Android',
        ram: '4G',
        internal_memory: '32G',
        camera: 'Full HD',
        memory_stick: '120G',
        product_type: getRandomFromArr(['phone', 'laptop']),

        new_price: new_price * 100000,
        old_price: getRandomNumber(new_price, new_price + 20) * 100000,
        discount: getRandomNumber(0, 30),
        installment: 0,

        is_coming: getRandomBool(),
        in_stock: getRandomBool(),

        type_arr: [
            { img: getRandomImg(), title: '4GB' },
            { img: getRandomImg(), title: '8G' },
            { img: getRandomImg(), title: '32G' },
        ].slice(0, getRandomNumber(1, 3)),

        rating_avg: rating_avg,
        rating_count: rating_count,

        gift_str: getRandomBool() ? '400.000₫' : '',
        cheap_price: getRandomBool()
            ? getRandomNumber(new_price - 5, new_price - 1) * 100000
            : 0,
    };
};

//
export const default_phone_arr = () => getDefaultArr(default_phone_obj, 20, 20);
