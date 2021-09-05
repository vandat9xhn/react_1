import { default_product_obj } from '../../../../../_default/fashion/DefaultProductItem';
import { default_shop_obj } from '../../../../../_default/fashion/DefaultShop';
import { getRandomBool } from '../../../../../_default/_common/default_bool';
import {
    getRandomId,
    getRandomNumber,
} from '../../../../../_default/_common/default_id';

//
function getDeliveryDate(more_days = 1) {
    const date = new Date(
        new Date().getTime() + more_days * 24 * 60 * 60 * 1000
    );

    const day = date.getDate();
    const month = `0${date.getMonth() + 1}`.slice(-2);

    return `${day} th${month}`;
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
                name: 'Nhanh',
                price: getRandomNumber(20, 50) * 1000,
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
                    str_date_from: getDeliveryDate(1),
                    str_date_to: getDeliveryDate(2),
                },
            },
        ];
    };

    //
    const buy_shop_arr = [
        {
            shop_info: { ...default_shop_info_obj()},
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
            transport: { ...default_transport_arr()[0], option_id: 0 },
            total_price: 950000,
        },
        {
            shop_info: { ...default_shop_info_obj() },
            item_info_arr: [
                default_item_info_obj(),
                default_item_info_obj(),
                default_item_info_obj(),
            ],
            transport: { ...default_transport_arr()[0], option_id: 0 },
            total_price: 625000,
        },
    ];

    //
    setStateObj((state_obj) => {
        return {
            ...state_obj,
            buy_shop_arr: buy_shop_arr,
            total_price: 8150000,
            fashion_voucher: { name: '' },
            coin: 1000,
            payment_obj: {
                name: 'Thanh toán khi nhận hàng',
            },
            
            checked_coin: false,
            has_fetched_buy_shop: true,
        };
    });
}
