import React from 'react';
import PropTypes from 'prop-types';

IconFaceGray.propTypes = {
    size_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    stroke: PropTypes.string,
    fill: PropTypes.string,
};

IconFaceGray.defaultProps = {
    size_icon: '1.5rem',
    x: 0,
    y: 0,
    stroke: 'gray',
    fill: 'none',
};

//
function IconFaceGray({ size_icon, x, y, stroke, fill }) {
    //
    return (
        <svg
            className="IconFaceGray"
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
            strokeLinecap="round"
            strokeWidth="10"
            stroke={stroke}
            fill={fill}
        >
            {/* face gray add like */}
            <circle cx="100" cy="100" r="85" />

            <g className="IconFaceGray_eyes" fill={stroke}>
                <circle cx="65" cy="85" r="15" />
                <circle cx="135" cy="85" r="15" />
            </g>

            <path d="M75,135 Q100,160 125,135" />
        </svg>
    );
}

export default IconFaceGray;
