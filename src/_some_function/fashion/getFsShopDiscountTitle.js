import { UnitNumber } from "../UnitNumber";

//
export function getFsShopDiscountTitle({ discount_value = 0, min_spend = 0 }) {
    return `Giảm ₫${UnitNumber(discount_value)} Đơn Tối Thiểu ₫${UnitNumber(
        min_spend
    )}`;
}
