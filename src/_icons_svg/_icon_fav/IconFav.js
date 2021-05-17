import React from 'react';
import PropTypes from 'prop-types';

import './IconFav.scss';
//
function IconFav(props) {
    const {size_icon} = props;

    return (
        <svg className="IconFav" height={size_icon} width={size_icon} viewBox="0 0 200 200">
            <g fill="none" strokeLinecap="round">
                {/* circle */}
                <g className="IconFav_circle" strokeWidth="8">
                    <path
                        id="aa"
                        d="M100,20 A80,80 0 0 1 100,180"
                        stroke="var(--color-react)"
                    />
                    <path
                        id="bb"
                        d="M100,180 A80,80 0 0 1 100,20"
                        stroke="var(--color-django)"
                    />

                    <path d="M100,180 100,180 100,180" stroke="var(--color-react)" />
                </g>

                <g className="IconFav_text">
                    {/* text out */}
                    <g className="IconFav_text-out">
                        <text>
                            <textPath
                                href="#bb"
                                startOffset="20%"
                                fill="var(--color-react)"
                            >
                                ReactJs
                            </textPath>
                        </text>

                        <text>
                            <textPath
                                href="#aa"
                                startOffset="25%"
                                fill="var(--color-django)"
                            >
                                Django
                            </textPath>
                        </text>
                    </g>

                    {/* text in */}
                    <g className="IconFav_text-in">
                        <text x="35" y="130" fill="var(--color-react)">
                            R
                        </text>

                        <text x="105" y="130" fill="var(--color-django)">
                            D
                        </text>
                    </g>
                </g>
            </g>
        </svg>
    );
}

IconFav.propTypes = {
    size_icon: PropTypes.string,
};

IconFav.defaultProps = {
    size_icon: '2rem',
}

export default IconFav;
