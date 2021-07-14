import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
// 
import { product_name_arr } from './FashionDefault';

//
const base_product_obj = () => ({
    id: getRandomId(),
    vid_pics: [
        {
            vid_pic: getRandomVidPic(),
        },
    ],
    name: getRandomFromArr(product_name_arr),
    new_price: getRandomNumber(1000, 2000000),
    old_price: getRandomNumber(1000, 2000000),
    discount: 1,
    sold: 0,
});

export const base_product_arr = () => getDefaultArr(base_product_obj, 20, 30);
