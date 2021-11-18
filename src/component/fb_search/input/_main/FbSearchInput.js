import React from 'react';
import PropTypes from 'prop-types';
//
import { useFbSearchInput } from '../../../../_hooks/search/useFbSearchInput';
//
import FbSearchInputElm from '../elm/FbSearchInputElm';
//
import './FbSearchInput.scss';

//
FbSearchInput.propTypes = {};

//
function FbSearchInput({
    initial_value = '',
    initial_open = false,
    always_open = false,

    placeholder,
    class_input,
    use_back,
    params_api,
}) {
    //
    const {
        is_open,
        show_contain,
        value,

        handleFocus,
        handleChange,
        handleClose,
        onSearch,
    } = useFbSearchInput({
        initial_value: initial_value,
        initial_open: initial_open,
        always_open: always_open,
    });

    //
    return (
        <FbSearchInputElm
            value={value}
            placeholder={placeholder}
            class_input={class_input}
            //
            is_open={is_open}
            show_contain={show_contain}
            use_back={use_back}
            params_api={params_api}
            //
            handleFocus={handleFocus}
            handleChange={handleChange}
            onSearch={onSearch}
            handleClose={handleClose}
        />
    );
}

export default FbSearchInput;
