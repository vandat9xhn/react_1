import { useEffect, useRef } from 'react';
//
import { useDataShowMore } from './useDataShowMore';
import { useScrollToX } from './useScrollToX';

//
export function useCardsRowFit({ getItemElm, handle_API_L, handleFetched }) {
    //
    const ref_scroll_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX({
            ref_scroll_elm: ref_scroll_elm,
            getItemElm: getItemElm,
        });

    //
    const { data_state, getData_API } = useDataShowMore({
        handle_API_L: handle_API_L,
    });

    //
    useEffect(() => {
        getData_API_AtFirst();
    }, []);

    // -------

    //
    async function getData_API_AtFirst() {
        await getData_API();
        handleFetched && handleFetched();
        hasNextPrev();
    }

    // ----

    return {
        ref_scroll_elm,

        is_has_next,
        is_has_prev,

        data_state,

        handleNext,
        handlePrev,
    };
}
