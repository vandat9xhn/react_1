import { UnitNumber } from '../UnitNumber';

//
export function getFsShopDiscountTitle({ discount_value = 0, min_spend = 0 }) {
    return `Giảm ${discount_value} Đơn Tối Thiểu ₫${UnitNumber(min_spend)}`;
}

//
export function getFsCShopDiscountStatus({
    has_chosen_product,
    shop_discount_arr,
    shop_discount_ix,
    best_discount_ix,
    shop_total_price,
}) {
    //
    if (!has_chosen_product) {
        return {
            title: `Shop Voucher giảm đến (${
                shop_discount_arr[shop_discount_arr.length - 1].discount_value
            })`,
            action: '',
            action_title: 'Xem thêm voucher',
        };
    }

    if (shop_discount_ix == -1) {
        if (best_discount_ix >= 0) {
            const shop_discount_obj = shop_discount_arr[best_discount_ix];

            if (shop_discount_obj.status_card == 'available') {
                return {
                    title: `Lưu voucher giảm giá ${shop_discount_obj.discount_value}`,
                    action: 'save',
                    action_title: 'Lưu',
                };
            }
        }

        const shop_discount_obj =
            shop_discount_arr[shop_discount_arr.length - 1];
        const more_spend = shop_discount_obj.min_spend - shop_total_price;

        if (more_spend <= 0) {
            return {
                title: `Có thể áp dụng mã giảm giá ₫${shop_discount_obj.discount_value}`,
                action: 'can',
                action_title: 'Xem thêm voucher',
            };
        }

        return {
            title: `Giảm ${shop_discount_obj.discount_value} khi mua thêm ₫${
                shop_discount_obj.min_spend - shop_total_price
            }`,
            action: '',
            action_title: 'Xem thêm voucher',
        };
    } else {
        const shop_discount_obj = shop_discount_arr[shop_discount_ix];
        const more_spend = shop_discount_obj.min_spend - shop_total_price;

        if (more_spend <= 0) {
            return {
                title: `Shop Voucher giảm ${shop_discount_obj.discount_value}`,
                action: 'applied',
                action_title: 'Xem thêm voucher',
            };
        }

        return {
            title: `Chưa thể áp dụng voucher giảm ${shop_discount_obj.discount_value}`,
            action: '',
            action_title: 'Xem thêm voucher',
        };
    }
}
