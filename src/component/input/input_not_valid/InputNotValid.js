import React from 'react';
import PropTypes from 'prop-types';
//
import { useFocusBlur } from '../../../_hooks/useFocusBlur';
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
    input_props: PropTypes.object,

    handle_focus: PropTypes.bool,
    focus_props: PropTypes.shape({
        is_focus: PropTypes.bool,
        handleFocus: PropTypes.func,
        handleBlur: PropTypes.func,
    }),
};

InputNotValid.defaultProps = {
    type: 'text',
    placeholder: 'Placeholder',
    max_length: 100,
    handle_focus: false,
    
    input_props: {},
};

//
function InputNotValid({
    name,
    value,
    type,
    placeholder,
    max_length,
    
    handleChange,
    handle_focus,
    focus_props,

    input_props,
}) {
    //
    const { is_focus, handleFocus, handleBlur } = !handle_focus
        ? useFocusBlur()
        : focus_props;

    //
    return (
        <div
            className={`InputNotValid pos-rel ${
                value !== '' || is_focus ? 'input-active' : ''
            } ${is_focus ? 'InputNotValid-focus' : ''}`}
        >
            <input
                className="InputNotValid_input brs-5px"
                name={name}
                value={value}
                type={type}
                maxLength={max_length}
                //
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                // 
                {...input_props}
            />

            <div
                className={`InputNotValid_placeholder input-placeholder text-nowrap ${
                    is_focus
                        ? 'InputNotValid_placeholder-focus input-placeholder-active'
                        : ''
                }`}
            >
                {placeholder}
            </div>
        </div>
    );
}

export default InputNotValid;
