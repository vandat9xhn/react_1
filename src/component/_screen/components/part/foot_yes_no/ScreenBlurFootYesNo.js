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
        <div className="ScreenBlurFootYesNo padding-15px">
            <div className="flex-end">
                <button
                    className="ScreenBlurFootYesNo_btn margin-right-10px btn text-blue hv-bg-hv"
                    onClick={closeScreenBlur}
                >
                    {title_no}
                </button>

                <button
                    className={`ScreenBlurFootYesNo_btn btn ${
                        disabled
                            ? 'bg-ccc text-smoke pointer-events-none'
                            : 'btn-hv bg-blue text-white'
                    }`}
                    onClick={handleConfirm}
                >
                    {title_yes}
                </button>
            </div>
        </div>
    );
}

export default ScreenBlurFootYesNo;
