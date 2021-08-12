import { useEffect } from 'react';
//
import { useDataShowMore } from './useDataShowMore';

//
export function useScrollRightShowMore({
    ref_elm,
    initial_arr = [],
    other_state = {},
    handle_API_L = (c_count = 0) => new Promise(),
}) {
    //
    const {
        data_state,
        setDataState,

        is_max,
        ref_fetching,
        data_count,

        getData_API,
    } = useDataShowMore({
        initial_arr: initial_arr,
        handle_API_L: handle_API_L,
        other_state: other_state,
    });

    //
    useEffect(() => {
        ref_elm.current.onscroll = handleScrollLeft;

        return () => {
            ref_elm.current.onscroll = null;
        };
    }, []);

    //
    function handleScrollLeft() {
        if (is_max.current) {
            ref_elm.current.onscroll = null;
        }

        if (ref_fetching.current) {
            return;
        }

        if (
            ref_elm.current.scrollLeft + ref_elm.current.clientWidth >=
            ref_elm.current.scrollWidth - 200
        ) {
            getData_API();
        }
    }

    //
    return {
        data_state,
        setDataState,

        is_max,
        ref_fetching,
        data_count,

        getData_API,
    };
}
