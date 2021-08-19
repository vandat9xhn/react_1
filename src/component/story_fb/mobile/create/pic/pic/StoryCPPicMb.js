import React, { useRef } from 'react';
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
    const ref_fake_elm = useRef(null);

    //
    const {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd: handleResizeEnd,
    } = use2FingersResize({
        handleResize: handleResizePic,
    });

    const { handleStart: handleStartMove } = useMouseMoveXY({
        handleMouseMove: handleMovePic,
    });

    //
    function onTouchStart(e) {
        if (
            mode.toUpperCase() == 'MOVE' ||
            (mode.toUpperCase() == 'AUTO' && e.touches.length == 1)
        ) {
            handleStartMove(e);

            return;
        }

        if (['RESIZE', 'AUTO'].includes(mode.toUpperCase())) {
            handleTouchStart(e);

            ref_fake_elm.current.style.display = 'block';
        }
    }

    //
    function onTouchMove(e) {
        handleTouchMove(e);
    }

    //
    function onTouchEnd(e) {
        handleResizeEnd(e);
        handleTouchEnd();

        if (e.touches.length == 0) {
            ref_fake_elm.current.style.display = '';
        }
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
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchEnd={handleTouchEnd}
        >
            <img
                className="StoryCPPicMb_img"
                src={vid_pic}
                alt=""
                style={{ filter: effect }}
            />

            <div className="pos-abs-100"></div>

            <div
                ref={ref_fake_elm}
                className="pos-abs-center wh-200v display-none"
                style={{ transform: `scale(${1 / scale})` }}
            ></div>
        </div>
    );
}

export default StoryCPPicMb;
