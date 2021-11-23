import React from 'react';
import PropTypes from 'prop-types';
//
import { simple_icon_propTypes } from '../../_prop-types/icon';
//
import './IconBell.scss';

//
IconBell.propTypes = {
    ...simple_icon_propTypes,
};

IconBell.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1.5rem',
    fill: 'currentColor',
    stroke: 'none',
    stroke_width: '0',
};

//
function IconBell({ class_icon, size_icon, x, y, stroke, stroke_width, fill }) {
    //
    return (
        <svg
            className={`IconBell ${class_icon}`}
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
            //
            stroke={stroke}
            strokeWidth={stroke_width}
            fill={fill}
            strokeLinecap="round"
        >
            <g className="IconBell_notice">
                <path d="M48.5369 47.7122C59.0817 30.361 70.9872 22.4376 90.6762 20.1296C110.955 17.7524 122.529 24.1731 137.474 38.744C156.185 56.9871 145.223 83.7223 162.957 102.988C171.545 112.318 179.355 109.646 182.17 122.186C185.632 137.604 167.217 145.232 167.217 145.232C139.216 158.825 95.1062 166.863 44.6108 162.98C44.6108 162.98 25.2433 159.385 24.0054 147.109C22.7675 134.833 30.8013 127.887 36.5317 117.128C48.625 94.4228 35.2043 69.6506 48.5369 47.7122Z" />

                <path d="M68.8366 182.903C61.1927 182.374 55.9684 175.227 55.9684 175.227C53.7687 170.5 53.8731 168.02 56.9621 167.947C71.9946 168.448 84.4864 168.142 86.5752 170.345C88.664 172.549 83.8712 177.798 83.8712 177.798C83.8712 177.798 76.6836 183.447 68.8366 182.903Z" />
            </g>
        </svg>
    );
}

export default IconBell;
