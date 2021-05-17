import React from 'react';
import PropTypes from 'prop-types';

import './IconsAction.scss';
/**
 * icons: (x, y) start of view box
*   @delete: (0, 0),
*   @message origin: (200, 0), 
*   @add friend: (0, 200), 
*   @send message: (200, 200),
*   @friends: (400, 0)
*   @update: (0, 400)
*   @warning: (400, 400)
*   @info: (600, 0)
*/
function IconsAction(props) {
    const { size_icon, x, y } = props;
    
    return (
        <svg
            className="IconsAction stroke-md-color fill-md-color stroke-round"
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke="var(--md-color)"
            fill="var(--md-color)"
            strokeLinecap="round"
        >

            {/* icon delete x=0 y=0 */}
            <line
                x1="90"
                y1="40"
                x2="110"
                y2="40"
                strokeWidth="20"
            />
            <line
                x1="40"
                y1="50"
                x2="160"
                y2="50"
                strokeWidth="15"
            />
            <path d="M40,65 L50,180 Q5,180 60,200 L140,200 Q148,190 150,180 L160,65 Z" />

            <g stroke="white" strokeWidth="10">
                <line x1="100" y1="80" x2="100" y2="170" />
                <line x1="65" y1="80" x2="75" y2="170" />
                <line x1="135" y1="80" x2="125" y2="170" />
            </g>

            {/* message origin x=200 y=0 */}
            <g stroke="white" strokeWidth="5">
                <path d="M200,30 L300,120 390,30 L200,30 200,170 390,170 390,30 Z" />
                <line x1="200" y1="170" x2="275" y2="100" />
                <line x1="400" y1="170" x2="325" y2="100" />
            </g>

            {/* add friend x=0 y=200*/}
            <g className="IconsAction_add-friend_friend" strokeWidth="5" fill="none">
                <circle cx="100" cy="250" r="45" />
                <path d="M5,395 Q5,300 100,300 Q195,300 195,395 Z" />
            </g>

            <g className="IconsAction_add-friend_plus" strokeWidth="10">
                <line x1="150" y1="290" x2="150" y2="360" />
                <line x1="115" y1="325" x2="185" y2="325" />
            </g>

            {/* send message x=200 y=200*/}
            <path
                className="IconsAction_send"
                d="M 240,310 L340,305 Q350,300 340,295 L240,290
                L215,230 Q213,213 230,215 L400,300
                L230,385 Q213,387 215,370 Z"
                fill="var(--bg-blur)"
                stroke="none"
            />

            {/* friends x=400 y=0 */}
            <g fill="none" strokeWidth="5">
                <circle cx="460" cy="60" r="35" />
                <path d="M405,175 Q410,100 460,100 Q510,100 515,175 Z" />

                <circle cx="550" cy="60" r="25" />
                <path d="M500,145 Q505,90 550,90 Q590,90 595,145 Z" />
            </g>

            {/* update x=0 y=400 */}
            <g fill="none" strokeWidth="15">
                <path d="M160,525 A70,70 0 1 1 160,475" />
                <path d="M170,450 160,475 130,470" />
                <path d="M85,465 85,505 120,520" />
            </g>

            {/* waning x=400 y=400 */}
            <path
                d="M500,415 585,585 415,585 Z"
                stroke="var(--danger)"
                strokeWidth="5"
                fill="var(--bg-blur)"
            />
            <line
                x1="500"
                y1="475"
                x2="500"
                y2="540"
                stroke="var(--danger)"
                strokeWidth="20"
            />
            <circle fill="var(--danger)" cx="500" cy="570" r="10" />

            {/* info x=600 y=0 */}
            <circle fill="var(--gold)" cx="700" cy="100" r="85" />
            <circle fill="var(--white)" cx="700" cy="55" r="15" />
            <line
                x1="700"
                y1="95"
                x2="700"
                y2="155"
                stroke="white"
                strokeWidth="20"
            />

        </svg>
    );
}

IconsAction.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon:PropTypes.string,
};

IconsAction.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1rem',
};

export default IconsAction;
