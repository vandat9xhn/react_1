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
    handleChange: PropTypes.func,
    handleSearch: PropTypes.func,
    placeholder: PropTypes.string,
};
SearchAnimateDiv.defaultProps = {
    value: '',
    placeholder: 'Search...',
}

//
function SearchAnimateDiv(props) {
    const { value, placeholder, handleChange, handleSearch } = props;
    //
    const [is_open, setIsOpen] = useState(false);

    //
    function onClick() {
        if (is_open) {
            handleSearch();
        } else {
            setIsOpen(true);
        }
    }
    //
    function handleClose() {
        setIsOpen(false);
    }

    //
    function onChange(e) {
        handleChange(e.target.value);
    }
    //
    function onKeyDown(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            handleSearch();
        }
    }
    //
    function handleClear() {
        handleChange('');
    }

    //
    return (
        <div className={`SearchAnimateDiv pos-rel ${is_open ? '' : 'SearchAnimateDiv_close'}`}>
            <div className="SearchAnimateDiv_key">
                <div
                    className={`SearchAnimateDiv_key-contain display-flex justify-content-center align-items-center cursor-pointer ${
                        is_open ? 'nav-active' : ''
                    }`}
                    onClick={onClick}
                >
                    <IconsInput y={200} />
                </div>
            </div>

            <div className="SearchAnimateDiv_input">
                <input
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />

                <div
                    className="SearchAnimateDiv_input-clear"
                    onClick={handleClear}
                >
                    <IconsArrow y={400} size_icon="0.8rem" />
                </div>
            </div>

            <div className="SearchAnimateDiv_right">
                <div className="SearchAnimateDiv_icon-close display-flex justify-content-center align-items-center">
                    <div
                        className="close-icon-small brs-50 cursor-pointer"
                        onClick={handleClose}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchAnimateDiv;
