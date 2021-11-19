import React from 'react';
import PropTypes from 'prop-types';
// 
import './IconFriends.scss';

//
IconFriends.propTypes = {
    class_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,

    stroke: PropTypes.string,
    stroke_width: PropTypes.number,
    fill: PropTypes.string,
};

IconFriends.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1rem',

    stroke: 'none',
    stroke_width: 0,
    fill: 'currentColor',
};

/**
 * icons: (x, y) start of view box
 *   @add friend: (0, 200),
 */
function IconFriends({
    class_icon,
    x,
    y,
    size_icon,

    stroke,
    stroke_width,
    fill,
}) {
    //
    return (
        <svg
            className={`IconFriends ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke={stroke}
            fill={fill}
            strokeLinecap="round"
            strokeWidth={stroke_width}
        >
            <path d="M98.2044 64.7143C98.2044 79.9728 87.0063 91.9286 73.6795 91.9286C60.3527 91.9286 49.1546 79.9728 49.1546 64.7143C49.1546 49.4558 60.3527 37.5 73.6795 37.5C87.0063 37.5 98.2044 49.4558 98.2044 64.7143Z" />

            <path d="M160.262 73.0714C160.262 85.7423 150.877 95.6429 139.74 95.6429C128.603 95.6429 119.219 85.7423 119.219 73.0714C119.219 60.4005 128.603 50.5 139.74 50.5C150.877 50.5 160.262 60.4005 160.262 73.0714Z" />

            <path d="M110.222 120.429C110.222 120.429 120.723 112.071 133.735 109.286C146.747 106.5 158.758 111.143 158.758 111.143C158.758 111.143 168.559 115.565 172.771 120.429C177.728 126.153 180.889 130.802 179.777 138.071C178.966 143.372 180.222 143.946 175.774 147.357C169.681 152.03 159.881 153.354 151.751 152.929C138.973 152.261 124.727 152.929 124.727 152.929" />

            <path d="M34.6435 118.571C42.8463 112.232 43.982 113.071 50.6583 111.143C59.6465 108.547 68.2906 109.11 74.6804 109.286C82.0696 109.489 87.8359 108.842 95.6998 111.143C103.884 113.538 108.516 115.854 114.717 121.357C121.064 126.991 122.775 131.055 124.727 139C126.029 144.304 124.727 152.929 124.727 152.929C124.727 152.929 124.3 157.424 121.724 159.429C117.936 162.377 109.713 163.143 109.713 163.143C109.713 163.143 86.3358 165 71.6776 165C57.0195 165 34.6435 163.143 34.6435 163.143C34.6435 163.143 26.5163 163.155 23.6334 159.429C21.9741 157.284 21.4124 155.467 20.6306 152.929C20.6306 152.929 19.2117 144.278 20.6306 139C22.863 130.696 27.5556 124.049 34.6435 118.571Z" />
        </svg>
    );
}

export default IconFriends;
