import React from 'react';
import PropTypes from 'prop-types';

// import './IconsEye.scss';

//
IconsEye.propTypes = {
    size_icon: PropTypes.string,
    color: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    close_eye: PropTypes.bool,
};

IconsEye.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
    close_eye: true,
};

/**
    IconsEye: (x, y)
        1. Eye show password: (200, 200)
*/
function IconsEye(props){
    const { size_icon, x, y, close_eye } = props;
    return (
        <svg
            className="IconsEye"
            height={size_icon}
            width={size_icon}
            viewBox={`${x} ${y} 200 200`}
            stroke="var(--black-brown)"
            fill="var(--black-brown)"
            strokeLinecap="round"
        >

            {/* Eye for showing password x=200 y=200 Toggle:close_eye */}
            <path
                d="M200,300 Q300,200 400,300 Q300,400 200,300"
                fill="none"
                strokeWidth="10"
            />
            <circle
                className={close_eye ? 'display-none' : ''}
                cx="300"
                cy="300"
                r="30"
            />
            <g className={close_eye ? '' : 'display-none'}>
                <path d="M200,300 Q300,350 400,300" fill="none" strokeWidth="20"/>
                <line x1="210" y1="210" x2="390" y2="390" strokeWidth="30"/>
            </g>

        </svg>
    );
};


export default IconsEye;
