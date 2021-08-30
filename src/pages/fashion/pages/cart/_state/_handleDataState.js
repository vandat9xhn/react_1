import { default_product_obj } from '../../../../../_default/fashion/DefaultProductItem';
import { default_shop_obj } from '../../../../../_default/fashion/DefaultShop';
import { getRandomBool } from '../../../../../_default/_common/default_bool';
import { getRandomId } from '../../../../../_default/_common/default_id';

//
export function handleDataState({ data, setStateObj = () => {} }) {
    //
    const default_item_info_obj = () => {
        return {
            ...default_product_obj(),
            checked: false,
            model_ix: 0,
        };
    };

    const default_shop_info_obj = () => {
        return {
            ...default_shop_obj(),
            item_count: 0,
            item_checked_count: 0,
            item_gift_count: 0,

            // best_discount_ix: -1,
            shop_discount_ix: -1,
        };
    };
    // const data_api = getDefaultArr(default_cart_shop_obj, 2, 5);

    // const item_count = data_api.reduce(
    //     (a, b) => a + b.item_info_arr.length,
    //     0
    // );

    // const item_checked_count = data_api.reduce(
    //     (a, b) => a + b.item_info_arr.filter((item) => item.checked).length,
    //     0
    // );

    // const total_price = data_api.reduce(
    //     (a, b) =>
    //         a +
    //         b.item_info_arr.reduce(
    //             (a_1, b_1) =>
    //                 a_1 +
    //                 b_1.checked *
    //                     b_1.models[b_1.model_ix].total_add_cart *
    //                     b_1.models[b_1.model_ix].new_price,
    //             0
    //         ),
    //     0
    // );

    //
    const cart_shop_arr = [
        {
            shop_info: { ...default_shop_info_obj(), item_count: 9 },
            group_arr: [
                {
                    type: 'hot_deal',
                    item_info_arr: [
                        default_item_info_obj(),
                        default_item_info_obj(),
                        default_item_info_obj(),
                    ],
                },
                {
                    type: 'gift',
                    id: getRandomId(),
                    item_info_arr: [
                        default_item_info_obj(),
                        default_item_info_obj(),
                    ],
                    gift_items: [default_item_info_obj()],
                    more_spend: 0,
                    gift_count: 1,
                    gift_chosen_count: 1,
                },
                {
                    type: 'combo',
                    id: getRandomId(),
                    item_info_arr: [
                        default_item_info_obj(),
                        default_item_info_obj(),
                        default_item_info_obj(),
                    ],
                    min_count: 3,
                    discount: '5K',
                },
                {
                    type: '',
                    item_info_arr: [default_item_info_obj()],
                },
            ],
        },
        {
            shop_info: { ...default_shop_info_obj(), item_count: 2 },
            group_arr: [
                {
                    type: '',
                    item_info_arr: [
                        default_item_info_obj(),
                        default_item_info_obj(),
                    ],
                },
            ],
        },
    ];

    //
    // data_api.map(item => {
    //     const cart_shop_obj = {}
    //     cart_shop_obj.shop_info = item.shop_info

    //     cart_shop_arr.push(cart_shop_obj)
    // })

    //
    setStateObj((state_obj) => {
        return {
            ...state_obj,
            cart_shop_arr: cart_shop_arr,
            fashion_voucher: { name: '' },

            coin: 1000,
            checked_coin: false,
            item_count: 11,
            item_checked_count: 0,
            item_gift_count: 0,
            // total_price: 0,

            has_fetched: true,
        };
    });
}
