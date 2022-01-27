import { getRandomId } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
//
import img_event from '../../../image/preorder_iphone13.png';

//
const default_pl_home_banner_obj = () => {
    return {
        id: getRandomId(),
        vid_pic: getRandomImg(),
        link_to: '/phone-laptop',
        title_1: getRandomFromArr([
            'Đặt Trước Vivo X70Pro',
            'asda dasd as',
            '32 23 324 234',
            '2as asd3 adfas d',
        ]),
        title_2: getRandomFromArr([
            'Tặng ngay 3 triệu',
            'ada asd asd',
            'Giá từ 2 triệu',
        ]),
    };
};

export const default_pl_home_banner_arr = () =>
    getDefaultArr(default_pl_home_banner_obj, 10, 10);

//
const default_pl_home_hot_obj = () => {
    return {
        id: getRandomId(),
        img: getRandomImg(),
        link_to: '/phone-laptop',
    };
};

export const default_pl_home_hot_arr = () =>
    getDefaultArr(default_pl_home_hot_obj, 4, 4);

//
export const default_pl_home_banner_hot_obj = () => {
    return {
        banner_arr: default_pl_home_banner_arr(),
        hot_arr: default_pl_home_hot_arr(),
        img_event: img_event,
    };
};
