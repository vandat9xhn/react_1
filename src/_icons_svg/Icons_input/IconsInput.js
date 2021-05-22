import React from 'react';
import PropTypes from 'prop-types';
// 
import './IconsInput.scss';

//
IconsInput.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,
};

IconsInput.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
}

/**
*icons input: (x, y)
*   @1. image: (0, 0)
*   @2. video: (200, 0)
*   @3. key search: (0, 200)
*/
function IconsInput(props) {
    const {size_icon, x, y} = props;
    
    return (
        <svg
            className="IconsInput"
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            //
            fill="none"
            stroke="var(--md-color)"
            strokeLinecap="round"
        >

            {/* image x=0 y=0*/}
            <g strokeWidth="5">
                <path 
                    d="M10,170 
                    L70,70 Q78,63 86,70 
                    L120,130 
                    L130,110 Q138,100 146,110 
                    L190,180 L190,190 L0,190"
                />
                <circle cx="150" cy="50" r="25"/>
            </g>


            {/* video x=200 y=0*/}
            <path d="M275,50 L275,150 L350,100 Z"/>
            <circle cx="300" cy="100" r="90" strokeWidth="20"/>


            {/* key for searching x=0 y=200*/}
            <g className="IconsInput_key">
                <circle cx="80" cy="280" r="65" strokeWidth="10"/>
                <line strokeWidth="25" x1="130" y1="330" x2="200" y2="400"/>
            </g>

        </svg>
    );
}


export default IconsInput;