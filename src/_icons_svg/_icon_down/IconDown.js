import React from 'react';
import PropTypes from 'prop-types';

//
IconDown.propTypes = {
    size_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string,
};
IconDown.defaultProps = {
    size_icon: '0.5rem',
    x: 0,
    y: 0,
    color: 'var(--md-color-secondary)',
};

function IconDown({ size_icon, x, y, color }) {
    //
    return (
        <svg
            className="IconDown"
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            fill={color}
        >
            <path d="M10,40 190,40 100,160 Z" />
        </svg>
    );
}

export default IconDown;
