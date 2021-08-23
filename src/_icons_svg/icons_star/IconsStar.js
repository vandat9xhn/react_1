import React from 'react';
import PropTypes from 'prop-types';

//
IconsStar.propTypes = {
    size_icon: PropTypes.string,
    color: PropTypes.string,
};
IconsStar.defaultProps = {
    size_icon: '1rem',
    color: 'var(--gold)',
};

//
function IconsStar({ size_icon, color }) {
    //
    return (
        <svg
            className="IconsStar"
            width={size_icon}
            height={size_icon}
            viewBox="0 0 200 200"
            stroke="none"
        >
            <path
                className="IconsStar_normal"
                d="M100 10L120.206 72.1885H185.595L132.694 110.623L152.901 
                172.812L100 134.377L47.0993 172.812L67.3056 110.623L14.4049 
                72.1885H79.7937L100 10Z"
                fill={color}
            />
        </svg>
    );
}

export default IconsStar;
