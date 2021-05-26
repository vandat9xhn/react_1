import React from 'react';
import PropTypes from 'prop-types';

import './IconsEdit.scss';

//
IconsEdit.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,
    color: PropTypes.string,
    is_editing: PropTypes.bool,
};

IconsEdit.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
    color: 'var(--blue)',
    is_editing: false,
};

/**
 * icons edit: pen_edit + dot edit
 */
function IconsEdit(props) {
    const { size_icon, x, y, color, is_editing } = props;

    return (
        <svg
            className="IconsEdit size-icon"
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
        >
            {/* Pen Edit x=0 y=0 */}
            <path d="M0,200 L15,160 L175,0 L200,25 L40,185 Z" fill={color} />
            <g stroke="whiteSmoke" strokeWidth="15">
                <line x1="150" y1="25" x2="175" y2="50" />
                <line x1="20" y1="155" x2="45" y2="180" />
            </g>

            {/* dot waiting */}
            <g
                className={is_editing ? 'EditIcons_active' : 'display-none'}
                fill="var(--md-color)"
            >
                <circle cx="80" cy="190" r="10" />
                <circle cx="130" cy="190" r="10" />
                <circle cx="180" cy="190" r="10" />
            </g>
        </svg>
    );
}

export default IconsEdit;
