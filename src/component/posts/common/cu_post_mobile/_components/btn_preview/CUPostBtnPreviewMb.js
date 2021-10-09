import React from 'react';
import PropTypes from 'prop-types';
// 
import './CUPostBtnPreviewMbMb.scss';

//
CUPostBtnPreviewMb.propTypes = {};

//
function CUPostBtnPreviewMb({ children, handleClick }) {
    //
    return (
        <button
            className="CUPostBtnPreviewMbMb display-flex-center btn brs-50 bg-shadow-5"
            type="button"
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default CUPostBtnPreviewMb;
