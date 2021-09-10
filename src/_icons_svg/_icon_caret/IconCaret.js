import React from 'react';
import PropTypes from 'prop-types';

//
IconCaret.propTypes = {
    class_icon: PropTypes.string,
    size_icon: PropTypes.string,

    x: PropTypes.number,
    y: PropTypes.number,
    stroke_width: PropTypes.number,
    fill: PropTypes.string,
};
IconCaret.defaultProps = {
    class_icon: '',
    size_icon: '0.5rem',

    x: 0,
    y: 0,
    stroke_width: 20,
    fill: 'var(--md-fill-secondary)',
};

function IconCaret({
    class_icon,
    size_icon,
    
    x,
    y,
    stroke,
    stroke_width,
    fill,
}) {
    //
    return (
        <svg
            className={`IconCaret ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke={fill}
            strokeWidth={stroke_width}
            fill={fill}
            strokeLinejoin="round"
        >
            <path d="M40,60 160,60 100,140Z" />
        </svg>
    );
}

export default IconCaret;
