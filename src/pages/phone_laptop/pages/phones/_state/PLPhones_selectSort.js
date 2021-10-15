import { stringify } from 'query-string';
// 
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
// 
import { PL_PHONES_SORT_ARR } from '../../../../../_initial/phone/pl_phones';

//
export function PLPhones_selectSort({
    new_sort_ix = 0,
    forceUpdate = () => {},
}) {
    const new_sort_key = PL_PHONES_SORT_ARR[new_sort_ix].sort_key;
    const search_obj = ParseLocationSearch();
    search_obj['sort'] = new_sort_key;

    history.pushState('', '', `${location.pathname}?${stringify(search_obj)}`);
    forceUpdate();
}
