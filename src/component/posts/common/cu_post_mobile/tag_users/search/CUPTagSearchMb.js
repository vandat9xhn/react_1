import React from 'react';
import PropTypes from 'prop-types';

//
CUPTagSearchMb.propTypes = {};

//
function CUPTagSearchMb({ value, handleChange }) {
    //
    return (
        <div className="CUPTagSearchMb">
            <input
                className="w-100per padding-5px border-blur outline-none"
                type="text"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default CUPTagSearchMb;
