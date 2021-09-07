import { default_product_obj } from '../../../../../_default/fashion/DefaultProductItem';
import { default_shop_obj } from '../../../../../_default/fashion/DefaultShop';
import { getRandomBool } from '../../../../../_default/_common/default_bool';
import {
    getRandomId,
    getRandomNumber,
} from '../../../../../_default/_common/default_id';

//
function getDeliveryDate(more_days = 1, by_time = false) {
    const date = new Date(
        new Date().getTime() + more_days * 24 * 60 * 60 * 1000
    );

    if (!by_time) {
        const day = date.getDate();
        const month = `0${date.getMonth() + 1}`.slice(-2);

        return `${day} th${month}`;
    }

    const time = more_days * 24 + 'giờ';

    return time;
}

//
export function FsBuy_handleDataState({ data, setStateObj = () => {} }) {
    //
    const default_item_info_obj = () => {
        const product_obj = default_product_obj();

        return {
            ...product_obj,
            model_name: '',
            type: '',
        };
    };

    const default_shop_info_obj = () => {
        const shop_info = default_shop_obj();
        shop_info.discount_arr.forEach((item) => {
            item.status_card = 'saved';
        });

        return {
            ...shop_info,
            shop_discount_ix: -1,
        };
    };

    const default_transport_arr = () => {
        return [
            {
                name: 'Hỏa tốc',
                price: getRandomNumber(30, 50) * 1000,
                options: [],

                delay_obj: {
                    delay_message:
                        'Do ảnh hưởng của Covid-19,thời gian giao hàng có thể dài hơn dự kiến từ 1-5 giờ',
                    min_day: 1 / 24,
                    max_day: 2 / 24,
                    by_time: true,
                    str_date_from: getDeliveryDate(1 / 24, true),
                    str_date_to: getDeliveryDate(2 / 24, true),
                },
            },
            {
                name: 'Nhanh',
                price: getRandomNumber(20, 30) * 1000,
                options: [
                    {
                        option_id: 0,
                        name: 'Tất cả các ngày trong tuần',
                        short_name: 'Tất cả các ngày trong tuần',
                        description:
                            'Phù hợp với địa chỉ nhà riêng, luôn có người nhận hàng',
                    },
                    {
                        option_id: 1,
                        name: 'Chỉ giao hàng giờ hành chính',
                        short_name: 'Giờ hành chính',
                        description: 'Phù hợp với địa chỉ văn phòng/cơ quan',
                    },
                ],

                delay_obj: {
                    delay_message:
                        'Do ảnh hưởng của Covid-19,thời gian giao hàng có thể dài hơn dự kiến từ 1-5 ngày',
                    min_day: 1,
                    max_day: 2,
                    by_time: false,
                    str_date_from: getDeliveryDate(1),
                    str_date_to: getDeliveryDate(2),
                },
            },
        ];
    };

    //
    const buy_shop_arr = [
        {
            shop_info: { ...default_shop_info_obj() },
            item_info_arr: [
                default_item_info_obj(),
                default_item_info_obj(),
                default_item_info_obj(),
                default_item_info_obj(),
                { ...default_item_info_obj(), type: 'hot_deal', is_main: true },
                {
                    ...default_item_info_obj(),
                    type: 'hot_deal',
                    is_main: false,
                },
                {
                    ...default_item_info_obj(),
                    type: 'hot_deal',
                    is_main: false,
                },
                { ...default_item_info_obj(), type: 'gift', is_main: true },
                { ...default_item_info_obj(), type: 'gift', is_main: false },
                { ...default_item_info_obj(), type: 'gift', is_main: false },
            ],
            total_price: 950000,

            transport_arr: default_transport_arr(),
            trans_ix: 0,
            delivery_time_ix: 0,
        },
        {
            shop_info: { ...default_shop_info_obj() },
            item_info_arr: [
                default_item_info_obj(),
                default_item_info_obj(),
                default_item_info_obj(),
            ],
            total_price: 625000,

            transport_arr: default_transport_arr(),
            trans_ix: 0,
            delivery_time_ix: 0,
        },
    ];

    //
    const default_payment_arr = [
        { id: getRandomId(), name: 'Ví Fashion' },
        { id: getRandomId(), name: 'Thẻ Tín dụng/Ghi nợ' },
        { id: getRandomId(), name: 'Thanh toán khi nhận hàng' },
    ];

    //
    setStateObj((state_obj) => {
        return {
            ...state_obj,
            buy_shop_arr: buy_shop_arr,
            total_price: 8150000,
            fashion_voucher: { name: '' },
            coin: 1000,
            payment_arr: default_payment_arr,

            payment_ix: 2,
            checked_coin: false,
            has_fetched_buy_shop: true,
        };
    });
}
