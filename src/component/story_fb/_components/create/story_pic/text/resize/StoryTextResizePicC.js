import React from 'react';
import PropTypes from 'prop-types';
//
import { useMouseMoveXY } from '../../../../../../../_hooks/useMouseMoveXY';
// 
import './StoryTextResizePicC.scss'

//
StoryTextResizePicC.propTypes = {};

//
function StoryTextResizePicC({ handleResize }) {
    //
    const { handleStart } = useMouseMoveXY({
        handleMouseMove: handleResize,
    });

    //
    return (
        <div
            className="StoryTextResizePicC padding-4px brs-50 bg-always-white"
            onMouseDown={handleStart}
        ></div>
    );
}

export default StoryTextResizePicC;
