import React from 'react';
import PropTypes from 'prop-types';
//
import './ScreenBlurFootYesNo.scss';

//
ScreenBlurFootYesNo.propTypes = {
    disabled: PropTypes.bool,
    handleConfirm: PropTypes.func,
    closeScreenBlur: PropTypes.func,
};

ScreenBlurFootYesNo.defaultProps = {
    disabled: false,
};

//
function ScreenBlurFootYesNo({ disabled, handleConfirm, closeScreenBlur }) {
    //
    return (
        <div className="ScreenBlurFootYesNo_foot">
            <div className="ScreenBlurFootYesNo_foot_row">
                <div
                    className={`ScreenBlurFootYesNo_foot__btn ScreenBlurFootYesNo_foot__btn-yes ${
                        disabled ? 'pointer-events-none opacity-05' : ''
                    }`}
                    onClick={handleConfirm}
                >
                    Yes
                </div>
                <div
                    className="ScreenBlurFootYesNo_foot__btn ScreenBlurFootYesNo_foot__btn-no"
                    onClick={closeScreenBlur}
                >
                    No
                </div>
            </div>
        </div>
    );
}

export default ScreenBlurFootYesNo;
