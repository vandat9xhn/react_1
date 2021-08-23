import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { use2FingersResize } from '../../../../../../_hooks/use2FingersResize';
import { useMouseMoveXY } from '../../../../../../_hooks/useMouseMoveXY';
//
import './StoryCPPicMb.scss';
import StoryBgTouch from '../../../../_components/create/mobile/bg_touch/StoryBgTouch';

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
    const ref_main_elm = useRef(null);
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
        ref_main_elm.current.style.zIndex = 100;
        ref_fake_elm.current.style.display = 'block';

        if (
            mode.toUpperCase() == 'MOVE' ||
            (mode.toUpperCase() == 'AUTO' && e.touches.length == 1)
        ) {
            handleStartMove(e);

            return;
        }

        if (['RESIZE', 'AUTO'].includes(mode.toUpperCase())) {
            handleTouchStart(e);
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
            ref_main_elm.current.style.removeProperty('z-index');
            ref_fake_elm.current.style.removeProperty('display');
        }
    }

    //
    return (
        <div
            ref={ref_main_elm}
            className={`StoryCPPicMb pos-abs left-50per top-50per ${
                mode.toUpperCase() == 'FIXED' ? '' : 'touch-action-none'
            }`}
            style={{
                transform: `translate(-50%, -50%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg) scale(${scale})`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            // onTouchEnd={handleTouchEnd}
        >
            <img
                className="StoryCPPicMb_img"
                src={vid_pic}
                alt=""
                style={{ filter: effect }}
            />

            <div className="pos-abs-100"></div>

            <StoryBgTouch ref_fake_elm={ref_fake_elm} scale={scale} />
        </div>
    );
}

export default StoryCPPicMb;
