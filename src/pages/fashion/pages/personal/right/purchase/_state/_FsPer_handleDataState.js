import { default_product_obj } from '../../../../../../../_default/fashion/DefaultProductItem';
import { default_shop_obj } from '../../../../../../../_default/fashion/DefaultShop';
import {
    getRandomId,
    getRandomNumber,
} from '../../../../../../../_default/_common/default_id';

//
export const FsPer_ARR_STAGE = [
    'all',
    'buying',
    'ready',
    'delivery',
    'bought',
    'cancel',
];

//
export const FsPer_ARR_PURCHASE = [
    'Tất cả',
    'Chờ xác nhận',
    'Chờ lấy hàng',
    'Đang giao',
    'Đã giao',
    'Đã hủy',
];

//
export function FsPer_handleDataState({ data }) {
    const shop_info = () => default_shop_obj();
    const item_info = () => {
        const new_item_info = default_product_obj();

        return {
            ...new_item_info,
            img: new_item_info.vid_pics[0],
            quantity: getRandomNumber(1, 20),
            model_name:
                new_item_info.models.length > 1
                    ? new_item_info.models[0].name
                    : '',
        };
    };

    const group_arr_1 = [
        {
            type: 'hot_deal',
            item_info_arr: [item_info(), item_info(), item_info()],
        },
        {
            type: 'gift',
            main_items: [item_info(), item_info()],
            gift_items: [item_info()],
        },
        {
            type: 'combo',
            min_count: 3,
            saved_price: 7000,
            total_price: 1200000,
            item_info_arr: [item_info(), item_info(), item_info()],
        },
        {
            type: '',
            item_info_arr: [item_info(), item_info()],
        },
    ];

    const group_arr_2 = [
        {
            type: '',
            item_info_arr: [item_info(), item_info(), item_info()],
        },
    ];

    return {
        data: [
            {
                id: 1,
                shop_info: shop_info(),
                group_arr: group_arr_1,

                total_price: 2000000,
                order_status: 'Đã giao',
                order_process_arr: [
                    {
                        created_time: new Date().getTime(),
                        info: 'Đang giao hàng',
                    },
                    {
                        created_time: new Date().getTime(),
                        info: 'Shipper báo đang lấy hàng',
                    },
                    {
                        created_time: new Date().getTime(),
                        info: 'Đang lấy hàng từ Shop',
                    },
                    {
                        created_time: new Date().getTime(),
                        info: 'Chờ Shop xác nhận thanh toán',
                    },
                ],

                payment_obj: {
                    name: 'Thanh toán khi nhận hàng',
                },

                transport_obj: {
                    id: getRandomId(),
                    name: 'Giao hàng nhanh',
                    price: 30000,
                    discount: 2000,
                    status: 'Giao hàng thành công',
                },
            },
            {
                id: 2,
                shop_info: shop_info(),
                group_arr: group_arr_2,

                total_price: 1000000,
                order_status: 'Đã giao',
                order_process_arr: [
                    {
                        created_time: new Date().getTime(),
                        info: 'Đang giao hàng',
                    },
                ],

                payment_obj: {
                    name: 'Thanh toán khi nhận hàng',
                },

                transport_obj: {
                    id: getRandomId(),
                    name: 'Ninja Van',
                    price: 27000,
                    discount: 18000,
                    status: 'Giao hàng thành công',
                },
            },
        ],
        count: 8,
        pages: 2,
    };
}
