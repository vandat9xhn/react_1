import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPPrFormChange.scss';

//
FsPPrFormChange.propTypes = {};

//
function FsPPrFormChange({ label, value, handleChange }) {
    //
    return (
        <div className="FsPPrFormChange text-555">
            <div className="FsPPrFormChange_row display-flex align-items-center">
                <div className="FsPPrFormChange_label fs-personal-profile-label">
                    {label}
                </div>

                <div className="flex-gow-1 display-flex">
                    <div className="FsPPrFormChange_value">{value}</div>

                    <button
                        className="FsPPrFormChange_btn border-none bg-transparent text-blue text-cap text-blue font-13px cursor-pointer"
                        type="button"
                        onClick={handleChange}
                    >
                        Thay đổi
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FsPPrFormChange;
