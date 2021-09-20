import { getRandomBool } from '../../../../../../../_default/_common/default_bool';
import { getRandomVidPic } from '../../../../../../../_default/_common/default_image';
import {
    getRandomId,
    getRandomNumber,
} from '../../../../../../../_default/_common/default_id';
//
import { UnitNumber } from '../../../../../../../_some_function/UnitNumber';
//
import img_flash from '../../../../../../../../image/img_flash.png';
import coin_back from '../../../../../../../../image/coin_back.png';
import shopee_voucher from '../../../../../../../../image/shopee_voucher.png';

//
export function FsPVc_handleDataState({ data, can_use = true }) {
    return {
        count: 20,
        pages: 2,
        data: [
            {
                id: getRandomId(),
                type: 'shop',
                shop_name: 'Shop name',
                shop_picture: getRandomVidPic(),
                is_mall: getRandomBool(),
                is_like: getRandomBool(),

                img_tag: getRandomBool() ? img_flash : '',
                title_center_1: `Giảm ${50}%`,
                title_center_2: `Đơn tối thiểu ₫${UnitNumber(
                    getRandomNumber(15, 20) * 10000
                )} ${
                    getRandomBool()
                        ? `Giảm tối đa ${getRandomNumber(10, 30)}k`
                        : ''
                }`,
                title_center_3: '',
                used_count: '',
                end_time: new Date().getTime(),
                can_use: can_use,
                title_side: can_use ? '' : 'Đã sử dụng',
            },
            {
                id: getRandomId(),
                type: 'ship',
                img_tag: getRandomBool() ? img_flash : '',
                title_center_1: 'Tất cả hình thức thanh toán',
                title_center_2: '',
                title_center_3: 'Giảm đến 70K',
                used_count:
                    getRandomBool() && can_use
                        ? `${getRandomNumber(70, 99)}%`
                        : '',
                end_time: new Date().getTime(),
                can_use: can_use,
                title_side: can_use ? '' : 'Đã hết hạn',
            },
            {
                id: getRandomId(),
                type: 'coin',
                img: coin_back,
                img_text: 'Toàn Ngành Hàng',
                img_tag: getRandomBool() ? img_flash : '',
                title_center_1: 'Hoàn 20% xu',
                title_center_2: 'Đơn Tối Thiểu ₫0 Tối đa 25k Xu',
                title_center_3: '',
                used_count:
                    getRandomBool() && can_use
                        ? `${getRandomNumber(70, 99)}%`
                        : '',
                end_time: new Date().getTime(),
                can_use: can_use,
                title_side: can_use ? '' : 'Hết lượt sử dụng',
            },
            {
                id: getRandomId(),
                type: 'pay',
                img: shopee_voucher,
                img_text: 'ShopeePay',
                img_tag: getRandomBool() ? img_flash : '',
                title_center_1: 'Giảm ₫100k',
                title_center_2: 'Đơn Tối Thiểu ₫0',
                title_center_3: 'Thanh toán với ShopeePay',
                used_count:
                    getRandomBool() && can_use
                        ? `${getRandomNumber(70, 99)}%`
                        : '',
                end_time: new Date().getTime(),
                can_use: can_use,
                title_side: can_use ? '' : 'Hết lượt sử dụng',
            },
        ],
    };
}
