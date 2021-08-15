import React from 'react';
import PropTypes from 'prop-types';
//
import { use2FingersResize } from '../../../../../../_hooks/use2FingersResize';
import { useMouseMoveXY } from '../../../../../../_hooks/useMouseMoveXY';
//
import './StoryCPPicMb.scss';

//
StoryCPPicMb.propTypes = {};

//
function StoryCPPicMb({
    vid_pic_obj,
    handleResizePic,
    handleMovePic,
    handleTouchEnd,
}) {
    //
    const { vid_pic, mode, effect, trans_x, trans_y, rotate, scale } =
        vid_pic_obj;

    //
    const { handleStart: handleStartResize, handleElmTouchEnd } =
        use2FingersResize({
            handleResize: handleResizePic,
        });

    const { handleStart: handleStartMove } = useMouseMoveXY({
        handleMouseMove: handleMovePic,
    });

    //
    function handleTouchStart(e) {
        // if (e.touches.length == 1) {
            ['MOVE', 'AUTO'].includes(mode.toUpperCase()) && handleStartMove(e);
        // } else {
            ['RESIZE', 'AUTO'].includes(mode.toUpperCase()) && handleStartResize(e);
        // }
    }

    //
    function onTouchEnd() {
        handleTouchEnd();
        handleElmTouchEnd();
    }

    //
    return (
        <div
            className={`StoryCPPicMb pos-abs left-50per top-50per ${
                mode.toUpperCase() == 'FIXED' ? '' : 'touch-action-none'
            }`}
            style={{
                transform: `translate(-50%, -50%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg) scale(${scale})`,
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <img
                className="StoryCPPicMb_img"
                src={vid_pic}
                alt=""
                style={{ filter: effect }}
            />

            <div className="pos-abs-100"></div>
        </div>
    );
}

export default StoryCPPicMb;
