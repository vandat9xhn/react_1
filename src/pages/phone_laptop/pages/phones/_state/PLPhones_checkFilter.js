import { stringify } from 'query-string';
//
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import { INITIAL_PL_PHONES_STATE } from '../../../../../_initial/phone/pl_phones';

//
export function PLPhones_checkFilter({
    filter_check_arr = INITIAL_PL_PHONES_STATE.filter_check_arr,
    filter_check_ix = 0,
    forceUpdate = () => {},
}) {
    const is_checked = filter_check_arr[filter_check_ix].checked;
    const filter_key = filter_check_arr[filter_check_ix].filter_key;
    const search_obj = ParseLocationSearch();

    if (is_checked) {
        delete search_obj[filter_key];
    } else {
        search_obj[filter_key] = '1';
    }

    history.pushState('', '', `${location.pathname}?${stringify(search_obj)}`);
    forceUpdate();
}
