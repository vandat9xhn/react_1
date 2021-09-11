import React from 'react';
import PropTypes from 'prop-types';

//
FsSCSortItem.propTypes = {};

//
function FsSCSortItem({ name, ix, is_active, handleSort }) {
    //
    function onSort() {
        !is_active && handleSort(ix);
    }

    //
    return (
        <div
            className={`FsSCSortItem padding-x-15px padding-y-5px brs-3px cursor-pointer ${
                is_active ? 'text-white bg-fashion-red' : 'bg-primary'
            }`}
            onClick={onSort}
        >
            {name}
        </div>
    );
}

export default FsSCSortItem;
