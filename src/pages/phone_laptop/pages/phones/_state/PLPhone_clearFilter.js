import { stringify } from 'query-string';
//
import { INITIAL_PL_PHONES_STATE } from '../../../../../_initial/phone/pl_phones';
//
import { PLPhones_getSearchObj } from '../_func/PLPhones_FilterToUrl';

//
export function PLPhones_changeUrl({
    search_str = '',
    forceUpdate = () => {},
}) {
    const old_search_str = location.search.slice(1);
    const new_url = `${location.pathname}?${search_str}`;

    if (old_search_str == search_str) {
        history.pushState('', '', `${new_url}&`);
    } else {
        history.pushState('', '', `${new_url}`);
    }

    forceUpdate();
}

// -----

//
export function PLPhones_clearFilter({
    state_obj = INITIAL_PL_PHONES_STATE,
    filter_ix = -1,
    forceUpdate = () => {},
}) {
    const { filter_arr, is_price_custom, price_custom_1, price_custom_2 } =
        state_obj;

    const search_obj = PLPhones_getSearchObj({
        filter_arr: filter_arr.filter((_, ix) => ix != filter_ix),
        is_price_custom: is_price_custom,
        price_custom_1: price_custom_1,
        price_custom_2: price_custom_2,
    });

    PLPhones_changeUrl({
        search_str: stringify(search_obj),
        forceUpdate: forceUpdate,
    });
}

//
export function PLPhones_clearFilterPriceCustom({
    state_obj = INITIAL_PL_PHONES_STATE,
    forceUpdate = () => {},
}) {
    const { filter_arr } = state_obj;

    const search_obj = PLPhones_getSearchObj({
        filter_arr: filter_arr,
    });

    PLPhones_changeUrl({
        search_str: stringify(search_obj),
        forceUpdate: forceUpdate,
    });
}

//
export function PLPhones_clearAllFilter({ forceUpdate = () => {} }) {
    PLPhones_changeUrl({ search_str: '', forceUpdate: forceUpdate });
}
