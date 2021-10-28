import React from 'react';
import PropTypes from 'prop-types';

//
IconFriends.propTypes = {
    class_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,

    stroke: PropTypes.string,
    stroke_width: PropTypes.number,
    fill: PropTypes.string,
};

IconFriends.defaultProps = {
    class_icon: '',
    x: 400,
    y: 0,
    size_icon: '1rem',

    stroke: 'none',
    stroke_width: 0,
    fill: 'currentColor',
};

/**
 * icons: (x, y) start of view box
 *   @add friend: (0, 200),
 */
function IconFriends({
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
            className={`IconFriends ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke={stroke}
            fill={fill}
            strokeLinecap="round"
            strokeWidth={stroke_width}
        >
            <circle cx="460" cy="60" r="35" />
            <path d="M405,175 Q410,100 460,100 Q510,100 515,175 Z" />

            <circle cx="550" cy="60" r="25" />
            <path d="M500,145 Q505,90 550,90 Q590,90 595,145 Z" />
        </svg>
    );
}

export default IconFriends;
