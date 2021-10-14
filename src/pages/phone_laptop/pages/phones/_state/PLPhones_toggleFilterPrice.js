import {
    INITIAL_PL_PHONES_STATE,
    PL_PHONES_MAX_PRICE,
    PL_PHONES_MIN_PRICE,
} from '../../../../../_initial/phone/pl_phones';
// 
import { PLPhones_getData_Filter } from './PLPhones_Filter';

//
export function PLPhones_toggleFilterPrice({
    state_obj = INITIAL_PL_PHONES_STATE,
    setStateObj = () => {},
}) {
    const { filter_arr, filter_count, is_price_custom } = { ...state_obj };

    const new_is_price_custom = !is_price_custom;
    let new_filter_count = filter_count;

    if (new_is_price_custom) {
        new_filter_count += 1;

        filter_arr[1].item_arr.forEach((item) => {
            if (item.checked) {
                item.checked = false;
                new_filter_count -= 1;
            }
        });
    } else {
        new_filter_count -= 1;
    }

    // console.log(new_is_price_custom, new_filter_count);

    PLPhones_getData_Filter({
        setStateObj: setStateObj,

        filter_count: new_filter_count,
        filter_arr: filter_arr,

        is_price_custom: new_is_price_custom,
        price_custom_1: PL_PHONES_MIN_PRICE,
        price_custom_2: PL_PHONES_MAX_PRICE,
    });
}
