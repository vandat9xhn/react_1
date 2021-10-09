import React from 'react';
import PropTypes from 'prop-types';
//
import { makeAutoHeight } from '../../../_some_function/makeAutoHeight';
//
import './TextareaNotSend.scss';

//
TextareaNotSend.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    textarea_class: PropTypes.string,
    //
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,

    textarea_props: PropTypes.object,
};

TextareaNotSend.defaultProps = {
    name: '',
    textarea_props: {},
};

//
function TextareaNotSend({
    name,
    text,
    placeholder,
    textarea_class,

    handleBlur,
    handleFocus,
    onKeyDown,
    onChange,

    textarea_props,
}) {
    //
    const handleChange = (e) => {
        onChange(e.target.value);
        makeAutoHeight(e);
    };

    //
    return (
        <textarea
            className={`${textarea_class} TextareaNotSend`}
            rows={1}
            name={name}
            value={text}
            placeholder={placeholder}
            //
            onKeyDown={onKeyDown}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...textarea_props}
        />
    );
}

export default TextareaNotSend;
