import React from 'react';
import PropTypes from 'prop-types';
//
import { useMouseMoveXY } from '../../../../../../../_hooks/useMouseMoveXY';
//
import IconUpdate from '../../../../../../../_icons_svg/icon_update/IconUpdate';
//
import './StoryTextRotatePicC.scss';

//
StoryTextRotatePicC.propTypes = {};

//
function StoryTextRotatePicC({ handleRotate }) {
    //
    const { handleStart } = useMouseMoveXY({
        handleMouseMove: handleRotate,
    });

    //
    return (
        <div
            className="StoryTextRotatePicC display-flex-center bg-primary brs-50 cursor-pointer"
            onMouseDown={handleStart}
            onTouchStart={handleStart}
        >
            <IconUpdate size_icon="1rem" />
        </div>
    );
}

export default StoryTextRotatePicC;
