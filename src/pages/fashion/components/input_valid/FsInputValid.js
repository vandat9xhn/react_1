import React from 'react';
import PropTypes from 'prop-types';
//
import { useFocusBlur } from '../../../../_hooks/useFocusBlur';
//
import InputNotValid from '../../../../component/input/input_not_valid/InputNotValid';
// 
import './FsInputValid.scss';

//
FsInputValid.propTypes = {};

//
function FsInputValid({
    value,
    name,
    type,
    placeholder,

    is_error,
    error_message,

    handleChange,
}) {
    //
    const { is_focus, handleFocus, handleBlur } = useFocusBlur();

    //
    return (
        <div
            className={`FsInputValid ${
                is_focus || !is_error ? '' : 'FsInputValid-wrong'
            }`}
        >
            <InputNotValid
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                handleChange={handleChange}
                //
                handle_focus={true}
                focus_props={{
                    is_focus: is_focus,
                    handleFocus: handleFocus,
                    handleBlur: handleBlur,
                }}
            />

            {is_error ? (
                <div
                    className={`margin-top-5px text-red font-12px ${
                        !is_focus && is_error ? '' : 'display-none'
                    }`}
                >
                    {error_message}
                </div>
            ) : null}
        </div>
    );
}

export default FsInputValid;
