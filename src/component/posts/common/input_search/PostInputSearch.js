import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../_icons_svg/Icons_input/IconsInput';
//
import './PostInputSearch.scss';

//
PostInputSearch.propTypes = {};

//
function PostInputSearch({
    value,
    placeholder,
    changeSearch,
    input_props = {},

    class_input = 'PostInputSearch_input-36px' || 'PostInputSearch_input-40px',
    hide_key_when_focus = true,
}) {
    //
    const ref_input = useRef(null);

    // ------

    //
    function focusInput() {
        ref_input.current.focus();
    }

    //
    return (
        <label
            className={`PostInputSearch pos-rel display-block ${
                hide_key_when_focus ? 'PostInputSearch-hide_key' : ''
            }`}
            onClick={focusInput}
        >
            <input
                ref={ref_input}
                className={`PostInputSearch_input w-100per border-none brs-20px bg-fb outline-none ${class_input}`}
                value={value}
                type="search"
                placeholder={placeholder}
                spellCheck={false}
                onChange={changeSearch}
                {...input_props}
            />

            <div className="PostInputSearch_key pos-abs y-center display-flex-center">
                <IconsInput y={200} size_icon="16px" />
            </div>
        </label>
    );
}

export default PostInputSearch;
