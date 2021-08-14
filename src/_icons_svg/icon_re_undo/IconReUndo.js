import React from 'react';
import PropTypes from 'prop-types';
// 
import './IconReUndo.scss';

//
IconReUndo.propTypes = {
    size_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    stroke: PropTypes.string,
    is_redo: PropTypes.bool,
};
IconReUndo.defaultProps = {
    size_icon: '1rem',
    x: 0,
    y: 0,
    stroke: 'var(--blue)',
    is_redo: false,
};

/**
 * redo - undo icon
 */
function IconReUndo({ size_icon, x, y, stroke, is_redo }) {
    //
    return (
        <svg
            className={`IconReUndo ${is_redo ? 'IconReUndo_redo' : ''}`}
            height={size_icon}
            width={size_icon}
            viewBox={`${x} ${y} 200 200`}
            strokeLinecap="round"
        >
            <path
                d="M35,135 A75,75 0 1 0 35,65 M35,25 35,65 75,60"
                fill="none"
                strokeWidth="20"
                stroke={stroke}
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default IconReUndo;
