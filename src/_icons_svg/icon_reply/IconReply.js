import React from 'react';
import PropTypes from 'prop-types';

//
IconReply.propTypes = {
    class_icon: PropTypes.string,
    fill: PropTypes.string,
    size_icon: PropTypes.string,
    stroke: PropTypes.string,
};

IconReply.defaultProps = {
    class_icon: '',
    fill: 'none',
    size_icon: '1rem',
    stroke: 'currentColor',
};

//
function IconReply({ class_icon, size_icon, fill, stroke }) {
    //
    return (
        <svg
            className={`IconReply ${class_icon}`}
            width={size_icon}
            height={size_icon}
            viewBox="0 0 200 200"
            //
            fill={fill}
            strokeWidth="15"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14 53C14 53 6.00001 73 48 100C90 127 185 100 185 100M185 100L129 53M185 100L136.709 161" />
        </svg>
    );
}

export default IconReply;
