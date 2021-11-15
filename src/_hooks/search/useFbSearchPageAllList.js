import { useEffect, useRef } from 'react';
// 
import observeToDo from '../../_some_function/observerToDo';
// 
import { useDataShowMore } from '../useDataShowMore';

//
export function useFbSearchPageAllList({ handle_API_L }) {
    //
    const ref_main_elm = useRef(null);

    //
    const data = useDataShowMore({
        handle_API_L: handle_API_L,
    });

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => {
                data.refreshData_API();
            },
        });
    }, [location.search]);

    //
    return { ref_main_elm, ...data };
}
