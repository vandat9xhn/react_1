import { useState } from 'react';
import { useStopLoadingTyping } from './useStopTyping';

//
export function useInputSelectLoading({
    initial_selected_arr = [],
    handle_API_L = () => new Promise(),
    multiple = true,
}) {
    //
    const [input_select_state, setInputSelectState] = useState({
        value_input: '',
        selected_arr: initial_selected_arr,
        option_arr: [],
        option_count: 0,

        open_option: false,
        has_fetched: false,
        is_fetching: false,
    });

    const {
        value_input,
        option_arr,
        selected_arr,
        option_count,

        open_option,
        has_fetched,
        is_fetching,
    } = input_select_state;

    //
    const { handleChangeTying } = useStopLoadingTyping({
        time_stop: 500,
        callback: handleGetDataAfterChange,
    });

    /* ------------------ GET API ---------------- */

    //
    async function getData_API({
        is_has_fetched = false,
        start_obj_state = {},
    }) {
        setInputSelectState((input_select_state) => ({
            ...input_select_state,
            has_fetched: is_has_fetched,
            is_fetching: true,
            ...start_obj_state,
        }));

        const { data, count: new_option_count } = await handle_API_L({
            c_option_count: is_has_fetched ? option_arr.length : 0,
        });

        setInputSelectState((input_select_state) => {
            return {
                ...input_select_state,
                option_arr: is_has_fetched
                    ? [...input_select_state.option_arr, ...data]
                    : data,
                option_count: is_has_fetched ? option_count : new_option_count,

                has_fetched: true,
                is_fetching: false,
            };
        });
    }

    //
    function handleShowMore() {
        if (option_count <= option_arr.length) {
            return;
        }

        getData_API({
            is_has_fetched: true,
        });
    }

    /* ------------------ INPUT ---------------- */

    //
    function handleChangeInput(e) {
        handleChangeTying();

        setInputSelectState({
            ...input_select_state,
            value_input: e.target.value,
        });
    }

    //
    function handleGetDataAfterChange() {
        getData_API({
            has_fetched: false,
            start_obj_state: {
                // value_input: e.target.value,
                option_arr: [],
                option_count: 0,
            },
        });
    }

    /* ------------------ OPTION ---------------- */

    //
    function handleShowOption() {
        if (has_fetched) {
            setInputSelectState({
                ...input_select_state,
                open_option: true,
            });
        } else {
            getData_API({ start_obj_state: { open_option: true } });
        }
    }

    //
    function handleHideOption() {
        setInputSelectState({
            ...input_select_state,
            open_option: false,
        });
    }

    //
    function handleSelectOption(select_ix) {
        if (!multiple) {
            setInputSelectState({
                ...input_select_state,
                value_input: '',
                selected_arr: [option_arr[select_ix]],
                option_arr: [],
                option_count: 0,
            });
        }
        //
        else {
            setInputSelectState({
                ...input_select_state,
                value_input: '',
                selected_arr: [...selected_arr, option_arr[select_ix]],
                option_arr: option_arr.filter((_, ix) => ix != select_ix),
                option_count: option_count - 1,
            });
        }
    }

    /* ------------------ SELECTED ---------------- */

    //
    function handleRemoveSelectedItem(remove_ix) {
        if (!multiple) {
            setTimeout(() => {
                getData_API({
                    // has_fetched: false,
                    start_obj_state: {
                        open_option: true,
                        selected_arr: [],
                    },
                });
            }, 0);
        }
        //
        else {
            setInputSelectState({
                ...input_select_state,
                selected_arr: selected_arr.filter((_, ix) => ix != remove_ix),
                option_arr: [...option_arr, selected_arr[remove_ix]],
                option_count: option_count + 1,
            });
        }
    }

    //
    return {
        value_input,
        option_arr,
        selected_arr,
        option_count,

        has_fetched,
        is_fetching,
        open_option,

        handleShowOption,
        handleHideOption,
        handleSelectOption,

        handleChangeInput,
        handleShowMore,
        handleRemoveSelectedItem,

        setInputSelectState,
    };
}
