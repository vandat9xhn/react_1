import React from 'react';
import PropTypes from 'prop-types';
//
import { use2FingersResize } from '../../../../../../_hooks/use2FingersResize';
import { useMouseMoveXY } from '../../../../../../_hooks/useMouseMoveXY';

//
StoryCPPicMb.propTypes = {};

//
function StoryCPPicMb({ vid_pic_obj, handleResizePic, handleMovePic }) {
    //
    const { vid_pic, effect, trans_x, trans_y, rotate, scale } = vid_pic_obj;

    //
    const { handleStart: handleStartResize } = use2FingersResize({
        handleResize: handleResizePic,
    });

    const { handleStart: handleStartMove } = useMouseMoveXY({
        handleMouseMove: handleMovePic,
    });

    //
    function handleTouchStart(e) {
        if (e.touches.length == 1) {
            handleStartMove(e);
        } else {
            handleStartResize(e);
        }
    }

    //
    return (
        <div
            className="StoryCPPicMb pos-abs left-50per top-50per touch-action-none"
            style={{
                transform: `translate(-50%, -50%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg) scale(${scale})`,
            }}
            onTouchStart={handleTouchStart}
        >
            <img src={vid_pic} alt="" style={{ filter: effect }} />

            <div className="pos-abs-100"></div>
        </div>
    );
}

export default StoryCPPicMb;
