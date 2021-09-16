import React from 'react';
import PropTypes from 'prop-types';

//
FsPPrBtnConfirm.propTypes = {
    title: PropTypes.string,
    handleConfirm: PropTypes.func,
};

FsPPrBtnConfirm.defaultProps = {
    title: 'Xác nhận',
};

//
function FsPPrBtnConfirm({ title, handleConfirm }) {
    //
    return (
        <button
            className="btn btn-hv btn-active padding-y-8px padding-x-20px brs-2px bg-fashion-red text-white text-cap cursor-pointer"
            type="button"
            onClick={handleConfirm}
        >
            {title}
        </button>
    );
}

export default FsPPrBtnConfirm;
