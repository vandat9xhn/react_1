import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import {
    INITIAL_PL_PHONES_STATE,
    PL_PHONES_MAX_PRICE,
    PL_PHONES_MIN_PRICE,
} from '../../../../../_initial/phone/pl_phones';
import { formatNum } from '../../../../../_some_function/FormatNum';

// ----- URL => Filter Data

//
export function PLPhones_getFilterKeyArrFromUrl({
    search_key = '',
    search_obj = {},
}) {
    const filter_key_arr = search_obj[search_key];

    if (!filter_key_arr) {
        return {
            has_filter_key: false,
            filter_key_arr: [],
        };
    }

    if (typeof filter_key_arr == 'string') {
        return {
            has_filter_key: true,
            filter_key_arr: [filter_key_arr],
        };
    }

    return {
        has_filter_key: true,
        filter_key_arr: filter_key_arr,
    };
}

//
export function PLPhones_changeFilterData(
    filter_arr = INITIAL_PL_PHONES_STATE.filter_arr
) {
    const search_obj = ParseLocationSearch();
    const result = {
        filter_count: 0,
        is_price_custom: false,
        price_custom_1: PL_PHONES_MIN_PRICE,
        price_custom_2: PL_PHONES_MAX_PRICE,
    };

    // --- FILTER ARR

    filter_arr.forEach((filter_obj) => {
        const { filter_key_arr, has_filter_key } =
            PLPhones_getFilterKeyArrFromUrl({
                search_key: filter_obj.name,
                search_obj: search_obj,
            });

        result.filter_count += filter_key_arr.length;

        if (!has_filter_key) {
            return;
        }

        filter_obj.item_arr.forEach((item) => {
            if (filter_key_arr.includes(item.filter_key)) {
                item.checked = true;

                if (!filter_obj.c_title) {
                    filter_obj.c_title = item.title;
                }
            } else {
                item.checked = false;
            }
        });

        if (filter_key_arr.length >= 2) {
            filter_obj.c_title += ',...';
        }
    });

    // --- PRICE CUSTOM

    const price_filter = PLPhones_getFilterKeyArrFromUrl({
        search_key: 'price_custom',
        search_obj: search_obj,
    });

    if (price_filter.has_filter_key) {
        result.is_price_custom = true;
        result.filter_count += 1;

        const price_arr = price_filter.filter_key_arr[0].split('-');
        result.price_custom_1 = +price_arr[0];
        result.price_custom_2 = +price_arr[1];

        filter_arr[1].c_title = `Từ ${formatNum(
            result.price_custom_1 * 1000
        )}đ - ${formatNum(result.price_custom_2 * 1000)}đ`;
    }

    return result;
}
