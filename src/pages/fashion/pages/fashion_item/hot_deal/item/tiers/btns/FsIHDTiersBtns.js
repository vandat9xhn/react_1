import React from 'react';
import PropTypes from 'prop-types';
//
import './FsIHDTiersBtns.scss';

//
FsIHDTiersBtns.propTypes = {
    can_confirm: PropTypes.bool,
    handleConfirm: PropTypes.func,
    handleClose: PropTypes.func,
};

//
function FsIHDTiersBtns({ can_confirm, handleConfirm, handleClose }) {
    //
    return (
        <div className="FsIHDTiersBtns">
            <div className="display-flex flex-end font-14px">
                <button
                    className="FsIHDTiersBtns_btn btn-active padding-8px border-blur cursor-pointer brs-5px hv-bg-blur"
                    onClick={handleClose}
                >
                    Trở Lại
                </button>

                <button
                    className={`FsIHDTiersBtns_btn margin-left-5px btn btn-hv btn-active padding-8px text-white bg-fashion-red cursor-pointer brs-5px ${
                        can_confirm ? 'pointer-events-none opacity-05' : ''
                    }`}
                    onClick={handleConfirm}
                >
                    Xác nhận
                </button>
            </div>
        </div>
    );
}

export default FsIHDTiersBtns;
