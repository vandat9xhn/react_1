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
    fill: 'none',
    stroke: 'var(--md-black-brown)',
    stroke_width: '5',
};

function IconBell({ class_icon, size_icon, x, y, stroke, stroke_width, fill }) {
    //
    return (
        <svg
            className={`IconBell ${class_icon}`}
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
            stroke={stroke}
            fill={fill}
            strokeLinecap="round"
        >
            <path
                className="IconBell_notice"
                strokeWidth={stroke_width}
                d="M56.8502 173.826C56.8502 173.826 56.8502 173.826 36.4526 181.212C16.055 188.599 17.6868 
                    159.792 17.6868 159.792C17.6868 159.792 24.0736 147.438 24.214 134.678C24.3544 121.919 3.05772 
                    109.036 3.00051 83.7123C2.94331 58.3883 7.6415 45.3491 32.3731 26.0986C30.5135 16.5274 32.6169 
                    7.4279 42.1639 3.93952C52.0743 0.318338 61.2858 7.83804 66.641 15.0191C99.1197 17.3862 111.787 
                    22.0307 125.386 35.7009C138.985 49.3711 142.55 75.8502 151.495 87.4055C160.44 98.9608 165.801 
                    104.149 176.788 108.087C184.175 114.789 184.203 119.932 180.868 130.246C177.532 140.561 100.093 
                    159.792 100.093 159.792M56.8502 173.826C56.8502 173.826 73.9842 187.86 87.8545 181.212C101.725 
                    174.565 100.093 159.792 100.093 159.792M56.8502 173.826L100.093 159.792M24.214 102.178C22.5822 
                    93.3146 24.214 83.7123 24.214 83.7123M24.214 72.6328C24.214 61.5532 29.1094 52.6896 47.8752 
                    42.3486"
            />
        </svg>
    );
}

export default IconBell;
