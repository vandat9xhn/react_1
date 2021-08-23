import React from 'react';
import PropTypes from 'prop-types';

import './IconLike.scss';

//
IconLike.propTypes = {
    size_icon: PropTypes.string,
    stroke: PropTypes.string,
    fill: PropTypes.string,
};

IconLike.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--md-black-brown)',
    fill: 'none',
};

//
function IconLike({ stroke, fill, size_icon }) {
    //
    return (
        <svg
            className="IconsTypeLike IconLike"
            viewBox="0 0 200 200"
            width={size_icon}
            height={size_icon}
            fill={fill}
            stroke={stroke}
            strokeLinecap="round"
        >
            <g className="IconLike_g" strokeWidth="10">
                <path d="M25 175H60V90H25V175Z" />

                <path
                    d="M111.52 63.3861C108.616 83.9462 85 101.324 85 101.324V164.29C85 164.29 97.7313 172.073 
                    101.59 174.099C105.448 176.126 155.273 174.099 155.273 174.099C155.273 174.099 171.394 
                    174.099 174.943 164.29C178.354 154.864 169.619 147.941 169.619 147.941C169.619 147.941 
                    178.493 145.326 179.676 139.44C180.859 133.555 174.943 128.323 174.943 128.323C174.943 
                    128.323 185 124.399 185 116.552C185 108.705 174.943 106.089 174.943 106.089C174.943 
                    106.089 182.634 101.511 182.634 96.2799C182.634 91.0483 180.859 82.4149 164.295 
                    82.4149H129.868C129.868 82.4149 135.514 59.9263 135.514 49.5469C135.514 39.1676 118.577 
                    18.4089 111.52 27.0583C104.464 35.7078 113.025 52.7355 111.52 63.3861Z"
                />
            </g>
        </svg>
    );
}

export default IconLike;
