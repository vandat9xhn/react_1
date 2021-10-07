import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import './TextareaCaption.scss';

//
TextareaCaption.propTypes = {
    caption: PropTypes.string,
    textarea_class: PropTypes.string,
    textarea_props: PropTypes.object,

    onChange: PropTypes.func,
};

TextareaCaption.defaultProps = {
    caption: 'Caption',
    textarea_class: '',
    textarea_props: {},
};

//
function TextareaCaption({
    caption,
    value,
    textarea_class,
    textarea_props,

    onChange,
}) {
    //
    const ref_textarea = useRef(null);

    //
    function focusTextarea() {
        ref_textarea.current.focus();
    }

    //
    return (
        <div
            className="TextareaCaption pos-rel brs-5px overflow-hidden"
            onClick={focusTextarea}
        >
            <textarea
                ref={ref_textarea}
                className={`TextareaCaption_textarea w-100per border-none outline-none bg-transparent ${textarea_class}`}
                value={value}
                onChange={onChange}
                {...textarea_props}
            />

            <div className="TextareaCaption_caption pos-abs text-third pointer-events-none">
                {caption}
            </div>

            <div className="TextareaCaption_border pos-abs-100 border-blur brs-5px pointer-events-none"></div>
        </div>
    );
}

export default TextareaCaption;
