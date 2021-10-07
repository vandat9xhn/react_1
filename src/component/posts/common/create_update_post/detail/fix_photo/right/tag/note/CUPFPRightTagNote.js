import React from 'react';
import PropTypes from 'prop-types';

//
CUPFPRightTagNote.propTypes = {};

//
function CUPFPRightTagNote({ is_show }) {
    //
    return (
        <div
            className={`CUPFPRightTagNote padding-y-10px text-white font-600 font-17px ${
                is_show ? '' : 'display-none'
            }`}
        >
            Click on the photo to start tagging
        </div>
    );
}

export default CUPFPRightTagNote;
