import { useRef, useState } from 'react';
//
import { useMounted } from './useMounted';

//
export function useMultiDataKey({
    initial_key = '',
    handle_API_L,
    other_state = {},
}) {
    //
    const ref_fetching = useRef(false);
    const ref_c_count = useRef({ [initial_key]: 0 });
    const ref_is_max = useRef({ [initial_key]: false });
    const ref_c_key = useRef(initial_key);

    //
    const [state_obj, setStateObj] = useState({
        obj: {
            [initial_key]: {
                data_arr: [],
                count: 0,
                has_fetched: false,
            },
        },
        c_key: initial_key,
        is_fetching: false,
        ...other_state,
    });

    const { obj, c_key } = state_obj;

    //
    const mounted = useMounted();

    //
    async function getData_API(new_key = ref_c_key.current, is_reset = false) {
        if (ref_fetching.current) {
            return;
        }

        ref_fetching.current = true;

        if (is_reset || !ref_c_count.current[new_key]) {
            ref_c_count.current[new_key] = 0;
        }

        // ------

        setStateObj((state_obj) => {
            const new_obj = { ...state_obj.obj };

            if (!new_obj[new_key] || is_reset) {
                new_obj[new_key] = {
                    data_arr: [],
                    count: 0,
                    has_fetched: false,
                };
            }

            return {
                ...state_obj,
                obj: new_obj,
                c_key: new_key,
                is_fetching: true,
            };
        });

        const { data, count: new_count } = await handle_API_L(
            new_key,
            ref_c_count.current[new_key]
        );

        // ------

        if (!mounted) {
            return;
        }

        setStateObj((state_obj) => {
            const new_obj = { ...state_obj.obj };
            const { has_fetched, data_arr, count } = new_obj[new_key];

            // --
            ref_c_count.current[new_key] = data_arr.length + data.length;
            ref_is_max.current[new_key] =
                data_arr.length + data.length >= new_count;

            // --
            if (has_fetched && !is_reset) {
                new_obj[new_key].data_arr.push(...data);
                new_obj[new_key].count = count;
            } else {
                new_obj[new_key].data_arr = data;
                new_obj[new_key].count = new_count;
            }

            new_obj[new_key].has_fetched = true;

            return {
                ...state_obj,
                is_fetching: false,
                obj: new_obj,
            };
        });

        ref_fetching.current = false;
    }

    //
    function handleChangeKey(new_key) {
        if (c_key == new_key) {
            return;
        }

        ref_c_key.current = new_key;

        if (obj[new_key]) {
            setStateObj({
                ...state_obj,
                c_key: new_key,
            });

            return;
        }

        getData_API(new_key);
    }

    return {
        state_obj,
        setStateObj,

        ref_c_key,
        ref_fetching,
        ref_is_max,

        getData_API,
        handleChangeKey,
    };
}
