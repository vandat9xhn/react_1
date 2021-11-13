import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useSelectOneSearch } from '../../../../../../_hooks/useSelectOneSearch';
import { useSwitchLocationSearch } from '../../../../../../_hooks/useSwitchLocationSearch';
//
import SelectOneSearch from '../../../../../input/select_one_search/_main/SelectOneSearch';
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';

//
FbSearchPageFilterSelect.propTypes = {};

//
function FbSearchPageFilterSelect({
    params_key,

    title,
    use_input,
    placeholder,
    ItemComponent,

    initial_option_arr,
    initial_option_obj,
}) {
    //
    const {
        is_active,
        option_arr,
        option_obj,
        value_search,

        showOptions,
        changeSearch,
        choseOption,
        clearChoice,
    } = useSelectOneSearch({
        initial_option_arr: initial_option_arr,
        initial_option_obj: initial_option_obj,
        callbackChose: callbackChose,
        callbackClear: callbackClear,
    });

    //
    const { changeLocationSearch } = useSwitchLocationSearch();

    //
    useEffect(() => {
        if (!(params_key in ParseLocationSearch())) {
            clearChoice();
        }
    }, [location.search]);

    // useEffect(() => {
    //     console.log(params_key in ParseLocationSearch(), initial_option_arr);
    //     if (params_key in ParseLocationSearch()) {
    //         initial_option_arr.length >= 0 && choseOption(0);
    //     }
    // }, []);

    // -------

    //
    function callbackChose(new_option_obj) {
        const { id } = new_option_obj;

        changeLocationSearch({
            search_key: params_key,
            search_value: id,
        });
    }

    //
    function callbackClear() {
        changeLocationSearch({
            search_key: params_key,
            search_value: '',
        });
    }

    //
    return (
        <div className="FbSearchPageFilterSelect">
            <SelectOneSearch
                title={title}
                is_active={is_active}
                title_choice={option_obj.title}
                //
                use_input={use_input}
                value_search={value_search}
                placeholder={placeholder}
                //
                option_arr={option_arr}
                ItemComponent={ItemComponent}
                //
                showOptions={showOptions}
                changeSearch={changeSearch}
                choseOption={choseOption}
                clearChoice={clearChoice}
            />
        </div>
    );
}

export default FbSearchPageFilterSelect;
