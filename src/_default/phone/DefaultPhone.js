import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

//
export const default_phone_obj = () => {
    const new_price = getRandomNumber(10, 300);
    return {
        id: getRandomId(),
        url: getRandomVidPic(),
        in_stock: 'in stock',
        discount: getRandomNumber(0, 30),
        installment: 0,
        gift: 'asd asd\nad asd\nasd asd sad',
        product_sets:
            'asd asd asd\nasdsadas\nasd asdsadas asd sad\nasd asd asda',
        cpu: '500',
        os: 'Android',
        ram: '3G',
        internal_memory: '32G',
        camera: 'Full HD',
        memory_stick: '120G',
        type_product: 'phone',
        name: 'Abc Xyz',
        new_price: new_price * 100000,
        old_price: getRandomNumber(new_price, new_price + 20) * 100000,
        types: [
            { url: getRandomVidPic(), title: 'Black' },
            { url: getRandomVidPic(), title: 'Blue' },
            { url: getRandomVidPic(), title: 'White' },
        ],
        promotion:
            'ad asd ad asd as asd asd \nad ada d asda dsa dasd \nasd asd asd as asd asd asd asd',
    };
};

//
export const default_phone_arr = () => getDefaultArr(default_phone_obj, 20, 20);
