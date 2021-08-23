import React from 'react';
import PropTypes from 'prop-types';
//
// import './IconSent.scss';

//
function IconSent({ size_icon, x, y, stroke }) {
    //
    return (
        <svg
            className="IconSent"
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
            strokeLinecap="round"
        >
            <path
                d="M50,125 80,150 150,50"
                strokeWidth="20"
                stroke={stroke}
                fill="none"
            />
        </svg>
    );
}

IconSent.propTypes = {
    size_icon: PropTypes.string,
    stroke: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
};

IconSent.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--blue)',
    x: 0,
    y: 0,
};

export default IconSent;
