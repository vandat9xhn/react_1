import React from 'react';
import PropTypes from 'prop-types';
//
import './CUPostConfirmBtns.scss';

//
CUPostConfirmBtns.propTypes = {};

//
function CUPostConfirmBtns({ has_change, handleConfirm, handleCancel }) {
    //
    return (
        <div className="CUPostConfirmBtns">
            <div className="flex-between-center">
                <button
                    className={`CUPostConfirmBtns_btn text-white ${
                        has_change
                            ? 'btn-hv bg-blue cursor-pointer'
                            : 'bg-ccc cursor-not-allowed'
                    }`}
                    type="button"
                    onClick={handleConfirm}
                >
                    Save
                </button>

                <button
                    className="CUPostConfirmBtns_btn btn-hv bg-ccc cursor-pointer"
                    type="button"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default CUPostConfirmBtns;
