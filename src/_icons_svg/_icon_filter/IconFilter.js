import React from 'react';
import PropTypes from 'prop-types';
// 
import { simple_icon_propTypes } from '../../_prop-types/icon';

//
IconFilter.propTypes = {
    ...simple_icon_propTypes
};

IconFilter.defaultProps = {
    class_icon: '',
    size_icon: '0.5rem',

    x: 0,
    y: 0,
    stroke_width: 15,
    stroke: 'var(--fashion-head)',
    fill: 'none',
};

function IconFilter({
    class_icon,
    size_icon,
    
    x,
    y,
    stroke,
    stroke_width,
    fill,
}) {
    //
    return (
        <svg
            className={`IconFilter ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke={stroke}
            strokeWidth={stroke_width}
            fill={fill}
            strokeLinejoin="round"
            strokeLinecap="round"
        >
            <path d="M75,180 75,80 20,20 180,20 125,80 125,140" />
        </svg>
    );
}

export default IconFilter;
