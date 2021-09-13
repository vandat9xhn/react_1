import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { use2FingersResize } from '../../../../../../_hooks/use2FingersResize';
import { useMouseMoveXY } from '../../../../../../_hooks/useMouseMoveXY';
//
import './StoryCPTextMb.scss';
import StoryBgTouch from '../../../../_components/create/mobile/bg_touch/StoryBgTouch';

//
StoryCPTextMb.propTypes = {};

//
function StoryCPTextMb({
    text_obj,

    openChangeText,
    handleResizeText,
    handleMoveText,
}) {
    //
    const { text, trans_x, trans_y, rotate, scale } = text_obj;

    //
    const ref_main_elm = useRef(null);
    const ref_fake_elm = useRef(null);

    //
    const { handleTouchStart, handleTouchMove, handleTouchEnd } =
        use2FingersResize({
            handleResize: handleResizeText,
        });

    const { handleStart: handleStartMove } = useMouseMoveXY({
        handleMouseMove: handleMoveText,
    });

    //
    function onTouchStart(e) {
        ref_main_elm.current.style.zIndex = 100;
        ref_fake_elm.current.style.display = 'block';
        if (e.touches.length == 1) {
            handleStartMove(e);
        } else {
            handleTouchStart(e);
        }
    }

    //
    function onTouchMove(e) {
        handleTouchMove(e);
    }

    //
    function onTouchEnd(e) {
        handleTouchEnd(e);

        if (e.touches.length == 0) {
            ref_main_elm.current.style.removeProperty('z-index');
            ref_fake_elm.current.style.removeProperty('display');
        }
    }

    //
    return (
        <div
            ref={ref_main_elm}
            className="StoryCPTextMb pos-abs left-50per top-50per padding-8px brs-8px bg-shadow-9 touch-action-none"
            style={{
                transform: `translate(-50%, -50%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg) scale(${scale})`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onClick={openChangeText}
        >
            <span className="StoryCPTextMb_text text-white font-500 font-18px">
                {text}
            </span>

            <div className="pos-abs-100"></div>

            <StoryBgTouch ref_fake_elm={ref_fake_elm} scale={scale} />

        </div>
    );
}

export default StoryCPTextMb;
