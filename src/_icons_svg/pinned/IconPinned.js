import React from 'react';
import PropTypes from 'prop-types';
//
// import './IconPinned.scss';

//
IconPinned.propTypes = {
    class_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,

    stroke: PropTypes.string,
    stroke_width: PropTypes.number,
    fill: PropTypes.string,
};

IconPinned.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1rem',

    stroke: 'none',
    stroke_width: 0,
    fill: 'currentColor',
};

//
function IconPinned({
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
            className={`IconPinned rotate-45 ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke={stroke}
            fill={fill}
            strokeLinecap="round"
            strokeWidth={stroke_width}
        >
            <path d="M53.0673 24.2403C56.9307 21.1799 66.0385 20.2021 66.0385 20.2021C95.4672 19.779 109.426 20.1421 131.976 20.2021C131.976 20.2021 140.546 21.3292 144.226 24.2403C151.133 29.7032 144.226 44.1429 144.226 44.1429C144.226 44.1429 132.773 50.8565 128.012 56.8343C116.741 70.9867 128.012 99.8123 128.012 99.8123L148.55 115.388C148.55 115.388 151.813 123.558 148.55 127.503C145.871 130.741 137.741 132.406 137.741 132.406C109.721 133.653 94.0509 133.59 66.0385 132.406C66.0385 132.406 56.1455 131.25 53.0673 127.503C49.8199 123.55 53.0673 115.388 53.0673 115.388L69.2813 99.8123C69.2813 99.8123 80.5522 70.9867 69.2813 56.8343C64.5206 50.8565 53.0673 44.1429 53.0673 44.1429C53.0673 44.1429 46.1659 29.7073 53.0673 24.2403Z" />

            <path d="M91.6206 143C91.6206 143 96.3591 136.072 101.349 136C106.447 135.927 111.438 143 111.438 143V172.211C111.438 172.211 107.331 180.085 101.349 179.999C95.4586 179.915 91.6206 172.211 91.6206 172.211V143Z" />
        </svg>
    );
}

export default IconPinned;
