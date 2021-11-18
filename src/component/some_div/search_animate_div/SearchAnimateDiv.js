import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';
//
import PostInputSearch from '../../posts/common/input_search/PostInputSearch';
//
import './SearchAnimateDiv.scss';

//
SearchAnimateDiv.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    input_props: PropTypes.object,
    show_contain: PropTypes.bool,

    handleClose: PropTypes.func,
    handleChange: PropTypes.func,
    handleSearch: PropTypes.func,
};
SearchAnimateDiv.defaultProps = {
    value: '',
    placeholder: 'Click to search...',
    input_props: {},
};

//
function SearchAnimateDiv({
    value,
    placeholder,
    class_input,
    input_props,

    show_contain,
    use_back = true,

    handleClose,
    handleChange,
    handleSearch,
}) {
    // -----------

    //
    function changeSearch(e) {
        handleChange(e.target.value);
    }

    //
    function onKeyDown(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            handleSearch && handleSearch();
        }
    }

    //
    return (
        <div className="SearchAnimateDiv">
            <div className="display-flex align-items-center">
                {show_contain && use_back ? (
                    <div
                        className="SearchAnimateDiv_right margin-right-5px btn-icon-36px cursor-pointer"
                        onClick={handleClose}
                    >
                        <IconsArrow x={200} y={200} size_icon="1.5rem" />
                    </div>
                ) : null}

                <div className="SearchAnimateDiv_input flex-grow-1">
                    <PostInputSearch
                        value={value}
                        placeholder={placeholder}
                        input_props={{ ...input_props, onKeyDown: onKeyDown }}
                        changeSearch={changeSearch}
                        class_input={class_input}
                        //
                        hide_key_when_focus={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchAnimateDiv;
