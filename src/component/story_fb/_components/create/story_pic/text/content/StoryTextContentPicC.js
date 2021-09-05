import React from 'react';
import PropTypes from 'prop-types';
//
import { useMouseMoveXY } from '../../../../../../../_hooks/useMouseMoveXY';
//
import './StoryTextContentPicC.scss';

//
StoryTextContentPicC.propTypes = {};

//
function StoryTextContentPicC({
    text,
    color,
    font,

    openChangeText,
    handleMouseMove,
}) {
    //
    const { handleStart } = useMouseMoveXY({
        handleMouseMove: handleMouseMove,
    });

    //
    return (
        <div
            className="StoryTextContentPicC pos-rel cursor-move"
            onDoubleClick={openChangeText}
            onMouseDown={handleStart}
        >
            <div className="text-align-center pointer-events-none">
                <span
                    className="font-500"
                    style={{ fontFamily: font, color: color }}
                >
                    {text}
                </span>
            </div>

            <div className="pos-abs-100"></div>
        </div>
    );
}

export default StoryTextContentPicC;
