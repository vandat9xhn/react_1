import React from 'react';
import PropTypes from 'prop-types';

import './IconAngry.scss';

//
IconAngry.propTypes = {
    size_icon: PropTypes.string,
};

IconAngry.defaultProps = {
    size_icon: '1.5rem',
};

//
function IconAngry({ size_icon }) {
    // id random: id of linear gradient must be unique
    const id_random = Math.random().toString() + Math.random().toString();

    return (
        <svg
            className="IconsTypeLike IconAngry"
            viewBox="1000 0 200 200"
            width={size_icon}
            height={size_icon}
            stroke="none"
            strokeLinecap="round"
        >
            {/* angry: x=1000 */}

            <defs>
                <linearGradient
                    id={`IconAngry_${id_random}`}
                    x1="1100"
                    y1="0"
                    x2="1100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0000" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* face color */}
            <circle
                className="IconAngry_face-angry"
                cx="1100"
                cy="100"
                r="100"
                fill="var(--face-yellow)"
            />

            <circle
                cx="1100"
                cy="100"
                r="100"
                fill={`url(#IconAngry_${id_random})`}
            />

            {/* in face */}
            <g
                className="IconAngry_face-group"
                stroke="var(--black-brown)"
                fill="var(--black-brown)"
            >
                <g className="IconAngry_in-face">
                    <g strokeWidth="10">
                        <path d="M1035,100 Q1070,110 1085,110" />
                        <path d="M1165,100 Q1130,110 1115,110" />
                    </g>

                    <circle cx="1065" cy="115" r="10" />
                    <circle cx="1135" cy="115" r="10" />

                    <ellipse cx="1100" cy="155" rx="35" ry="5" />
                </g>
            </g>
        </svg>
    );
}

export default IconAngry;
