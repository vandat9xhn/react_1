import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
//
import { owner_info } from './FashionDefault';

//
const shop_category_name_arr = [
    { name: 'mom', title: 'Mom' },
    { name: 'baby', title: 'Baby' },
    { name: 'other', title: 'Other' },
];

const shop_category_arr = () => shop_category_name_arr;

//
const shop_vid_pic_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    shop_model: 2,
});

const shop_vid_pic_arr = () => getDefaultArr(shop_vid_pic_obj, 4, 10);

//
export const default_shop_obj = () => ({
    id: getRandomId(),
    count_like: getRandomNumber(10, 500) * 10,
    is_mall: getRandomBool(),
    is_like: getRandomBool(),
    is_plus: getRandomBool(),

    list_name: shop_category_arr(),
    vid_pics: shop_vid_pic_arr(),
    name: 'Shop ' + getRandomId(),
    picture: getRandomVidPic(),

    discount_arr: [
        {
            promotionid: 80893684,
            voucher_code: 'NGAN3K',
            min_spend: 59000,
            product_limit: false,
            percentage_used: 67,
            start_time: 1622188099,
            end_time: 1630054099,
            icon_text: 'mỹ phẩm ngân bình đặc trị',
            shop_id: 256060797,
            discount_value: 3000,
            status_card: 'available',
        },
        {
            promotionid: 80893684,
            voucher_code: 'NGAN3K',
            min_spend: 180000,
            product_limit: false,
            percentage_used: 67,
            start_time: 1622188099,
            end_time: 1630054099,
            icon_text: 'mỹ phẩm ngân bình đặc trị',
            shop_id: 256060797,
            discount_value: 7000,
            status_card: 'available',
        },
    ],

    ship_arr: [
        {
            min_spend: 50000,
            cost: 15000,
            transport_arr: ['Nhanh'],
        },
        {
            min_spend: 250000,
            cost: 25000,
            transport_arr: ['Nhanh'],
        },
        {
            min_spend: 300000,
            cost: 70000,
            transport_arr: ['Nhanh'],
        },
    ],
    ship_text:
        'Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000 (giảm tối đa ₫25.000); Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000 (giảm tối đa ₫70.000)',

    banner: getRandomVidPic(),
    place: 'Quận Gò Vấp, TP. Hồ Chí Minh',
    rating_star: 4.9,
    shop_location: 'TP. Hồ Chí Minh',
    info: 'Shop info 1\nSentence 2\nSentence 3\nSentence 4\nSentence 5',
    ...owner_info(),
    created_time: '2021-04-13T21:25:13.739874Z',
    profile_model: 2,
});
