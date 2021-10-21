import React from 'react';
import PropTypes from 'prop-types';
//
import './PLDetailScreenHeadItem.scss';

//
PLDetailScreenHeadItem.propTypes = {};

//
function PLDetailScreenHeadItem({ is_active, ix, title, handleClick }) {
    //
    function onClick() {
        is_active && handleClick(ix);
    }

    //
    return (
        <div
            className={`PLDetailScreenHeadItem ${
                is_active ? 'PLDetailScreenHeadItem-active' : 'cursor-pointer'
            }`}
            onClick={onClick}
        >
            {title}
        </div>
    );
}

export default PLDetailScreenHeadItem;
