import React from 'react';
import PropTypes from 'prop-types';
//
import './SelectColorBgItem.scss';

//
SelectColorBgItem.propTypes = {};

//
function SelectColorBgItem({ ix, color, bg, handleChangeColorBg }) {
    //
    function onChangeColorBg() {
        handleChangeColorBg(ix);
    }

    //
    return (
        <div
            className={`SelectColorBgItem padding-4px text-align-center cursor-pointer ${bg} ${color}`}
            onClick={onChangeColorBg}
        >
            Color
        </div>
    );
}

export default SelectColorBgItem;
