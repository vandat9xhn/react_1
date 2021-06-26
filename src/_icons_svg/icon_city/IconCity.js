import React from 'react';
import PropTypes from 'prop-types';
// 
import './IconCity.scss';

//
IconCity.propTypes = {
    size_icon: PropTypes.string,
};

IconCity.defaultProps = {
    size_icon: '1.5rem',
};

//
function IconCity({ size_icon }) {
    //
    return (
        <svg
            className="IconCity"
            width={size_icon}
            height={size_icon}
            viewBox="0 0 200 200"
        >
            <path
                className="IconCity_building"
                d="M50.6034 122.653H73.3196M50.6034 122.653H128.935M50.6034 122.653V75.0729H73.3196M73.3196 
                122.653H128.935M73.3196 122.653V75.0729M128.935 122.653H150.868V75.0729H128.935V122.653ZM128.935 
                122.653V42.1866H73.3196V75.0729M100.736 188.426C105.762 197.103 75.849 168.886 34.9369 
                128.951C-5.97521 89.0146 16.1372 10 100.736 10C185.334 10 204.134 89.7669 166.535 128.951C128.935 
                168.134 100.736 188.426 100.736 188.426Z"
                fill="none"
                stroke="var(--md-color)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g className="IconCity_window" fill="var(--md-color)">
                <rect x="110" y="94.6" width="12.5" height="8" />
                <rect x="80" y="94.6" width="12.5" height="8" />
                <rect x="80" y="80.2" width="12.5" height="8" />
                <rect x="80" y="65.8" width="12.5" height="8" />
                <rect x="110" y="80.2" width="12.5" height="8" />
                <rect x="110" y="65.8" width="12.5" height="8" />
                <rect x="80" y="51.4" width="12.5" height="8" />
                <rect x="110" y="51.4" width="12.5" height="8" />
            </g>
        </svg>
    );
}

export default IconCity;
