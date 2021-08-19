import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { use2FingersResize } from '../../../../../../_hooks/use2FingersResize';
import { useMouseMoveXY } from '../../../../../../_hooks/useMouseMoveXY';

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
        if (e.touches.length == 1) {
            handleStartMove(e);
        } else {
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
        handleTouchEnd(e);

        if (e.touches.length == 0) {
            ref_fake_elm.current.style.display = '';
        }
    }

    //
    return (
        <div
            className="StoryCPTextMb pos-abs left-50per top-50per padding-8px brs-8px bg-loader touch-action-none"
            style={{
                transform: `translate(-50%, -50%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg) scale(${scale})`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onClick={openChangeText}
        >
            <span className="StoryCPTextMb_text text-white label-field font-18px">
                {text}
            </span>

            <div className="pos-abs-100"></div>

            <div
                ref={ref_fake_elm}
                className="pos-abs-center wh-200v display-none"
                style={{ transform: `scale(${1 / scale})` }}
            ></div>
        </div>
    );
}

export default StoryCPTextMb;
