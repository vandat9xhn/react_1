import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsEye from '../../../_icons_svg/icons_eye/IconsEye';
//
import InputNotValid from '../input_not_valid/InputNotValid';
//
import './InputNotValidPass.scss';

//
InputNotValidPass.propTypes = {
    password: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    max_length: PropTypes.number,

    handleChange: PropTypes.func,
};

InputNotValidPass.defaultProps = {
    placeholder: 'Password',
    max_length: 100,
}

//
function InputNotValidPass(props) {
    const {
        password,
        name,
        placeholder,
        max_length,

        handleChange,
    } = props;

    // 
    const [type, setType] = useState('password')

    //
    function toggleType(){
        setType(type == 'password' ? 'text' : 'password')
    } 

    // 
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
                <div
                    className="InputNotValidPass_eye-contain hv-opacity"
                    onClick={toggleType}
                >
                    <IconsEye x={200} y={200} close_eye={type == 'password'} />
                </div>
            </div>
        </div>
    );
}

export default InputNotValidPass;
