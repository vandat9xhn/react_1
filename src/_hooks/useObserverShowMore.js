import { useDataShowMore } from './useDataShowMore';
import { useObserverGetData } from './useObserverGetData';

//
export function useObserverShowMore({
    initial_arr = [],
    handle_API_L = (c_count = 0) => new Promise(),
    other_state = {},
}) {
    //
    const {
        data_state,
        setDataState,

        is_max,
        ref_fetching,
        data_count,

        getData_API,
        refreshData_API,
    } = useDataShowMore({
        initial_arr: initial_arr,
        handle_API_L: handle_API_L,
        other_state: other_state,
    });

    //
    const { observerShowMore } = useObserverGetData({
        getData_API: getData_API,
        getIsMax: () => is_max.current,
        getIsFetching: () => ref_fetching.current,
    });

    //
    return {
        data_state,
        setDataState,

        is_max,
        data_count,
        ref_fetching,

        observerShowMore,
        getData_API,
        refreshData_API,
    };
}
