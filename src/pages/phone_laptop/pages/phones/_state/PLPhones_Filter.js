import { INITIAL_PL_PHONES_STATE } from '../../../../../_initial/phone/pl_phones';
//
import { API_PhoneLaptop_L } from '../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import { PLPhones_getSearchObj } from '../_func/PLPhones_FilterToUrl';

//
export async function PLPhones_getData_Filter({
    setStateObj = () => {},

    filter_count = 0,
    filter_arr = INITIAL_PL_PHONES_STATE.filter_arr,

    is_price_custom = false,
    price_custom_1 = 0,
    price_custom_2 = 0,
}) {
    if (filter_count == 0) {
        setStateObj((state_obj = INITIAL_PL_PHONES_STATE) => {
            return {
                ...state_obj,
                filter_count: 0,
                filter_result_count: 0,
                filter_fetching: false,

                is_price_custom: is_price_custom,
                price_custom_1: price_custom_1,
                price_custom_2: price_custom_2,
            };
        });

        return;
    }

    // ---

    setStateObj((state_obj = INITIAL_PL_PHONES_STATE) => {
        // console.log(state_obj);
        return {
            ...state_obj,
            filter_count: filter_count,
            filter_fetching: true,

            is_price_custom: is_price_custom,
            price_custom_1: price_custom_1,
            price_custom_2: price_custom_2,
        };
    });

    const res = await API_PhoneLaptop_L({
        page: 1,
        size: 1,
        ...PLPhones_getSearchObj({
            filter_arr: filter_arr,
            is_price_custom: is_price_custom,
            price_custom_1: price_custom_1,
            price_custom_2: price_custom_2,
        }),
    });

    setStateObj((state_obj = INITIAL_PL_PHONES_STATE) => {
        // console.log(state_obj);
        return {
            ...state_obj,
            filter_result_count: res.data.count,
            filter_fetching: false,
        };
    });
}
