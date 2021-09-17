import { default_product_obj } from '../../../../../../../_default/fashion/DefaultProductItem';
import { default_shop_obj } from '../../../../../../../_default/fashion/DefaultShop';
import { getRandomNumber } from '../../../../../../../_default/_common/default_id';

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
                transport_obj: {
                    transport_info: 'Giao hàng thành công',
                    transport_status: 'Đã giao',
                },
                total_price: 2000000,
            },
            {
                id: 2,
                shop_info: shop_info(),
                group_arr: group_arr_2,
                transport_obj: {
                    transport_info: 'Giao hàng thành công/Chưa đối soát',
                    transport_status: 'Đã giao',
                },
                total_price: 1000000,
            },
        ],
        count: 8,
        pages: 2,
    };
}
