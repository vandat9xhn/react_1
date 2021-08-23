import React from 'react';
import PropTypes from 'prop-types';

//
FsIRateFilterItem.propTypes = {};

//
function FsIRateFilterItem({ ix, count, handleClick }) {
    //
    function onClick() {
        handleClick(ix);
    }

    //
    return (
        <div className="FsIRateFilterItem" onClick={onClick}>
            {ix} Sao ({count})
        </div>
    );
}

export default FsIRateFilterItem;
