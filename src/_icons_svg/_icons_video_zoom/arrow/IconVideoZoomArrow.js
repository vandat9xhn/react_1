import React from 'react';
import PropTypes from 'prop-types';
//
import './IconVideoZoomArrow.scss';

//
IconVideoZoomArrow.propTypes = {
    class_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,

    stroke: PropTypes.string,
    stroke_width: PropTypes.number,

    zoom_out: PropTypes.bool,
};

IconVideoZoomArrow.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1rem',

    stroke: 'currentColor',
    stroke_width: 5,

    zoom_out: false,
};

//
function IconVideoZoomArrow({
    class_icon,
    x,
    y,
    size_icon,

    stroke,
    stroke_width,

    zoom_out,
}) {
    //
    return (
        <svg
            className={`IconVideoZoomArrow ${class_icon} ${
                zoom_out ? 'IconVideoZoomArrow-out' : 'IconVideoZoomArrow-in'
            }`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            //
            stroke={stroke}
            fill={stroke}
            strokeWidth={stroke_width}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                className="IconVideoZoomArrow_top"
                d="M117.705 82.2416H180.755L180.328 66.1516L152.096 60.5267L182.705 29.8436L170.355 17.2416L139.636 48.0355L133.172 18.5939L118.083 19.0373L117.705 82.2416Z"
            />

            <path
                className="IconVideoZoomArrow_bot"
                d="M80.1741 119.772H17.1241L17.5504 135.862L45.7822 141.487L15.1741 172.17L27.5241 184.772L58.2429 153.978L64.707 183.42L79.7953 182.976L80.1741 119.772Z"
            />
        </svg>
    );
}

export default IconVideoZoomArrow;
