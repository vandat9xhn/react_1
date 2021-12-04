import React from 'react';
import PropTypes from 'prop-types';

//
IconPublic.propTypes = {
    size_icon: PropTypes.string,
    stroke: PropTypes.string,
};

IconPublic.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--md-color)',
};

//
function IconPublic({ size_icon, stroke }) {
    //
    return (
        <svg
            width={size_icon}
            height={size_icon}
            viewBox="0 0 200 200"
            fill="none"
            strokeWidth="5"
            stroke={stroke}
        >
            <circle cx="100" cy="100" r="85" strokeWidth="10" />

            <line
                x1="99.3965"
                y1="16.1017"
                x2="99.3965"
                y2="183.898"
                stroke="black"
            />
            <line x1="10" y1="97.5" x2="184.569" y2="97.5" />

            <path
                d="M55.1915 101.148C55.1915 64.7981 61.6037 18.555 99.4181 18.4258C137.303 18.2964 144.809
                64.595 144.809 101.148C144.809 137.701 137.301 184.26 99.4181 183.87C61.7454 183.482 55.1915
                137.498 55.1915 101.148Z"
            />

            <path
                d="M44.1027 34.5106C44.1027 34.5106 63.6271 62.4681 100.771 62.4681C137.915 62.4681 158.596
                34.5106 158.596 34.5106M44.1027 163.957C44.1027 163.957 58.2654 140.895 100.771 140.596C143.277
                140.297 158.596 163.957 158.596 163.957"
            />
        </svg>
    );
}

export default IconPublic;
