import React from 'react';
import PropTypes from 'prop-types';

//
FsPerBtnConfirm.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    handleConfirm: PropTypes.func,
};

FsPerBtnConfirm.defaultProps = {
    title: 'Xác nhận',
    type: 'button',
};

//
function FsPerBtnConfirm({ title, type, handleConfirm }) {
    //
    return (
        <button
            className="btn btn-hv btn-active padding-y-8px padding-x-20px brs-2px bg-fashion-red text-white text-cap cursor-pointer"
            type={type}
            onClick={handleConfirm}
        >
            {title}
        </button>
    );
}

export default FsPerBtnConfirm;
