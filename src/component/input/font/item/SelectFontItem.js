import React from 'react';
import PropTypes from 'prop-types';
// 
import './SelectFontItem.scss'

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
            className="SelectFontItem cursor-pointer hv-bg-blur"
            onClick={onChangeFont}
        >
            <span className="font-500" style={{ fontFamily: font_family }}>
                {font_family}
            </span>
        </div>
    );
}

export default SelectFontItem;
