import { useRef, useState } from 'react';
//
import { waitingToDoLast } from '../_some_function/waitingToDoLast';

//
export function useSelectOneSearch({
    initial_option_arr = [] || [{ id: 0, title: '', img: '' }],
    initial_option_obj = { id: 0, title: '', img: '' },
    callbackChose = () => {},
    callbackClear = () => {},
}) {
    const [state_obj, setStateObj] = useState({
        is_active: false,
        option_arr: initial_option_arr,
        option_obj: initial_option_obj,
        value_search: '',
    });

    const { is_active, option_arr, option_obj, value_search } = state_obj;

    //
    const ref_value_search = useRef('');
    const ref_interval = useRef(null);

    // ----- API

    //
    async function getData_API() {
        const data = await handle_API_L({
            value_search: ref_value_search.current,
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                option_arr: data,
            };
        });
    }

    // -----

    //
    function showOptions() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                is_active: !state_obj.is_active,
            };
        });
    }

    //
    function choseOption(option_ix = 0) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                is_active: false,
                option_obj: state_obj.option_arr[option_ix],
                option_arr: [],
            };
        });

        callbackChose(option_arr[option_ix]);
    }

    //
    function changeSearch(e) {
        const new_value_search = e.target.value;
        ref_value_search.current = new_value_search;

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                value_search: new_value_search,
            };
        });

        waitingToDoLast({
            ref_interval: ref_interval,
            time: 500,
            callback: getData_API,
        });
    }

    //
    function clearChoice() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                option_obj: { id: 0, title: '', img: '' },
                option_arr: initial_option_arr,
            };
        });
        callbackClear();
    }

    //
    return {
        is_active,
        option_arr,
        option_obj,
        value_search,

        showOptions,
        changeSearch,
        choseOption,
        clearChoice,
    };
}
