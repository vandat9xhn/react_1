import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// 
import IconsInput from '../../../_icons_svg/Icons_input/IconsInput';
// 
import './InputSearch.scss';

//
function InputSearch(props) {
    // props
    const {
        value_search,
        default_search,
        handled,
        placeholder,
        // 
        handleChangeSearch,
        onSearch,
        refreshSearch,
    } = props;
    // ref
    const ref_input_search = useRef(null);

    // when enter
    function onKeyupSearch(event){
        if (event.keyCode == 13) {
            onClickSearch();
        }
    };

    // when click icon key
    function onClickSearch(){
        if (ref_input_search.current.value.trim()) {
            onSearch(ref_input_search.current.value.replace(/\s+/, ' '));
        } else {
            refreshSearch && refreshSearch();
        }
    };

    //
    return (
        <div className="InputSearch">
            <div className="InputSearch_contain">
                <div className="InputSearch_row brs-5px">
                    {/* input */}
                    <div className="InputSearch_input">
                        <input
                            type="text"
                            ref={ref_input_search}
                            placeholder={placeholder}
                            defaultValue={handled ? undefined : default_search}
                            onKeyUp={onKeyupSearch}
                            value={handled ? value_search : undefined}
                            onChange={handled ? handleChangeSearch : undefined}
                        />
                    </div>

                    {/* icon key */}
                    <div
                        className="InputSearch_key hv-opacity"
                        onClick={onClickSearch}
                        title="Search"
                    >
                        <IconsInput y={200} color="#b3b4bb" />
                    </div>
                </div>
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
