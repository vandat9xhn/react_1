import React from 'react';
import PropTypes from 'prop-types';

//
IconsStar.propTypes = {
    size_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string,
};
IconsStar.defaultProps = {
    size_icon: '1rem',
    x: 0,
    y: 0,
    color: 'var(--gold)',
}

/**
 *  icons star:(x, y)
 *  @1. normal star: (0, 0)
 */
function IconsStar(props) {
    const {size_icon, x, y, color} = props;

    //
    return (
        <svg
            className="IconsStar"
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
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
