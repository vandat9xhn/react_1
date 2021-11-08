import React from 'react';
import PropTypes from 'prop-types';


IconDraw.propTypes = {
    size_icon: PropTypes.string,
    bg: PropTypes.string,
};

IconDraw.defaultProps = {
    size_icon: '2rem',
    bg: '#FFDE6A',
};

/**
    icon paint/draw
*/
function IconDraw({ size_icon, bg }) {
    return (
        <svg
            className="IconDraw"
            width={size_icon}
            height={size_icon}
            viewBox="0 0 200 200"
            stroke="var(--black-brown)"
            strokeWidth="5"
        >
            <path
                className="IconDraw_bg"
                d="M57.3108 24.9833C117.462 3.91553 147.619 44.2118 141.974 57.5882C136.33 70.9645 123.59 
                68.6236 111.979 68.6236C100.368 68.6236 93.4623 81.3108 95.3691 92.7011C97.0723 102.875 105.794 
                105.344 114.721 109.923C124.43 114.904 132.325 110.17 141.974 115.274C174.284 132.362 122.3 
                181.988 74.0822 180.985C25.8643 179.982 8.93161 115.274 8.93161 115.274C8.93161 115.274 -2.84068 
                46.0511 57.3108 24.9833Z"
                fill={bg}
            />

            <circle cx="84" cy="47" r="12.5" fill="#F8C100" />
            <circle cx="47" cy="75" r="12.5" fill="#00D355" />
            <circle cx="47" cy="127" r="12.5" fill="#C90000" />

            <path
                d="M68.8392 164.633C61.9109 172.975 99.9808 170.15 106 149.312L93.4031 135.013C93.4031 135.013 
                82.6958 134.162 75.7675 146.248C68.8392 158.335 75.7675 156.292 68.8392 164.633Z"
                fill="#C4C4C4"
            />

            <path
                d="M97 135.228C97 135.228 181.509 43.7339 191.272 53.769C201.036 63.8042 109.324 149 109.324 
                149L97 135.228Z"
                fill="#BE7200"
            />
        </svg>
    );
}

export default IconDraw;
