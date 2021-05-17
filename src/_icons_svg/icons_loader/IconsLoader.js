import React from 'react';
import PropTypes from 'prop-types';

import './IconsLoader.scss';

//
IconsLoader.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,
};

IconsLoader.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '2rem',
};

/**
 *icons loader: (x, y)
 *   @1. spinner: (0, 0)
 */
function IconsLoader(props) {
    const { size_icon, x, y } = props;

    return (
        <svg
            className="IconsLoader"
            viewBox={`${x} ${y} 200 200`}
            fill="none"
            width={size_icon}
            height={size_icon}
        >
            {/* spinner x=0 y=0 */}
            <g strokeWidth="25">
                <circle cx="100" cy="100" r="85" stroke="#00a1fc" />
                <path d="M100,15 A85,85 0 0 1 155,35" stroke="#f5f5f580" />
            </g>
        </svg>
    );
}

export default IconsLoader;
