import React from 'react';
import PropTypes from 'prop-types';
// 
import './IconsMode.css'

// 
IconsMode.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,
    light_mode: PropTypes.bool,
};

IconsMode.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '2rem',
    light_mode: false,
}

/*
    icons mode: (x, y)
        1. 
        2. dark moon: (200, 0)
*/
//
function IconsMode(props) {
    const {size_icon, x, y, light_mode} = props;

    // 
    return (
        <svg
        className="IconsMode"
        viewBox={`${x} ${y} 200 200`}
        width={size_icon}
        height={size_icon}
        //
        fill="none"
        stroke="none"
        strokeLinecap="round"
        >

            {/* dark moon x=0 y=0 */}
            <path
                className={`IconsMode_dark ${light_mode ? '' : 'IconsMode_dark-none'}`}
                d="M100,50 A55,55 0 1 0 155,125 A30,30 0 1 1 100,50Z"
                stroke="var(--md-color)"
                strokeWidth="10"
            />

            <circle
                    className={`IconsMode_light ${light_mode ? 'IconsMode_light-none' : ''}`}
                    cx="100"
                    cy="100"
                    r="75"
                    fill="#ffab04"
                />
        </svg>
    );
}

export default IconsMode;