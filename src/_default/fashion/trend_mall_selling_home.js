import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const default_keyword_arr = [
    'Áo-Thun Nam',
    'Kẹp-Tóc Hàn-Quốc',
    'Áo-Khoác Nam',
    'Quần-Đùi Nữ',
    'SƠMI Nữ',
    'Dép Nữ',
    'Quần-Đùi Nam',
    'Áo-Khoác Nữ',
    'Khẩu-Trang 3d',
    'Sữa-Rửa-Mặt COSRX',
    'Son Nội-Địa-Trung',
    'Tai-Nghe Bluetooth',
    'Sandal Nữ',
    'Giày-Thể-Thao Nữ',
    'Balo Nữ',
    'Áo-Phông Nữ',
    'Quần-Jean Nữ',
    'Quần-Short Nữ',
    'Áo-Thun Nam',
    'Váy Trắng',
    'Kẹp-Tóc Hàn-Quốc',
    'Áo-Khoác Nam',
    'Quần-Đùi Nữ',
    'SƠMI Nữ',
    'Dép Nam',
    'Tai-Nghe Bluetooth',
    'Sandal Nữ',
    'Giày-Thể-Thao Nữ',
    'Balo Nữ',
    'Croptop Nữ',
];

const default_home_fashion_trending_obj = () => {
    return {
        count: getRandomNumber(100, 300) * 1000,
        data_type: 'keyword',
        image: getRandomImg(),
        keyword: getRandomFromArr(default_keyword_arr),
    };
};

export const default_home_fashion_trending_arr = () =>
    getDefaultArr(default_home_fashion_trending_obj, 5, 5);

//
const default_home_shop_mall_obj = () => {
    return {
        image: getRandomImg(),
        promo_text: 'Mua 1 tặng 1',
        shop_id: getRandomId(),
    };
};

export const default_home_shop_mall_arr = () =>
    getDefaultArr(default_home_shop_mall_obj, 15, 20);

// 
const default_home_shop_mall_vid_pic_obj = () => {
    return {
        shop_id: getRandomId(),
        vid_pic: getRandomImg()
    }
}

export const default_home_shop_mall_vid_pic_arr = () =>
    getDefaultArr(default_home_shop_mall_vid_pic_obj, 2, 5);

//
const default_home_top_search_obj = () => {
    return {
        image: getRandomImg(),
        sold_month: getRandomNumber(100, 300) * 100,
        type: 'Type of product',
    };
};

export const default_home_top_search_arr = () =>
    getDefaultArr(default_home_top_search_obj, 15, 20);
