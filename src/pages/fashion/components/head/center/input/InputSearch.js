import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
//
import './InputSearch.scss';

//
function InputSearch({
    value_search,
    default_search,
    handled,
    placeholder,
    //
    handleChangeSearch,
    onSearch,
    refreshSearch,
}) {
    // ref
    const ref_input_search = useRef(null);

    // when enter
    function onKeyupSearch(event) {
        if (event.keyCode == 13) {
            onClickSearch();
        }
    }

    // when click icon key
    function onClickSearch() {
        if (ref_input_search.current.value.trim()) {
            onSearch(ref_input_search.current.value.replace(/\s+/, ' '));
        } else {
            refreshSearch && refreshSearch();
        }
    }

    //
    return (
        <div className="InputSearch bg-primary padding-4px brs-5px">
            <div className="InputSearch_row display-flex align-items-center">
                <input
                    className="InputSearch_input flex-grow-1 padding-4px"
                    type="text"
                    ref={ref_input_search}
                    placeholder={placeholder}
                    defaultValue={handled ? undefined : default_search}
                    onKeyUp={onKeyupSearch}
                    value={handled ? value_search : undefined}
                    onChange={handled ? handleChangeSearch : undefined}
                />

                <button
                    className="InputSearch_key btn btn-hv btn-active display-flex-center brs-5px cursor-pointer"
                    onClick={onClickSearch}
                    title="Search"
                >
                    <IconsInput y={200} size_icon="1rem" />
                </button>
            </div>
        </div>
    );
}

InputSearch.propTypes = {
    // func search
    onSearch: PropTypes.func,
    handled: PropTypes.bool,
    //
    placeholder: PropTypes.string,
    handled: PropTypes.bool,
    value_search: PropTypes.string,
    default_search: PropTypes.string,
    handleChangeSearch: PropTypes.func,
};

InputSearch.defaultProps = {
    placeholder: 'Search . . .',
    default_search: '',
    value_search: '',
    handled: false,
};

export default InputSearch;
