import React from 'react';
import PropTypes from 'prop-types';

//
IconSubtract.propTypes = {
    size_icon: PropTypes.string,
    color: PropTypes.string,
    stroke_width: PropTypes.number,
};

IconSubtract.defaultProps = {
    size_icon: '1rem',
    color: 'var(--md-color)',
    stroke_width: 25,
};

//
function IconSubtract({ size_icon, color, stroke_width }) {
    //
    return (
        <svg
            className="IconSubtract"
            viewBox="0 0 200 200"
            width={size_icon}
            height={size_icon}
        >
            <line
                x1="20"
                y1="100"
                x2="180"
                y2="100"
                strokeWidth={stroke_width}
                stroke={color}
                strokeLinecap="round"
            />
        </svg>
    );
}

export default IconSubtract;
