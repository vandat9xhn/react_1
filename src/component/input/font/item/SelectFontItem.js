import React from 'react';
import PropTypes from 'prop-types';

//
SelectFontItem.propTypes = {
    font_family: PropTypes.string,
    handleChangeFont: PropTypes.func,
};

//
function SelectFontItem({ ix, font_family, handleChangeFont }) {
    //
    function onChangeFont() {
        handleChangeFont(ix);
    }

    //
    return (
        <div
            className="SelectFontItem padding-8px cursor-pointer"
            onClick={onChangeFont}
        >
            <span className="label-field" style={{ fontFamily: font_family }}>
                {font_family}
            </span>
        </div>
    );
}

export default SelectFontItem;
