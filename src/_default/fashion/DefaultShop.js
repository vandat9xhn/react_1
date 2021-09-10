import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
//
import { owner_info } from './FashionDefault';

//
const shop_category_name_arr = [
    { id: getRandomId(), name: 'mom', title: 'Mom' },
    { id: getRandomId(), name: 'baby', title: 'Baby' },
    { id: getRandomId(), name: 'other', title: 'Other' },
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

    category_arr: shop_category_arr(),
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
            is_percent: false,
            discount_str: '3k',
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
            is_percent: false,
            discount_str: '7k',
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
    location: 'TP. Hồ Chí Minh',
    description:
        '-Bác sĩ Thẩm Mỹ - Da liễu Dr Chiều\n- Tự hào với >20.000+ Khách hàng đã tin dùng.\n- Tất cả các Sp bên Shop của Bác sĩ đều là Dược Mỹ phẩm được các bác sĩ Da Liễu dùng, và tin dùng. Được bác sĩ chọn lọc ra sau nhiều năm điều trị, hỗ trợ, tư vấn cho bệnh nhân của minh.\n- Một số sản phẩm là thuốc điều trị ( treatment) nên cần được sự tư vấn của bác sĩ trước khi sử dụng các bạn nhé. hãy in cho shop để được tư vấn trước khi mua hàng ạ.\n- Sỉ add zalo:  0963749993',
    ...owner_info(),
    profile_model: 2,
});
