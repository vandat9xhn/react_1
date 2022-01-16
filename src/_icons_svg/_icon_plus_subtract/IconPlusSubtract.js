import React from 'react';
import PropTypes from 'prop-types';

//
IconPlusSubtract.propTypes = {
    class_icon: PropTypes.string,
    size_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    stroke: PropTypes.string,

    is_plus: PropTypes.bool,
};
IconPlusSubtract.defaultProps = {
    class_icon: '',
    size_icon: '0.5rem',
    x: 0,
    y: 0,
    stroke: 'var(--md-color-secondary)',
    stroke_width: 20,

    is_plus: true,
};

function IconPlusSubtract({
    class_icon,
    size_icon,
    x,
    y,
    stroke,
    stroke_width,
    is_plus,
}) {
    //
    return (
        <svg
            className={`IconPlusSubtract ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke={stroke}
            strokeWidth={stroke_width}
        >
            <line
                className={`${is_plus ? '' : 'display-none'}`}
                x1="100"
                y1="25"
                x2="100"
                y2="175"
            />

            <line x1="25" y1="100" x2="175" y2="100" />
        </svg>
    );
}

export default IconPlusSubtract;
