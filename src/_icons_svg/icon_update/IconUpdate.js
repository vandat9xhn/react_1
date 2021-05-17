import React from 'react';
import PropTypes from 'prop-types';
// 

// 
IconUpdate.propTypes = {
    size_icon:PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    stroke: PropTypes.string,
};

IconUpdate.defaultProps = {
    size_icon: '1rem',
    x: 0,
    y: 0,
    stroke: 'var(--md-color)'
}

// 
function IconUpdate(props) {
    const {size_icon, x, y, stroke} = props;

    return (
        <svg
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
        >
            <path
                d="M25,75 A65,50 0 0 1 170,75 M185,25 175,75 125,60
                M25,125 A65,50 0 0 0 170,125 M10,175 20,125 70,140"
                fill="none"
                stroke={stroke}
                strokeWidth="20"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default IconUpdate;
