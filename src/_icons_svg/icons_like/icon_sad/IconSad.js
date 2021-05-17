import React from 'react';
import PropTypes from 'prop-types';

import './IconSad.scss';

/*
    icon type like: (x, y):
        1. like: (0, 0)
        2. laugh: (200, 0)
        3. wow: (400, 0)
        4. heart: (600, 0)
        5. sad: (800, 0)
        6. angry: (1000, 0)
*/
//
function IconSad() {
    return (
        <svg
            className="IconsTypeLike IconSad"
            viewBox="800 0 200 200"
            strokeLinecap="round"
            stroke="none"
        >
            {/* sad x=800 */}
            <circle
                cx="900"
                cy="100"
                r="100"
                fill="var(--face-yellow)"
            />

            {/* group in face */}
            <g className="IconSad_g">
                <g fill="none" strokeWidth="10" stroke="var(--black-brown)">
                    {/* eye slashes */}
                    <path d="M835,75 Q845,55 865,60" />
                    <path d="M935,60 Q955,55 965,75" />
                    {/* mouth */}
                    <path d="M875,140 Q900,115 925,140" />
                </g>
                {/* eyes */}
                <g fill="var(--black-brown)">
                    <circle cx="855" cy="100" r="15" />
                    <circle cx="945" cy="100" r="15" />
                </g>

            </g>

            {/* tear */}
            <path
                className="IconSad_cry"
                d="M947.644 170.777C938.268 162.311 956.84 135 956.84 135C956.84 135 977.317 161.628 967.185 
                170.777C960.949 176.408 953.88 176.408 947.644 170.777Z"
                fill="var(--blue-tear)"
            />
        </svg>
    );
}

IconSad.propTypes = {};

IconSad.defaultProps = {};

export default IconSad;
