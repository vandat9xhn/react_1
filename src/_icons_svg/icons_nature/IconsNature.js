import React from 'react';
import PropTypes from 'prop-types';

import './IconsNature.scss';
/*
    icons nature: (x, y)
        1. snow flake: (0, 0)
        2.
*/
//
function IconsNature(props) {
    const { x, y } = props;

    return (
        <svg
            className="IconsNature"
            viewBox={`${x} ${y} 200 200`}
        >
            {/* define 1/6 snow flake */}
            <defs>
                {/* mid */}
                <g id="IconsNature_snow-mid">
                    <line x1="100" y1="15" x2="100" y2="100" />
                    <path d="M89,40 100,46 111,40" />
                    <path d="M85,20 100,27 115,20" />
                </g>

                {/* side: left-right */}
                <g id="IconsNature_snow-side">
                    <line x1="100" y1="40" x2="100" y2="100" />
                    <path d="M87,70 100,78 113,70" />
                    <path d="M87,47 100,56 113,47" />
                </g>

                {/* 1/6 of snow flake */}
                <g
                    id="IconsNature_snow-gr"
                    fill="none"
                    strokeWidth="5"
                    stroke="var(--md-snow-flake)"
                    strokeLinecap="round"
                >
                    <use href="#IconsNature_snow-mid" />
                    <use
                        className="IconsNature_snow-right"
                        href="#IconsNature_snow-side"
                    />
                    <use
                        className="IconsNature_snow-left"
                        href="#IconsNature_snow-side"
                    />
                </g>
            </defs>
            
            {/* icon snow flake x=0 y=0 */}
            <g className="IconsNature_snow">
                <use href="#IconsNature_snow-gr" />
                <use href="#IconsNature_snow-gr" />
                <use href="#IconsNature_snow-gr" />
                <use href="#IconsNature_snow-gr" />
                <use href="#IconsNature_snow-gr" />
                <use href="#IconsNature_snow-gr" />

                <circle cx="100" cy="100" r="15" fill="var(--md-snow-flake)" stroke="none"/>
            </g>
        </svg>
    );
}

IconsNature.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
};

IconsNature.defaultProps = {
    x: 0,
    y: 0,
};

export default IconsNature;
