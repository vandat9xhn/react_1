import React from 'react';
import PropTypes from 'prop-types';
// 
import './TextareaNotSend.scss';

//
TextareaNotSend.propTypes = {
    text: PropTypes.string,
    placeholder: PropTypes.string,
    textarea_class: PropTypes.string,
    //
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,
};

//
function TextareaNotSend(props) {
    const {
        text,
        placeholder,
        textarea_class,

        handleBlur,
        handleFocus,
        onKeyDown,
    } = props;
    
    //
    const onChange = (e) => {
        props.onChange(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    };
    
    //
    return (
        <textarea
            className={`${textarea_class} TextareaNotSend`}
            rows={1}
            placeholder={placeholder}
            value={text}
            onKeyDown={onKeyDown}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
}

export default TextareaNotSend;
