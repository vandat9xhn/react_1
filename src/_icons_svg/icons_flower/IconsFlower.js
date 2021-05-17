import React from 'react';
import PropTypes from 'prop-types';

import './IconsFlower.scss';
//
function IconsFlower(props) {
    const {x, y} = props;

    return (
        <svg
            className="IconsFlower"
            viewBox={`${x} ${y} 200 200`}
        >
            <defs>
                <g id="IconsFlower_a-petal">
                    <path
                        d="M131.348 29.4912C137.392 55.4794 99.4427 100 99.4427 100C99.4427 100 62.1185 
                        54.882 67.5378 29.4912C72.9571 3.50294 125.303 3.50294 131.348 29.4912Z"
                        fill="var(--md-gold)"
                        stroke="none"
                    />

                    <g stroke="#f7d000b0">
                        <line x1="100" y1="80" x2="100" y2="30" />
                        <line x1="100" y1="70" x2="80" y2="60" />
                        <line x1="100" y1="50" x2="115" y2="40" />
                    </g>
                </g>
            </defs>

            <g className="IconsFlower_mai">
                <use href="#IconsFlower_a-petal" />
                <use href="#IconsFlower_a-petal" />
                <use href="#IconsFlower_a-petal" />
                <use href="#IconsFlower_a-petal" />
                <use href="#IconsFlower_a-petal" />
                <use href="#IconsFlower_a-petal" />
                
                <circle cx="100" cy="100" r="20" fill="var(--md-heart)"/>
            </g>

        </svg>
    );
}

IconsFlower.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
};

IconsFlower.defaultProps = {
    x: 0,
    y: 0,
}

export default IconsFlower;
