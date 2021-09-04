import { useState } from 'react';
//
import { useMounted } from './useMounted';

//
export function useMultiDataKey({
    initial_key = '',
    handle_API_L,
    other_state = {},
}) {
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
    async function getData_API(new_key) {
        setStateObj((state_obj) => {
            const has_existed = state_obj.obj[new_key];
            const data_item = has_existed
                ? {}
                : {
                      [new_key]: {
                          data_arr: [],
                          count: 0,
                          has_fetched: false,
                      },
                  };

            return {
                ...state_obj,
                obj: {
                    ...state_obj.obj,
                    ...data_item,
                },
                c_key: new_key,
                is_fetching: true,
            };
        });

        const { data, count: new_count } = await handle_API_L(
            new_key,
            obj[new_key] ? obj[new_key].data_arr.length : 0
        );

        if (!mounted) {
            return;
        }

        setStateObj((state_obj) => {
            const { has_fetched, data_arr, count } = state_obj.obj[new_key];

            return {
                ...state_obj,
                is_fetching: false,
                obj: {
                    ...state_obj.obj,
                    [new_key]: {
                        data_arr: has_fetched ? [...data_arr, ...data] : data,
                        count: has_fetched ? count : new_count,
                        has_fetched: true,
                    },
                },
            };
        });
    }

    //
    function handleChangeKey(new_key) {
        if (c_key == new_key) {
            return;
        }

        if (obj[new_key]) {
            setStateObj({
                ...state_obj,
                c_key: new_key,
            });

            return;
        }

        getData_API(new_key);
    }

    return { state_obj, setStateObj, getData_API, handleChangeKey };
}
