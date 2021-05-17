import React from 'react';
import PropTypes from 'prop-types';

import './IconsAccount.scss';
/**
*icons account: (x, y)
*   @1. logout: (0, 0)
*   @2. login: (200, 0)
*/
function IconsAccount(props) {
    const { size_icon, x, y } = props;
    
    return (
        <svg
            className="IconsAccount"
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            //
            fill="var(--md-color)"
            strokeLinecap="round"
            stroke="var(--md-color)"
        >


            {/* icon logout x=0 y=0 */}
            <path d="M15,150 15,15 90,50 90,185 Z" />

            <g fill="none" strokeWidth="10">
                <path d="M20,20 135,20 135,55" />
                <path d="M135,115 135,150 75,150" />
            </g>

            <path d="M155,54 155,78 100,78 100,97 155,97 155,120 185,87 Z" />


            {/* icon login x=200 y=0 */}
            <path
                d="M225,55 A80,80 0 1 1 225,145 "
                fill="none"
                strokeWidth="15"
            />
            <path d="M210,90 210,110 300,110 300,145 335,100 300,55 300,90 Z" />
        </svg>
    );
}

IconsAccount.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,
};

IconsAccount.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '2rem',
};

export default IconsAccount;
