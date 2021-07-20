import React from 'react';
import PropTypes from 'prop-types';

import './IconsArrow.scss';

//
IconsArrow.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,
};
IconsArrow.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
};

/**
 *icons arrow: (x, y)
 *   @1. dropdown: (0, 0),
 *   @2. next: (200, 0),
 *   @3. previous: (400, 0),
 *   @4. back to previous: (200, 200),
 *   @5. back to top: (0, 200),
 *   @6. close: (0, 400),
 *   @7. download (600, 0),
 */
function IconsArrow({ size_icon, x, y }) {
    //
    return (
        <svg
            className="IconsArrow"
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            //
            fill="none"
            stroke="var(--md-color)"
            strokeLinecap="round"
        >
            {/* dropdown x=0, y=0 */}
            <path
                d="M0,0 L200,100 L0,200 L75,100 Z"
                className="IconsArrow_dropdown"
                fill="var(--md-color)"
            />

            <g strokeWidth="10">
                {/* next > x=200, y=0 */}
                <path d="M275,20 325,100 275,180" className="IconsArrow_next" />

                {/* prev < x=400, y=0 */}
                <path d="M525,20 475,100 525,180" className="IconsArrow_prev" />
            </g>

            {/* back to top x=0, y=200 */}
            <polyline
                points="100,210 10,390 190,390"
                className="IconsArrow_back-top"
                fill="var(--md-color)"
            />

            {/* back to previous <- x=200 y=200 */}
            <path
                className="IconsArrow_back-prev"
                strokeWidth="15"
                stroke="var(--white)"
                d="M275,330 250,300 275,270 M250,300 350,300"
            />

            {/* close x x=0 y=400 */}
            <path
                className="IconsArrow_close"
                strokeWidth="15"
                stroke="var(--white)"
                d="M50,450 150,550 M150,450 50,550"
            />

            {/* download x=600 y=0 */}
            <path
                className="IconsArrow_download"
                stroke="none"
                fill="var(--white)"
                d="M675,15 725,15 725,125 775,125 700,185 625,125 675,125Z"
            />
        </svg>
    );
}

export default IconsArrow;
