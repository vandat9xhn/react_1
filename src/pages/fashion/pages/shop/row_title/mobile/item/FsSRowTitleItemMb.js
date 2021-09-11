import React from 'react';
import PropTypes from 'prop-types';
// 
import './FsSRowTitleItemMb.scss';

//
FsSRowTitleItemMb.propTypes = {};

//
function FsSRowTitleItemMb({ name, title, is_active, handleClick }) {
    //
    function onClick() {
        handleClick(name);
    }

    //
    return (
        <div
            className={`FsSRowTitleItemMb padding-10px ${
                is_active ? 'FsSRowTitleItemMb-active color-fashion' : ''
            }`}
            onClick={onClick}
        >
            {title}
        </div>
    );
}

export default FsSRowTitleItemMb;
