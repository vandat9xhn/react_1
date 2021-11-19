import React from 'react';
import PropTypes from 'prop-types';
//
import './IconWatch.scss';

//
IconWatch.propTypes = {
    class_icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    size_icon: PropTypes.string,

    stroke: PropTypes.string,
    stroke_width: PropTypes.number,
    fill: PropTypes.string,

    stroke_play: PropTypes.string,
    fill_play: PropTypes.string,
};

IconWatch.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1rem',

    stroke: 'currentColor',
    stroke_width: 10,
    fill: 'none',

    stroke_play: 'none',
    fill_play: 'currentColor',
};

//
function IconWatch({
    class_icon,
    x,
    y,
    size_icon,

    stroke,
    stroke_width,
    fill,

    stroke_play,
    fill_play,
}) {
    //
    return (
        <svg
            className={`IconWatch ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            stroke={stroke}
            fill={fill}
            strokeLinecap="round"
            strokeWidth={stroke_width}
        >
            <path d="M57.9661 180H142.486" />

            <path d="M26.7797 25.7778C31.5783 21.3361 42.5989 20 42.5989 20H160.565C160.565 20 169.641 21.9421 173.672 25.7778C178.809 30.6654 180 42.6667 180 42.6667V134.222C180 134.222 177.371 142.397 173.672 146.222C168.386 151.689 155.593 153.778 155.593 153.778H42.5989C42.5989 153.778 31.5931 151.039 26.7797 146.222C22.9587 142.398 20 134.222 20 134.222V42.6667C20 42.6667 21.529 30.6379 26.7797 25.7778Z" />

            <path
                className="IconWatch_play"
                d="M81.017 60.8889L88.7006 65.6489L117.492 83.4854L126.215 88.8889L117.492 93.7778L88.7006 109.916L81.017 114.222V104.889V69.7778V60.8889Z"
                fill={fill_play}
                stroke={stroke_play}
            />
        </svg>
    );
}

export default IconWatch;
