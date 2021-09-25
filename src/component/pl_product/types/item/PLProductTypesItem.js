import React from 'react';
import PropTypes from 'prop-types';

//
PLProductTypesItem.propTypes = {};

//
function PLProductTypesItem({ ix, is_active, title, handleClick }) {
    //
    function onClick(e) {
        e.preventDefault()
        !is_active && handleClick(ix);
    }

    //
    return (
        <button
            className={`padding-x-5px padding-y-3px brs-3px cursor-pointer ${
                is_active ? 'border-blue' : 'border-blur'
            }`}
            type="button"
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default PLProductTypesItem;
