import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import {
    initial_pl_phones_state,
    INITIAL_PL_PHONES_STATE,
} from '../../../../../_initial/phone/pl_phones';
//
import { PLPhones_changeFilterData } from '../_func/PLPhones_UrlToFilter';
import { handle_API_PhoneLaptop_L } from '../../../../../_handle_api/phone/list';

//
export async function PLPhones_handle_API(c_count = 0) {
    const res = await handle_API_PhoneLaptop_L({
        c_count: c_count,
        params: {
            type: 'phone',
            ...ParseLocationSearch(),
            page: 1,
            size: 30,
        },
    });

    return res;
}

//
export async function PLPhones_getData_API({
    setStateObj = () => {},
    mounted = true,
}) {
    const initial_state = initial_pl_phones_state();
    const new_filter_arr = initial_state.filter_arr;
    const { filter_count, is_price_custom, price_custom_1, price_custom_2 } =
        PLPhones_changeFilterData(new_filter_arr);

    setStateObj({
        ...initial_state,
        is_fetching: true,

        filter_arr: new_filter_arr,
        filter_count: filter_count,

        is_price_custom: is_price_custom,
        price_custom_1: price_custom_1,
        price_custom_2: price_custom_2,
    });

    const { data, count } = await PLPhones_handle_API();

    if (!mounted) {
        return;
    }

    setStateObj((state_obj = INITIAL_PL_PHONES_STATE) => {
        return {
            ...state_obj,
            product_arr: data,
            count: count,
            is_fetching: false,
            has_fetched: true,

            filter_result_count: count,
        };
    });
}

//
export async function getDataMore_PLFilter({
    setStateObj = () => {},
    c_count = 0,
}) {
    setStateObj((state_obj = INITIAL_PL_PHONES_STATE) => {
        return {
            ...state_obj,
            is_fetching: true,
        };
    });

    const { data } = await PLPhones_handle_API(c_count);

    setStateObj((state_obj = INITIAL_PL_PHONES_STATE) => {
        return {
            ...state_obj,
            product_arr: [...state_obj.product_arr, ...data],
            is_fetching: false,
            has_fetched: true,
        };
    });
}
