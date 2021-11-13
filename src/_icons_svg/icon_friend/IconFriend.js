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

    is_plus: PropTypes.bool,
    is_request: PropTypes.bool,
    is_menu: PropTypes.bool,
};

IconFriend.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1rem',

    stroke: 'currentColor',
    stroke_width: 10,
    fill: 'none',

    is_plus: false,
    is_request: false,
    is_menu: false,
};

/**
 * icons: (x, y) start of view box
 *   @add friend: (0, 200),
 */
function IconFriend({
    size_icon,
    x,
    y,
    stroke,
    stroke_width,
    fill,

    is_plus,
    is_request,
    is_menu,
}) {
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

            {is_plus ? (
                <g className="IconFriend_plus" stroke="currentColor">
                    <line x1="160" y1="20" x2="160" y2="80" />
                    <line x1="130" y1="50" x2="190" y2="50" />
                </g>
            ) : is_request ? (
                <g className="IconFriend_request" stroke="currentColor">
                    <line x1="120" y1="35" x2="175" y2="35" />
                    <line x1="175" y1="35" x2="160" y2="20" />
                    <line x1="175" y1="35" x2="160" y2="50" />
                </g>
            ) : is_menu ? (
                <g className="IconFriend_all" stroke="currentColor">
                    <line x1="130" y1="10" x2="190" y2="10" />
                    <line x1="130" y1="35" x2="190" y2="35" />
                    <line x1="130" y1="60" x2="190" y2="60" />
                </g>
            ) : null}
        </svg>
    );
}

export default IconFriend;
