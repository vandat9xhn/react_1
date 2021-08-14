import { useDataShowMore } from './useDataShowMore';

//
export function useObserverShowMore({
    initial_arr = [],
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
    });

    //
    function observerShowMore({
        elm,
        options_observer = {
            root: null,
            threshold: 0,
            rootMargin: '0px 0px',
        },
    }) {
        const observe = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(options_observer);
                        if (is_max.current) {
                            observe.unobserve(entry.target);
                        } else if (!ref_fetching.current) {
                            getData_API();
                        }
                    }
                });
            },
            {
                ...options_observer,
            }
        );

        observe.observe(elm);
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
