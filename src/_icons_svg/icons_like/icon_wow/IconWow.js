import React from 'react';
import PropTypes from 'prop-types';
//
import './IconWow.scss';

//
IconWow.propTypes = {
    size_icon: PropTypes.string,
};

IconWow.defaultProps = {
    size_icon: '1.5rem',
};

/*
    icon type like: (x, y):
        3. wow: (400, 0)
*/
//
function IconWow({ size_icon }) {
    return (
        <svg
            className="IconsTypeLike IconWow"
            viewBox="400 0 200 200"
            width={size_icon}
            height={size_icon}
            strokeLinecap="round"
            stroke="none"
        >
            {/* wow x=400 */}
            <circle cx="500" cy="100" r="100" fill="var(--face-yellow)" />

            <g className="IconWow_eyes-g">
                {/* slashes */}
                <g fill="none" stroke="var(--black-brown)" strokeWidth="10">
                    <path d="M440,45 Q450,35 465,40" />
                    <path d="M540,40 Q550,35 565,45" />
                </g>
                {/* eyes */}
                <g fill="var(--black-brown)">
                    <path d="M450,105 A15,20 10 1 0 449,105Z" />
                    <path d="M550,105 A15,20 -10 1 0 549,105Z" />
                </g>
            </g>

            <ellipse
                className="IconWow_mouth"
                fill="var(--black-brown)"
                cx="500"
                cy="145"
                rx="30"
                ry="40"
            />
        </svg>
    );
}

export default IconWow;
