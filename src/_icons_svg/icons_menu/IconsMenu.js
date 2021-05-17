import React from 'react';
import PropTypes from 'prop-types';

import './IconsMenu.scss';

//
IconsMenu.propTypes = {
    size_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
};

IconsMenu.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
};

/**
*icons menu: (x, y)
*   @.icon menu: (0, 0)
*   @.icon home: (200, 0)
*   @.icon message (200, 200)
*   @.icon new feed: (0, 200)
*   @.icon shopping: (400, 0)
*/
function IconsMenu(props){
    const { size_icon, x, y } = props;

    return (
        <svg
            className="IconsMenu"
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            //
            fill="var(--md-color)"
            stroke="var(--md-color)"
            strokeLinecap="round"
        >
            {/* menu x=0, y=0 */}
            <path
                className="IconsMenu_menu"
                d="M0,20 200,20
                M0,80 200,80
                M0,140 200,140"
                strokeWidth="40"
            />


            {/* home x=200, y=0*/}
            <path
                className="IconsMenu_home"
                d="M200,100 300,0 400,100 370,100 370,195 315,195 315,150 285,150 285,195 230,195 230,100 Z"
            />

            {/* message x=200 y=200 */}
            <g
                className="IconsMenu_message-out"
                fill="var(--md-bg-ccc)"
                stroke="none"
            >
                <path d="M235,350 Q230,370 220,380 Q255,375 260,370 Z" />
                <ellipse cx="300" cy="300" rx="85" ry="80" />
            </g>

            <path
                className="IconsMenu_message-in"
                d="M240,330 L285,280 L320,300 L360,280 L315,325 L280,305 Z"
                fill="white"
            />

            {/* new feed x=0 y=200 */}
            <path
                className="IconsMenu_new-feed"
                d="M5,205 190,205 190,390 5,390 Z
                M25,275 50,275 50,300 25,300 Z 
                M50,225 150,225
                M5,245 190,245
                M75,275 175,275
                M75,300 175,300
                M25,325 175,325
                M25,350 175,350
                M25,375 175,375"
                strokeWidth="10"
                fill="none"
            />
            

            {/* shopping x=400 y=0 */}
            <path
                d="M420,20 440,20 475,135 560,135
                M450,45 570,45 550,110 470,110"
                fill="none"
                strokeWidth="10"
            />

            <path
                d="M465,65 555,65
                M460,85 555,85"
                strokeWidth="5"
            />

            <g className="IconsMenu_shopping" fill="none" strokeWidth="13">
                <circle cx="475" cy="150" r="15" />
                <circle cx="550" cy="150" r="15" />
            </g>
        </svg>
    );
};

export default IconsMenu;
