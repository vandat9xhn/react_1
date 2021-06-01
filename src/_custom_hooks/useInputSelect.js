import { useState } from 'react';
import PropTypes from 'prop-types';

//
export function useInputSelect({
    all_data_arr,
    initial_data_str,
    multiple = true,
    delimiter = ',',
}) {
    //
    const [data_item_edit_state, setLangEditState] = useState({
        cur_data_arr: initial_data_str ? initial_data_str.split(delimiter) : [],
        value_input: '',
        option_data_arr: all_data_arr.filter(
            (item) => !initial_data_str.includes(item)
        ),
    });

    const { cur_data_arr, value_input, option_data_arr } = data_item_edit_state;

    //
    function handleChangeInput(e) {
        const new_value = e.target.value;
        setLangEditState({
            ...data_item_edit_state,
            value_input: new_value,
            option_data_arr: all_data_arr
                .filter((item) => !cur_data_arr.includes(item))
                .filter((item) =>
                    item.toLowerCase().includes(new_value.toLowerCase())
                ),
        });
    }

    //
    function handleSelectOption(new_ix) {
        const new_data_item_arr = multiple
            ? [...cur_data_arr, option_data_arr[new_ix]]
            : [option_data_arr[new_ix]];

        !cur_data_arr.includes(option_data_arr[new_ix]) &&
            setLangEditState({
                ...data_item_edit_state,
                cur_data_arr: new_data_item_arr,
                value_input: '',
                option_data_arr: (multiple
                    ? option_data_arr
                    : all_data_arr
                ).filter((_, ix) => ix != new_ix),
            });
    }

    //
    function handleRemoveSelectedItem(remove_ix) {
        setLangEditState({
            ...data_item_edit_state,
            cur_data_arr: cur_data_arr.filter((_, ix) => ix != remove_ix),
            option_data_arr: [
                ...option_data_arr,
                cur_data_arr[remove_ix],
            ].filter((item) =>
                item
                    .toLocaleLowerCase()
                    .includes(value_input.toLocaleLowerCase())
            ),
        });
    }

    //
    return {
        cur_data_arr,
        option_data_arr,
        value_input,

        handleChangeInput,
        handleSelectOption,
        handleRemoveSelectedItem,
    };
}
