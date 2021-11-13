import { useEffect, useRef } from 'react';
//
import { useObserverShowMore } from '../useObserverShowMore';

//
export function useObserverMoreSearch({ handle_API_L }) {
    //
    const ref_fake_elm = useRef(null);

    //
    const data = useObserverShowMore({
        handle_API_L: handle_API_L,
    });

    //
    useEffect(() => {
        data.refreshData_API();
    }, [location.search]);

    //
    useEffect(() => {
        data.observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px 0px 250px 0px',
            way_scroll: 'to_bottom',
            margin: 250,
        });
    }, []);

    //
    return { ref_fake_elm, ...data };
}
