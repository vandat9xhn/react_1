import React from 'react';
import PropTypes from 'prop-types';

//
FsPerUpdateInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    error_message: PropTypes.string,
    input_props: PropTypes.object,

    handleChange: PropTypes.func,
};

FsPerUpdateInput.defaultProps = {
    type: 'text',
    input_props: {},
};

//
function FsPerUpdateInput({
    label,
    value,
    type,
    error_message,
    input_props,

    handleChange,
}) {
    //
    return (
        <div className="FsPerUpdateInput">
            <div className="fs-personal-input-row display-flex align-items-center">
                <div className="fs-personal-input-label">{label}</div>

                <input
                    className={`fs-personal-update-input padding-8px outline-none ${
                        error_message ? 'border-danger text-red' : 'border-blur'
                    }`}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    {...input_props}
                />
            </div>

            {error_message ? (
                <div className="fs-personal-update-error margin-top-10px text-red">
                    {error_message}
                </div>
            ) : null}
        </div>
    );
}

export default FsPerUpdateInput;
