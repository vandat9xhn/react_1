import React from 'react';
import PropTypes from 'prop-types';

import './IconLaugh.scss';

/*
    icon type like: (x, y):
        2. laugh: (200, 0))
*/
//
function IconLaugh() {
    return (
        <svg
            className="IconsTypeLike IconLaugh"
            viewBox="200 0 200 200"
            strokeLinecap="round"
            fill="none"
            stroke="none"
        >
            {/* icon laugh x=200 */}


            {/* face */}
            <circle cx="300" cy="100" r="100" fill="var(--face-yellow)"/>


            {/* laugh group */}
            <g className="IconLaugh_group">

                {/* eyes */}
                <g stroke="var(--black-brown)">
                    <path
                        className="IconLaugh_eye"
                        d="M250,85 275,70 250,55"
                        strokeWidth="10"
                    />
                    <path
                        className="IconLaugh_eye"
                        d="M350,85 325,70 350,55"
                        strokeWidth="10"
                    />
                </g>

                {/* mouth */}
                <path
                    className="IconLaugh_mouth"
                    d="M247,100 Q245,100 247,103 A45,45 0 0 0 355,100 Z"
                    fill="var(--danger)"
                />
                <path
                    className="IconLaugh_mouth"
                    d="M247,100 Q245,100 247,103 Q247,123 
                    258,135 Q300,100 343,135
                    Q352,123 354,105 Q353,100 355,100 Q300,85 245,100Z"
                    fill="var(--black-brown)"
                />

            </g>

        </svg>
    );
}

IconLaugh.propTypes = {};

IconLaugh.defaultProps = {};

export default IconLaugh;
