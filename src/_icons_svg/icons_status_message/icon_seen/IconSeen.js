import React from 'react';
import PropTypes from 'prop-types';

// 
IconSeen.propTypes = {
    size_icon: PropTypes.string,
    stroke: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
};

IconSeen.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--white)',
    x: 0,
    y: 0,
};

//
function IconSeen(props) {
    const { size_icon, x, y, stroke } = props;

    return (
        <svg
            className="IconSeen"
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
            strokeLinecap="round"
        >
            <path
                d="M40,115 70,140 120,65 M150,65 95,150 60,125 "
                stroke={stroke}
                strokeWidth="20"
                strokeLinecap="round"
                fill="none"
            />
            
        </svg>
    );
}

export default IconSeen;
