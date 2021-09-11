import React from 'react';
import PropTypes from 'prop-types';
//
import './FsSProductsSortItemMb.scss';

//
FsSProductsSortItemMb.propTypes = {};

//
function FsSProductsSortItemMb({ name, ix, is_active, handleSort }) {
    //
    function onSort() {
        !is_active && handleSort(ix);
    }

    //
    return (
        <div
            className="FsSProductsSortItemMb w-100per text-align-center line-14px"
            onClick={onSort}
        >
            {name}
        </div>
    );
}

export default FsSProductsSortItemMb;
