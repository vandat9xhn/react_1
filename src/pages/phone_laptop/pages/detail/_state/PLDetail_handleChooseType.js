import { getRandomNumber } from '../../../../../_default/_common/default_id';
import { PL_detail_initial_state_obj } from './_PLDetail_handleState';

//
export function PLDetail_handleChooseType({
    group_ix = 0,
    item_ix = 0,
    setStateObj = () => {},
}) {
    setStateObj((state_obj = PL_detail_initial_state_obj()) => {
        const new_product_obj = { ...state_obj.product_obj };
        const new_price = getRandomNumber(20, 50);

        new_product_obj.group_arr[group_ix].find(
            (item) => item.is_active
        ).is_active = false;
        new_product_obj.group_arr[group_ix][item_ix].is_active = true;

        new_product_obj.new_price = new_price * 100000;
        new_product_obj.new_price_2 = (new_price - 1) * 100000;
        new_product_obj.old_price =
            getRandomNumber(new_price, new_price + 10) * 100000;

        return {
            ...state_obj,
            product_obj: new_product_obj,
        };
    });
}
