import { useRef, useState } from 'react';
//
import { useMounted } from './useMounted';

//
export function useDataShowMore({
    initial_arr = [],
    other_state = {},
    handle_API_L = (c_count = 0) => new Promise(),
}) {
    //
    const [data_state, setDataState] = useState({
        data_arr: initial_arr,
        count: initial_arr.length,
        has_fetched: initial_arr.length > 0,
        is_fetching: false,
        ...other_state,
    });

    //
    const is_max = useRef(false);
    const ref_fetching = useRef(false);
    const data_count = useRef(0);

    //
    const mounted = useMounted();

    //
    async function getData_API(
        data_get_api = {
            start_obj_state: {},
            handleWhenFinally: () => {},
        }
    ) {
        if (ref_fetching.current) {
            return;
        }

        ref_fetching.current = true;

        const { start_obj_state = {}, handleWhenFinally = () => {} } =
            data_get_api;

        try {
            setDataState((data_state) => ({
                ...data_state,
                is_fetching: true,
                ...start_obj_state,
            }));

            const { data, count: new_count } = await handle_API_L(
                data_count.current
            );

            mounted &&
                setDataState((data_state) => {
                    const { has_fetched, data_arr, count } = data_state;

                    data_count.current += data.length;
                    is_max.current = has_fetched
                        ? data_arr.length >= count
                        : false;

                    return {
                        ...data_state,
                        data_arr: has_fetched ? [...data_arr, ...data] : data,
                        // data_arr: [...data_arr, ...data],
                        count: has_fetched ? count : new_count,
                        is_fetching: false,
                        has_fetched: true,
                    };
                });
        } catch (e) {
            console.log(e);
        }

        handleWhenFinally();
        ref_fetching.current = false;
    }

    // 
    function refreshData_API() {
        data_count.current = 0;

        getData_API({
            start_obj_state: {
                data_arr: [],
                count: 0,
                has_fetched: false,
            },
        });
    }

    // 
    return {
        data_state,
        setDataState,

        is_max,
        ref_fetching,
        data_count,

        getData_API,
        refreshData_API,
    };
}
