import React from 'react';
import PropTypes from 'prop-types';

import './InputNotValidPass.scss';
import InputNotValid from '../input_not_valid/InputNotValid';
import IconsEye from '../../../_icons_svg/icons_eye/IconsEye';
//
InputNotValidPass.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    max_length: PropTypes.number,
    // 
    password: PropTypes.string,
    handleChange: PropTypes.func,
    // 
    toggleType: PropTypes.func,
};

function InputNotValidPass(props) {
    const {
        name,
        type,
        placeholder,
        max_length,
        // 
        password,
        handleChange,
        // 
        toggleType,
    } = props;

    return (
        <div className="InputNotValidPass">
            {/* input */}
            <div>
                <InputNotValid
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    max_length={max_length}
                    //
                    value={password}
                    handleChange={handleChange}
                />
            </div>

            {/* eye */}
            <div className="InputNotValidPass_eye">
                <div className="InputNotValidPass_eye-contain hv-opacity" onClick={toggleType}>
                    <IconsEye x={200} y={200} close_eye={type == 'password'} />
                </div>
            </div>
        </div>
    );
}

export default InputNotValidPass;
