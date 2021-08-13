import React from 'react';
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
    const { handleStart: handleStartResize } = use2FingersResize({
        handleResize: handleResizeText,
    });

    const { handleStart: handleStartMove } = useMouseMoveXY({
        handleMouseMove: handleMoveText,
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
            className="StoryCPTextMb pos-abs left-50per top-50per padding-8px brs-8px bg-loader"
            style={{
                transform: `translate(-50%, -50%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg)`,
            }}
            onTouchStart={handleTouchStart}
            onDoubleClick={openChangeText}
        >
            <span
                className="StoryCPTextMb_text text-white label-field"
                style={{ fontSize: `${scale * 14 + 2}px` }}
            >
                {text}
            </span>
        </div>
    );
}

export default StoryCPTextMb;
