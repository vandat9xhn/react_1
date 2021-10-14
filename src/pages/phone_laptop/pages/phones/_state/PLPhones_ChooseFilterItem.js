import { INITIAL_PL_PHONES_STATE } from '../../../../../_initial/phone/pl_phones';
//
import { PLPhones_getData_Filter } from './PLPhones_Filter';

//
export async function PLPhones_ChooseFilterItem({
    setStateObj = () => {},
    state_obj = INITIAL_PL_PHONES_STATE,
    filter_ix = 0,
    item_ix = 0,
}) {
    const {
        filter_arr,
        filter_count,

        is_price_custom,
        price_custom_1,
        price_custom_2,
    } = { ...state_obj };

    const new_checked = !filter_arr[filter_ix].item_arr[item_ix].checked;
    const new_filter_count = filter_count + (new_checked ? 1 : -1);
    filter_arr[filter_ix].item_arr[item_ix].checked = new_checked;

    PLPhones_getData_Filter({
        setStateObj: setStateObj,

        filter_count: new_filter_count,
        filter_arr: filter_arr,

        is_price_custom: filter_ix == 1 ? false : is_price_custom,
        price_custom_1: price_custom_1,
        price_custom_2: price_custom_2,
    });
}
