import React from 'react';
import PropTypes from 'prop-types';
//
import StoryZoomPic from '../../../../../_components/create/story_pic/zoom_pic/_main/StoryZoomPic';
import StoryRotatePic from '../../../../../_components/create/story_pic/rotate/StoryRotatePic';
//
import './StoryPicFootPcC.scss';

//
StoryPicFootPcC.propTypes = {};

//
function StoryPicFootPcC({
    value_zoom,
    handleChangeZoom,
    afterMouseUpZoom,
    handleRotatePic,
}) {
    //
    return (
        <div className="StoryPicFootPcC padding-4px user-select-none">
            <div className="display-flex-center">
                <div className="StoryPicFootPcC_left">
                    <StoryZoomPic
                        value={value_zoom}
                        handleChange={handleChangeZoom}
                        afterMouseUp={afterMouseUpZoom}
                    />
                </div>

                <div className="StoryPicFootPcC_right">
                    <StoryRotatePic handleRotate={handleRotatePic} />
                </div>
            </div>
        </div>
    );
}

export default StoryPicFootPcC;
