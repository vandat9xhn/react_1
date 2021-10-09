import React from 'react';
import PropTypes from 'prop-types';

//
CUPostChoiceLabelMb.propTypes = {};

//
function CUPostChoiceLabelMb({ Icon, title, handleClick }) {
    //
    return (
        <div
            className="CUPostChoiceLabelMb padding-10px line-16px"
            onClick={handleClick}
        >
            <div className="CUPostChoiceLabelMb_row display-flex align-items-center">
                <div className="padding-right-12px">{Icon}</div>

                <div className="font-500">{title}</div>
            </div>
        </div>
    );
}

export default CUPostChoiceLabelMb;
