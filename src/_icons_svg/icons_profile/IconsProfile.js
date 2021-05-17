import React from 'react';
import PropTypes from 'prop-types';

import './IconsProfile.scss';

//
IconsProfile.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,
};

IconsProfile.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
};

/**
    icons profile: (x, y)
        1. icon address: (0, 0)
        2. icon mail: (200, 0)
        3. icon phone: (0, 200)
        4. icon laptop: (0, 400)
*/
function IconsProfile(props) {
    const { size_icon, x, y } = props;

    return (
        <svg
            className="IconsProfile"
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            //
            fill="none"
            stroke="var(--md-color)"
            strokeLinecap="round"
        >
            
            {/* icon address x=0 y=0 */}
            <g className="IconsProfile_address" strokeWidth="5">
                <path d="M45,100 A50,65 90 1 1 155,100 L100,170 Z" />
                <path d="M70,150 A20,50 90 1 0 130,150" />
                <circle cx="100" cy="75" r="20" />
            </g>

            {/* icon gmail x=200 y=0*/}
            <path
                className="IconsProfile_mail"
                d="M220,44 380,45 380,155 220,155 Z"
                fill="var(--bg-blur)"
            />
            <path
                className="IconsProfile_mail-m"
                d="M220,150
                L220,60 Q220,50 230,50
                L300,100 L370,50
                Q380,50 380,60
                L380,150"
                strokeWidth="15"
                stroke="#f82020"
            />

            {/* icon phone x=0 y=200*/}
            <g className="IconsProfile_phone">
                <path
                    d="M50,220 50,380 150,380 150,220 Z"
                    strokeWidth="5"
                />
                <path
                    d="M50,240 50,350 150,350 150,240 Z"
                />
                
                <line x1="85" y1="230" x2="115" y2="230" strokeWidth="5"/>
                <circle cx="100" cy="365" r="10" />
            </g>
            
        </svg>
    );
}


export default IconsProfile;
