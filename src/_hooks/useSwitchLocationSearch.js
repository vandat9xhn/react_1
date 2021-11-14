import { useHistory } from 'react-router-dom';
import { stringify } from 'query-string';
//
import { ParseLocationSearch } from '../_some_function/ParseLocationSearch';

//
export function useSwitchLocationSearch({ is_replace = false }) {
    //
    const use_history = useHistory();

    // ------

    //
    function pushOrReplaceSearch({ search_obj }) {
        if (is_replace) {
            use_history.replace(`?${stringify(search_obj)}`);
        } else {
            use_history.push(`?${stringify(search_obj)}`);
        }
    }

    //
    function switchLocationSearch({ search_key = '' }) {
        const search_obj = ParseLocationSearch();
        const has_searched = !!search_obj[search_key];

        if (!has_searched) {
            search_obj[search_key] = 1;
        } else {
            search_obj[search_key] = undefined;
        }

        pushOrReplaceSearch({ search_obj: search_obj });
    }

    //
    function changeLocationSearch({ search_key = '', search_value = '' }) {
        const search_obj = ParseLocationSearch();

        if (search_value) {
            search_obj[search_key] = search_value;
        } else {
            search_obj[search_key] = undefined;
        }

        pushOrReplaceSearch({ search_obj: search_obj });
    }

    //
    return {
        switchLocationSearch,
        changeLocationSearch,
    };
}
