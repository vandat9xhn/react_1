import React from 'react';
import PropTypes from 'prop-types';
//
// import './IconFollow.scss';

//
IconFollow.propTypes = {
    class_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,

    stroke: PropTypes.string,
    stroke_width: PropTypes.number,
    fill: PropTypes.string,

    stroke_plus: PropTypes.string,
};

IconFollow.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1rem',

    stroke: 'currentColor',
    stroke_width: 10,
    fill: 'currentColor',

    stroke_plus: 'var(--white)'
};

//
function IconFollow({
    class_icon,
    x,
    y,
    size_icon,

    stroke,
    stroke_width,
    fill,

    stroke_plus,
}) {
    //
    return (
        <svg
            className={`IconFollow ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            // 
            strokeWidth={stroke_width}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M43.6269 37.5124L53.1606 20H146.01L154.715 37.5124M43.6269 37.5124L32.8497 55.0249H164.663L154.715 37.5124M43.6269 37.5124H99.171H154.715"
                stroke={stroke}
                fill="none"
            />

            <path
                d="M20 74.2518L32.4352 55.0249H165.078L180 74.2518V161.574L165.078 180H32.4352L20 161.574V74.2518Z"
                stroke={stroke}
                fill={fill}
                
            />

            <path
                d="M100.192 86.8657V149.751M67.2539 117.884H132.746"
                stroke={stroke_plus}
                strokeWidth="15"
            />
        </svg>
    );
}

export default IconFollow;
