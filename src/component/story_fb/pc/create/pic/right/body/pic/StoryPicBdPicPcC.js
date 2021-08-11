import React from 'react';
import PropTypes from 'prop-types';
//
import { useMouseMoveXY } from '../../../../../../../../_hooks/useMouseMoveXY';
//
import './StoryPicBdPicPcC.scss';

//
StoryPicBdPicPcC.propTypes = {};

//
function StoryPicBdPicPcC({ vid_pic_obj, handleMove }) {
    //
    const { vid_pic, trans_x, trans_y, scale, rotate } = vid_pic_obj;

    //
    const { handleStart } = useMouseMoveXY({
        handleMouseMove: handleMove,
    });

    //
    return (
        <div
            className="StoryPicBdPicPcC position-abs cursor-move h-100per left-50per top-50per"
            style={{
                transform: `translate(${-50}%, ${-50}%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg) scale(${scale})`,
            }}
            onMouseDown={handleStart}
        >
            <img
                className="pointer-events-none h-100per"
                src={vid_pic}
                alt=""
            />

            <div className="pos-abs-100"></div>
        </div>
    );
}

export default StoryPicBdPicPcC;
