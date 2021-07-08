import React from 'react';
import PropTypes from 'prop-types';

//
IconThreeDot.propTypes = {
    size_icon: PropTypes.string,
    color: PropTypes.string,
};

IconThreeDot.defaultProps = {
    size_icon: '1.5rem',
    color: 'var(--md-color)',
};

//
function IconThreeDot({ size_icon, color }) {
    //
    return (
        <svg
            className="IconThreeDot"
            width={size_icon}
            height={size_icon}
            viewBox="0 0 200 200"
            fill={color}
        >
            <circle cx="30" cy="100" r="20" />
            <circle cx="100" cy="100" r="20" />
            <circle cx="170" cy="100" r="20" />
        </svg>
    );
}

export default IconThreeDot;
