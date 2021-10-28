import React from 'react';
import PropTypes from 'prop-types';

//
IconFriend.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,

    stroke: PropTypes.string,
    stroke_width: PropTypes.number,
    fill: PropTypes.string,
};

IconFriend.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1rem',

    stroke: 'currentColor',
    stroke_width: 5,
    fill: 'none',
};

/**
 * icons: (x, y) start of view box
 *   @add friend: (0, 200),
 */
function IconFriend({ size_icon, x, y, stroke, stroke_width, fill }) {
    //
    return (
        <svg
            className="IconFriend"
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke={stroke}
            fill={fill}
            strokeLinecap="round"
            strokeWidth={stroke_width}
        >
            <circle cx="100" cy="50" r="35" />
            <path d="M15,185 Q15,100 100,100 Q185,100 185,185 Z" />
        </svg>
    );
}

export default IconFriend;
