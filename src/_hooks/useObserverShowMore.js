import { useDataShowMore } from './useDataShowMore';

//
export function useObserverShowMore({
    ref_elm,
    initial_arr = [],
    handle_API_L = (c_count = 0) => new Promise(),

    options_observer = {
        threshold: 1,
        rootMargin: '0px 0px',
    },
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
    });

    //
    function observerShowMore() {
        const observe = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (is_max.current) {
                        observe.unobserve(entry.target);
                    } else if (
                        !ref_fetching.current &&
                        entry.target.scrollLeft + entry.target.clientWidth >=
                            entry.target.scrollWidth - 200
                    ) {
                        getData_API();
                        console.log(is_max.current);
                    }
                });
            },
            { ...options_observer, root: ref_elm.current.parentElement }
        );

        observe.observe(ref_elm.current);
    }

    return {
        data_state,
        setDataState,

        is_max,
        data_count,

        getData_API,
        observerShowMore,
    };
}
