import { getRandomBool } from '../../../../../../../../_default/_common/default_bool';
import { getRandomId } from '../../../../../../../../_default/_common/default_id';
import { getRandomVidPic } from '../../../../../../../../_default/_common/default_image';

//
export function FsPNOrder_handleDataState({ data }) {
    return {
        count: 22,
        pages: 2,
        data: [
            {
                id: getRandomId(),
                order_id: getRandomId(),
                logo: getRandomVidPic(),
                name: 'asdsd asd asd asd',
                info: 'sda dad asd asd asd asd asd asd asd asd asd asda sd',
                process_arr: [
                    {
                        title: 'Xác Nhận Đã Nhận Hàng',
                        info: 'asd asd asd asd jhkjhvc vc cbess ad dff',
                        created_time: new Date().getTime(),
                    },
                    {
                        title: 'Đang vận chuyển',
                        info: 'asd asd asd asd jhkjhvc vc cbess ad dff',
                        created_time: new Date().getTime(),
                    },
                    {
                        title: 'Đã xác nhận thanh toán COD',
                        info: 'asd asd asd asd jhkjhvc vc cbess ad dff',
                        created_time: new Date().getTime(),
                    },
                ],
                has_read: getRandomBool(),
                created_time: new Date().getTime(),
            },
        ],
    };
}
