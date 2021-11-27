import React from 'react';
import PropTypes from 'prop-types';

//
IconGroupNoticeDot.propTypes = {
    class_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,

    stroke: PropTypes.string,
    stroke_width: PropTypes.number,
};

IconGroupNoticeDot.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1rem',

    stroke: 'currentColor',
    stroke_width: 15,
};

//
function IconGroupNoticeDot({
    class_icon,
    x,
    y,
    size_icon,

    stroke,
    stroke_width,
}) {
    //
    return (
        <svg
            className={`IconGroupNoticeDot ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke={stroke}
            strokeWidth={stroke_width}
            fill="none"
            strokeLinecap="round"
        >
            <path d="M134.5 37.2973C99.5991 37.2973 70.7568 37.2973 35.8559 37.2973C25.5241 40.009 21.1075 42.8734 20 54.5945V161.261C20.5717 175.47 23.66 180.043 35.8559 180H141.081C153.784 178.122 157.696 174.134 158.378 161.261V59.5" />

            <circle fill={stroke} cx="155" cy="40" r="15" />
        </svg>
    );
}

export default IconGroupNoticeDot;
