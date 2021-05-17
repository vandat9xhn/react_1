import React from 'react';
import PropTypes from 'prop-types';
//
import './InputNotValid.scss';
//
InputNotValid.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    max_length: PropTypes.number,
    // 
    value: PropTypes.string,
    handleChange: PropTypes.func,
};

function InputNotValid(props) {
    const { name, value, type, placeholder, max_length, handleChange } = props;

    return (
        <div
            className={`InputNotValid ${value !== '' ? 'InputNotValid_text' : ''}`}
        >
            <input
                className="InputNotValid_input brs-5px"
                name={name}
                type={type}
                maxLength={max_length}
                // 
                value={value}
                onChange={handleChange}
            />
            <div className="InputNotValid_placeholder">{placeholder}</div>
        </div>
    );
}

export default InputNotValid;
