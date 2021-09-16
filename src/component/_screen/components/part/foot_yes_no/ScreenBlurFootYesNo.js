import React from 'react';
import PropTypes from 'prop-types';
//
import './ScreenBlurFootYesNo.scss';

//
ScreenBlurFootYesNo.propTypes = {
    title_yes: PropTypes.string,
    title_no: PropTypes.string,
    disabled: PropTypes.bool,

    handleConfirm: PropTypes.func,
    closeScreenBlur: PropTypes.func,
};

ScreenBlurFootYesNo.defaultProps = {
    title_yes: 'Yes',
    title_no: 'No',
    disabled: false,
};

//
function ScreenBlurFootYesNo({
    title_yes,
    title_no,
    disabled,

    handleConfirm,
    closeScreenBlur,
}) {
    //
    return (
        <div className="ScreenBlurFootYesNo padding-10px">
            <div className="flex-end">
                <button
                    className={`ScreenBlurFootYesNo_btn ScreenBlurFootYesNo_btn-yes btn btn-hv btn-active ${
                        disabled ? 'pointer-events-none opacity-05' : ''
                    }`}
                    onClick={handleConfirm}
                >
                    {title_yes}
                </button>

                <button
                    className="ScreenBlurFootYesNo_btn ScreenBlurFootYesNo_btn-no btn btn-hv btn-active"
                    onClick={closeScreenBlur}
                >
                    {title_no}
                </button>
            </div>
        </div>
    );
}

export default ScreenBlurFootYesNo;
