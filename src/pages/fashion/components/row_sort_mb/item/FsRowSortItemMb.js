import React from 'react';
import PropTypes from 'prop-types';
//
import './FsRowSortItemMb.scss';

//
FsRowSortItemMb.propTypes = {};

//
function FsRowSortItemMb({ name, ix, is_active, handleSort }) {
    //
    function onSort() {
        !is_active && handleSort(ix);
    }

    //
    return (
        <div
            className="FsRowSortItemMb w-100per text-align-center line-14px"
            onClick={onSort}
        >
            {name}
        </div>
    );
}

export default FsRowSortItemMb;
