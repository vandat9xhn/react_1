import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../_icons_svg/Icons_input/IconsInput';
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';
//
import './SearchAnimateDiv.scss';

//
SearchAnimateDiv.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    input_props: PropTypes.object,

    handleChange: PropTypes.func,
    handleSearch: PropTypes.func,
};
SearchAnimateDiv.defaultProps = {
    value: '',
    placeholder: 'Search...',
    input_props: {},
};

//
function SearchAnimateDiv({
    value,
    placeholder,
    input_props,
    is_open,

    handleOpen,
    handleChange,
    handleSearch,
}) {
    // -----------

    //
    function openSearch() {
        handleOpen(true);
    }
    //
    function handleClose() {
        handleOpen(false);
    }

    //
    function onChange(e) {
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
    function handleClear() {
        handleChange('');
    }

    //
    return (
        <div
            className={`SearchAnimateDiv pos-rel display-flex align-items-center w-100per padding-x-12px padding-y-8px bg-primary overflow-hidden ${
                is_open ? '' : 'SearchAnimateDiv-close'
            }`}
        >
            <div className="display-flex align-items-center w-100per">
                <div
                    className={`${
                        is_open
                            ? 'SearchAnimateDiv_right btn-icon-36px cursor-pointer'
                            : 'display-none'
                    }`}
                    onClick={handleClose}
                >
                    <IconsArrow x={200} y={200} size_icon="1.5rem" />
                </div>

                <div
                    className={`${
                        is_open
                            ? 'display-none'
                            : 'SearchAnimateDiv_key display-flex-center cursor-pointer'
                    }`}
                    onClick={openSearch}
                >
                    <IconsInput y={200} />
                </div>

                <div className="SearchAnimateDiv_input flex-grow-1 flex-between-center margin-left-5px padding-x-10px padding-y-4px brs-15px bg-fb">
                    <input
                        className="flex-grow-1 bg-transparent border-none outline-none"
                        type="text"
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        {...input_props}
                    />

                    <div
                        className={`${
                            value
                                ? 'SearchAnimateDiv_input-clear btn-icon-24px cursor-pointer'
                                : 'display-none'
                        }`}
                        onClick={handleClear}
                    >
                        <IconsArrow y={400} size_icon="0.8rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchAnimateDiv;
