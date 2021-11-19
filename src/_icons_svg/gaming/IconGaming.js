import React from 'react';
import PropTypes from 'prop-types';
// 
import './IconGaming.scss';

//
IconGaming.propTypes = {
    class_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,

    stroke: PropTypes.string,
    stroke_width: PropTypes.number,
    fill: PropTypes.string,
};

IconGaming.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1rem',

    stroke: 'currentColor',
    stroke_width: 10,
    fill: 'none',
};

//
function IconGaming({
    class_icon,
    x,
    y,
    size_icon,

    stroke,
    stroke_width,
    fill,
}) {
    //
    return (
        <svg
            className={`IconGaming ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke={stroke}
            fill={fill}
            // strokeLinecap="round"
            strokeWidth={stroke_width}
        >
            <path d="M19 19H181V181H19V19Z" />

            <path
                className="IconGaming_path"
                d="M183.5 73H73V127H127V183.5"
                stroke="currentColor"
                fill="none"
            />
        </svg>
    );
}

export default IconGaming;
