import React from 'react';
import PropTypes from 'prop-types';
//
import { simple_icon_propTypes } from '../../_prop-types/icon';

//
IconTablePhone.propTypes = {
    ...simple_icon_propTypes,
};

IconTablePhone.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1.5rem',
    fill: 'none',
    stroke: 'currentColor',
    stroke_width: '15',
};

function IconTablePhone({
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
            className={`IconTablePhone ${class_icon}`}
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
            stroke={stroke}
            strokeWidth={stroke_width}
            fill={fill}
            strokeLinecap="round"
        >
            <path d="M179.6 144.198C182.906 149.876 165.273 181.105 143.232 179.97C121.19 178.834 109.613 166.558 61.6785 123.189C13.7441 79.8197 18.1524 61.65 22.555 49.3743C26.9576 37.0986 43.4886 16.0897 51.2031 20.6322C58.9176 25.1746 85.9126 53.4971 83.7142 57.8235C81.5157 62.1499 57.2645 66.6245 66.6378 78.9002C76.0111 91.1759 114.578 135.113 123.94 135.329C133.302 135.545 138.272 110.13 143.232 111.481C148.191 112.833 176.294 138.52 179.6 144.198Z" />
        </svg>
    );
}

export default IconTablePhone;
