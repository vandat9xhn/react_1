import React from 'react';
import PropTypes from 'prop-types';
//
import { simple_icon_propTypes } from '../../_prop-types/icon';

//
IconCameraFilm.propTypes = {
    ...simple_icon_propTypes,
};

IconCameraFilm.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1.5rem',
    fill: 'none',
    stroke: 'currentColor',
    stroke_width: '15',
};

function IconCameraFilm({
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
            className={`IconCameraFilm ${class_icon}`}
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
            stroke={stroke}
            strokeWidth={stroke_width}
            fill={fill}
            strokeLinecap="round"
        >
            <path d="M134.522 79.1004V55H20V145H134.522V117.887M134.522 79.1004L180 55V145L134.522 117.887M134.522 79.1004V117.887" />
        </svg>
    );
}

export default IconCameraFilm;
