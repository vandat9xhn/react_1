import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPPrFormInput.scss';

//
FsPPrFormInput.propTypes = {};

//
function FsPPrFormInput({ label, value, handleChange }) {
    //
    return (
        <div className="FsPPrFormInput">
            <div className="FsPPrFormInput_row fs-personal-profile-row display-flex align-items-center">
                <div className="FsPProfileForm_left fs-personal-profile-label">
                    {label}
                </div>

                <input
                    className="FsPPrFormInput_input flex-grow-1 input padding-8px border-blur text-primary-08"
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default FsPPrFormInput;
