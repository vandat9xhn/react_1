import React from 'react';
import PropTypes from 'prop-types';

import './IconsPost.scss';

//
IconsPost.propTypes = {
    size_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
};

IconsPost.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
};

/**
 *icons post: (x, y)
 *   @.icon tag: (0, 0)
 *   @.icon comment: (200, 0)
 *   @.icon share: (0, 200)
 */
function IconsPost({ size_icon, x, y }) {
    //
    return (
        <svg
            className="IconsPost"
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            //
            fill="none"
            stroke="var(--md-color)"
            strokeLinecap="round"
        >
            {/* icon tag x=0 y=0*/}
            <path
                fill="var(--blue)"
                d="M10,95 L0,0 L95,10 L200,115 L115,200 Z"
            />
            <g stroke="var(--blue)" fill="white" strokeWidth="5">
                <circle cx="50" cy="50" r="20" />
                <circle cx="80" cy="165" r="30" />
                <line x1="80" y1="145" x2="80" y2="185" />
                <line x1="100" y1="165" x2="60" y2="165" />
            </g>

            {/* icon comment x=200 y=0*/}
            <g className="IconsPost_cmt" strokeWidth="10">
                <path
                    d="M230,190 L230,165 L230,165 Q210,165 210,130 L210,30 Q210,5 230,5
                    L370,5 Q390,5 390,30 L390,130 Q390,165 360,165 L270,165 Z"
                />

                <line x1="240" y1="40" x2="360" y2="40" />
                <line x1="240" y1="80" x2="360" y2="80" />
                <line x1="240" y1="120" x2="360" y2="120" />
            </g>

            {/* icon share x=0 y=200 */}
            <path
                className="IconsPost_share"
                d="M180,300 L125,240 L125,280 Q40,290 25,380 Q40,330 125,320 L125,360 Z"
                strokeWidth="10"
            />
        </svg>
    );
}

export default IconsPost;
