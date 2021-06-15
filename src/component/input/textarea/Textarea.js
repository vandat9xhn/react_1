import React from 'react';
import PropTypes from 'prop-types';
//
import TextareaNotSend from './TextareaNotSend';

//
Textarea.propTypes = {
    text: PropTypes.string,
    placeholder: PropTypes.string,
    textarea_class: PropTypes.string,
    //
    onChange: PropTypes.func,
    handleSend: PropTypes.func,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,
};

//
function Textarea({
    text,
    placeholder,
    textarea_class,

    onChange,
    handleBlur,
    handleFocus,
    handleSend,
}) {
    //
    const onKeyDown = (e) => {
        if (!e.shiftKey && e.keyCode == 13) {
            if (localStorage.is_mobile == 0) {
                e.preventDefault();
                handleSend();
                e.target.style.height = 'auto';
            }
        }
    };

    //
    return (
        <TextareaNotSend
            text={text}
            textarea_class={textarea_class}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onChange={onChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
        />
    );
}

export default Textarea;
